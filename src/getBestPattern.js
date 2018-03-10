import rankPatterns from './rankPatterns';

function getBestPattern(patterns, dir) {
  // split dir into parts using '/'
  const dirParts = dir.replace(/^\//, '').replace(/\/$/, '').split('/');

  // filter out patterns that do not match dir
  const matchedPatterns = patterns.filter((pattern) => {
    // split pattern into parts using ','
    const patternParts = pattern.split(',');

    // if length of dirParts does not match patternParts length, filter out
    if (dirParts.length !== patternParts.length) {
      return false;
    }

    // check pattern parts against dirParts for matches.
    return patternParts.every((patternPart, index) => {
      if (patternPart === '*' || patternPart === dirParts[index]) {
        return true;
      }
      return false;
    });
  });

  // No matches.
  if (matchedPatterns.length === 0) {
    return 'NO MATCH';
  }

  // only one match.
  if (matchedPatterns.length === 1) {
    return matchedPatterns[0];
  }

  const rankedPatterns = rankPatterns(matchedPatterns);
  return rankedPatterns[0];
}

export default getBestPattern;
