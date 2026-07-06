/** Two-digit card number from an array index: 0 -> '01'. */
export function padIndex(i: number): string {
  return String(i + 1).padStart(2, '0');
}

/**
 * Monogram initials derived from a title, so entries don't need a manual
 * `monogram` field. Splits camelCase ("NeuroFly" -> "NF"); a provided
 * override always wins.
 */
export function monogramFor(title: string, override?: string): string {
  if (override) return override;
  const words = title
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return '·';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
