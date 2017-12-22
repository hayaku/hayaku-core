// Order is important!
const Rankings = [
  'fullyExpanded',
  'hasProperDashes',
  'valueHasProperDashes',
  'hasValue',
  'startsFromAbbr',
  'hasCommonPairStart',
  'hasDirections',
  'recursiveShorterChecker',
  'popularity'
].map(ranking => ({
  name: ranking,
  func: require(`./rankings/${ranking}.js`)
}));

const rankAndSort = results => sortResults(rankResults(results));

const rankResults = function(results) {
  return results.map(result => {
    result.weights = Rankings.map(ranking => ({
      name: ranking.name,
      weight: ranking.func(result, {
        rankAndSort // used for recursive checker
      })
    }));
    return result;
  });
};

const sortResults = function(results) {
  return results.sort((a, b) => {
    let checks = 0;
    const check = () => {
      if (checks < Rankings.length) {
        const index = checks;
        checks++;
        // Makes next check only if the previous is uncertain
        return b.weights[index].weight - a.weights[index].weight || check();
      } else {
        return 0;
      }
    };
    return check();
  });
};

module.exports = rankAndSort;
