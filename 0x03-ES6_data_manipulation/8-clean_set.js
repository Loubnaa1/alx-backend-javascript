export default function cleanSet(set, startString) {
    if (!startString || startString.length === 0) {
      return '';
    }
    const setToArray = Array.from(set)
      .filter((tmp) => typeof tmp === 'string' && tmp.startsWith(startString))
      .map((tmp) => tmp.slice(startString.length));
  
    return setToArray.join('-');
  }
