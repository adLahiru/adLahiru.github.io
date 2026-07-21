import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');

const MIME = {
  '.css': 'text/css',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

function startStaticServer() {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? '/', 'http://127.0.0.1');
      let urlPath = decodeURIComponent(url.pathname);
      if (urlPath === '/' || urlPath.endsWith('/')) {
        urlPath = path.posix.join(urlPath, 'index.html');
      }

      const filePath = path.normalize(path.join(distDir, urlPath));
      if (!filePath.startsWith(distDir)) {
        res.writeHead(403).end('Forbidden');
        return;
      }

      await stat(filePath);
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] ?? 'application/octet-stream' });
      createReadStream(filePath).pipe(res);
    } catch {
      const html = await readFile(indexPath);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
    }
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (!address || typeof address === 'string') {
        throw new Error('Failed to bind prerender server');
      }
      resolve({ server, port: address.port });
    });
  });
}

async function prerender() {
  const { server, port } = await startStaticServer();
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => {
      const h1 = document.querySelector('h1');
      return Boolean(h1?.textContent?.includes('Lahiru'));
    });
    // Let staggered Framer Motion content settle into the DOM.
    await new Promise((resolve) => setTimeout(resolve, 800));

    const rootHtml = await page.locator('#root').innerHTML();
    if (!rootHtml.includes('Lahiru')) {
      throw new Error('Prerender produced empty #root — aborting');
    }

    const indexHtml = await readFile(indexPath, 'utf8');
    const rootOpen = '<div id="root">';
    const start = indexHtml.indexOf(rootOpen);
    if (start === -1) {
      throw new Error('Could not locate #root in dist/index.html');
    }

    // Replace the entire #root element (empty or previously prerendered).
    let depth = 0;
    let i = start;
    let end = -1;
    while (i < indexHtml.length) {
      const nextOpen = indexHtml.indexOf('<div', i);
      const nextClose = indexHtml.indexOf('</div>', i);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth += 1;
        i = nextOpen + 4;
      } else {
        depth -= 1;
        i = nextClose + 6;
        if (depth === 0) {
          end = i;
          break;
        }
      }
    }
    if (end === -1) {
      throw new Error('Could not find closing tag for #root');
    }

    const nextHtml =
      indexHtml.slice(0, start) + `<div id="root">${rootHtml}</div>` + indexHtml.slice(end);

    await writeFile(indexPath, nextHtml);
    console.log('Prerendered crawlable HTML into dist/index.html');
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
