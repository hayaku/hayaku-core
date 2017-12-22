// Checks if there was a shorter abbreviation that expanded to the same prop,
// lowers the ranking if found one.
// Example: bgr without this would expand to `background` and not `background-repeat`.
const abbrToResults = require('./../abbrToResults.js');
const resultsCache = {};
module.exports = (result, options) => {
  const resultLength = result.abbr.prop.length;
  if (resultLength > 1) {
    const shorterAbbr = result.abbr.prop.substr(0, resultLength - 1) + ':';
    if (!resultsCache[shorterAbbr]) {
      resultsCache[shorterAbbr] = options.rankAndSort(abbrToResults(shorterAbbr))[0].property;
    }
    return resultsCache[shorterAbbr] === result.property ? -1 : 0;
  }
  resultsCache[result.abbr.prop] = result.property;
  return 0;
};
