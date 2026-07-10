export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/** Prefilled Gmail compose window URL (new-tab fallback for the contact form). */
export function gmailComposeUrl(opts: { to: string; subject: string; body: string }): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: opts.to,
    su: opts.subject,
    body: opts.body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}
