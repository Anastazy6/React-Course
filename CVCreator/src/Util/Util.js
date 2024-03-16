export function parseCSSSelector (string) {
  if (!typeof string === 'string') {
    throw new TypeError(`Only strings may be parsed as CSS selectors, got ${typeof string}.`);
  }

  return string.toLowerCase().replaceAll(' ', '-');
}