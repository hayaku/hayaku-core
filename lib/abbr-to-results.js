const dict = require('./dict.js');

const createResultObject = (abbr, abbrProp, abbrValue, prop) => ({
  abbr: {
    raw: abbr,
    prop: abbrProp,
    value: abbrValue
  },
  property: prop,
  value: abbrValue, // Not really for now
  data: {
    propRegexps: dict.getRegexpsByProp(prop)
  }
});

const abbrToResults = function(abbr) {
  let foundProps = [];
  if (abbr.indexOf(':') > 0) {
    const abbrSplat = abbr.split(':');
    foundProps = dict.getPropsFromAbbr(abbrSplat[0]).map(prop => createResultObject(abbr, abbrSplat[0], abbrSplat[1], prop));
  } else {
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
  return foundProps;
};

module.exports = abbrToResults;
