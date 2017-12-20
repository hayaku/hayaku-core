const dict = require('./dict.js');

const createResultObject = (abbr, abbrProp, abbrValue, prop) => ({
  property: prop,
  abbr: {
    raw: abbr,
    prop: abbrProp,
    value: abbrValue
  }
});

const abbrToResults = function(abbr) {
  // First step: get the results for the prop part
  let foundProps = [];
  if (abbr.indexOf(':') > 0) {
    // If we already know the prop:value split
    const abbrSplat = abbr.split(':');
    foundProps = dict.getPropsFromAbbr(abbrSplat[0]).map(prop => createResultObject(abbr, abbrSplat[0], abbrSplat[1], prop));
  } else {
    // If we have an uncertain abbr like `poa`
    const possSplit = abbr.match(/^([a-z-]*[a-z])(-?\d.*])?$/i);
    if (possSplit) {
      const possProp = possSplit[1];
      const possValue = possSplit[2] || '';
      for (var i = 1; i <= possProp.length; i++) {
        const splitProp = possProp.substr(0, i);
        const splitValue = possProp.substr(i) + possValue;
        foundProps = foundProps.concat(dict.getPropsFromAbbr(splitProp).map(prop => createResultObject(abbr, splitProp, splitValue, prop)
        ));
      }
    }
  }

  // First pass for getting the value
  foundProps = foundProps.map(result => {
    result.possibleValues = dict.getValuesFromPropAndAbbr(result.property, result.abbr.value);
    result.value = result.possibleValues[0];
    return result;
  });

  return foundProps;
};

module.exports = abbrToResults;
