function rankPatterns(patterns) {
  return patterns.sort((a, b) => {
    const aWildCards = a.match(/\*/g).length;
    const bWildCards = b.match(/\*/g).length;

    // Check number of wild cards
    if (aWildCards < bWildCards) {
      return -1;
    }
    if (aWildCards > bWildCards) {
      return 1;
    }

    // check position of first wild card
    if (a.indexOf('*') > b.indexOf('*')) {
      return -1;
    }
    if (a.indexOf('*') < b.indexOf('*')) {
      return 1;
    }

    return 0;
  });
}

export default rankPatterns;
