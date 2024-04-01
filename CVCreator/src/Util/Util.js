export function parseCSSSelector (string) {
  if (!typeof string === 'string') {
    throw new TypeError(`Only strings may be parsed as CSS selectors, got ${typeof string}.`);
  }

  return string.toLowerCase().replaceAll(' ', '-');
}


export function arrayRange (start, stop, step) {
  return Array.from( 
    { length: (stop - start) / step + 1},
    (value, index) => start + index * step
  );
}


export function findItemsByIds (ids, items) {
  return ids.length > 0
  ? ids.map(
    id => items.find(item => item.id === id) 
  )
  : null;
}
