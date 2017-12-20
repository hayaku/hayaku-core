const abbrToResults = require('./lib/abbr-to-results.js');
const rankAndSort = require('./lib/rank-and-sort.js');

const Hayaku = {
  expandDeclaration: abbr => rankAndSort(abbrToResults(abbr)),
  expandProp: abbr => rankAndSort(abbrToResults(abbr + ':'))
};

module.exports = Hayaku;
