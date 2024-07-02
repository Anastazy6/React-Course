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
  return (ids.length > 0 && items.length > 0)
    ? ids.map(
      id => items.find(item => item.id === id) 
    )
    : null;
}

/**
 * 
 * @param {*} itemFinderCB    Instructions to find the item you want to move within the Array it is in
 * @param {*} itemContainer   The Array containing the item to be moved
 * @param {String} direction  'up' or 'down'
 * @returns 
 */
export function moveItem (itemContainer, item, direction) {
  const containerCopy = [...itemContainer];
  const itemIndex = containerCopy.indexOf(item);

  switch (direction) {
    case 'up': {
      return moveUp(containerCopy, itemIndex);
    }
    case 'down': {
      return moveDown(containerCopy, itemIndex);
    }
    default: {
      throw new TypeError(`Invalid moving direction: ${ direction }. Must be "up" or "down".`)
    }
  }
}

function moveUp (itemContainer, itemIndex) {
  if (itemIndex > 0) {
    let temp = itemContainer[itemIndex];
    itemContainer[itemIndex]     = itemContainer[itemIndex - 1];
    itemContainer[itemIndex - 1] = temp;
  }

  return itemContainer;
}


function moveDown (itemContainer, itemIndex) {
   if (itemIndex < itemContainer.length - 1) {
    let temp = itemContainer[itemIndex];
    itemContainer[itemIndex]     = itemContainer[itemIndex + 1];
    itemContainer[itemIndex + 1] = temp;
   }

   return itemContainer;
}
/**
 * Replaces white space following a single-letter word with non-breaking white space
 *   so that single-letter words are moved into next line instead of hanging at the end.
 * @param {String} text 
 */
export function enforceCleanLineBreak (text) {
  return text.replace(/ ([a-zA-z]) /g, ' $1' + '\u00A0');
}


export function isHttpLink (url) {
  return url.startsWith('http://') || url.startsWith('https://');
}