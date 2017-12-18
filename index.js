const CSSdata = require('mdn-data');
const PropsByPopularity = require('./lib/props-by-popularity.js');

const propNames = Object.keys(CSSdata.css.properties);

const propRegexps = propNames.map(prop => {
  let prefix = '';
  let property = prop;
  if (prop[0] === '-') {
    let matchPrefix = prop.match(/^(-[^-]*-)(.+)$/i)
    if (matchPrefix) {
      prefix = matchPrefix[1];
      property = matchPrefix[2];
    }
  }

  property = property.replace(/([\*])/g, '\\$1');
  property = property.replace(/(.)/g, '$1?').replace(/^(.)\?/g, '$1');

  // TODO & FIXME: handle prefix, now its fakey-fakey
  return {
    strictProp: new RegExp(`^${prefix + property.replace(/(\-\?.)\?/g, '$1')}$`, 'i'),
    looseProp: new RegExp(`^${prefix + property}$`, 'i')
  };
});

const expandProps = function(abbr) {
  const filteredProps = propNames.filter((prop, i) => abbr.match(propRegexps[i].looseProp));
  const rankedProps = filteredProps.map(prop => { return {
    name: prop,
    weights: {
      hasProperDashes: (
        prop.indexOf('-') === -1 || abbr.match(propRegexps[propNames.indexOf(prop)].strictProp)
      ) ? 1 : 0,
      startsFromAbbr: prop.indexOf(abbr) === 0 ? 1 : 0,
      hasCommonPairStart: (
        (prop.indexOf('border') === 0 && abbr.indexOf('bd') === 0) ||
        (prop.indexOf('background') === 0 && abbr.indexOf('bg') === 0)
      ) ? 1 : 0,
      hasDirections: prop.match(/top|right|bottom|left/) ? 1 : 0,
      popularity: PropsByPopularity.indexOf(prop) === -1 ? PropsByPopularity.length : PropsByPopularity.indexOf(prop),
      strLength: prop.length
    }
  }})

  rankedProps.sort((a, b) => {
    return (b.weights.hasProperDashes - a.weights.hasProperDashes) ||
           (b.weights.startsFromAbbr - a.weights.startsFromAbbr) ||
           (b.weights.hasCommonPairStart - a.weights.hasCommonPairStart) ||
           (b.weights.hasDirections - a.weights.hasDirections) ||
           (a.weights.popularity - b.weights.popularity) ||
           (a.weights.strLength - b.weights.strLength);
  })

  return rankedProps;
};

const Hayaku = {
  expandProps: expandProps
}

module.exports = Hayaku;
