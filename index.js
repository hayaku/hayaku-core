const abbrToResults = require('./lib/abbrToResults.js');
const rankAndSort = require('./lib/rankAndSort.js');

const Hayaku = {
  expandDeclaration: abbr => rankAndSort(abbrToResults(abbr)),
  expandProp: abbr => rankAndSort(abbrToResults(abbr + ':'))
};

module.exports = Hayaku;
