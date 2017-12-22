const dict = require('./dict.js');
const getAbbrSplits = require('./getAbbrSplits.js');

const createResultObject = (property, splitAbbr) => {
  const possibleValues = dict.getValuesFromPropAndAbbr(property, splitAbbr.val);
  return {
    property: property,
    value: possibleValues[0],
    possibleValues: possibleValues,
    abbr: splitAbbr
  };
};

const abbrToResults = abbr => getAbbrSplits(abbr)
  .map(split => dict.getPropsFromAbbr(split.prop)
    .map(property => createResultObject(property, split))
  )
  .reduce((acc, cur) => acc.concat(cur), []);

module.exports = abbrToResults;
