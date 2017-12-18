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

const getProps = function(abbr) {
  return propNames.filter((prop, i) => abbr.match(propRegexps[i].looseProp));
};

const getDeclarationParts = function(abbr) {
  let foundProps = [];
  if (abbr.indexOf(':') > 0) {
    const abbrSplat = abbr.split(':');
    foundProps = getProps(abbrSplat[0]).map(prop => { return {
      abbr: {
        raw: abbr,
        prop: abbrSplat[0],
        value: abbrSplat[1]
      },
      property: prop,
      value: abbrSplat[1]
    }});
  } else {
    const possSplit = abbr.match(/^([a-z-]*[a-z])(-?\d.*])?$/i);
    if (possSplit) {
      const possProp = possSplit[1];
      const possValue = possSplit[2] || '';
      for (var i = 1; i <= possProp.length; i++) {
        const splitProp = possProp.substr(0, i);
        const splitValue = possProp.substr(i) + possValue;
        foundProps = foundProps.concat(getProps(splitProp).map(prop => { return {
          abbr: {
            raw: abbr,
            prop: splitProp,
            value: splitValue
          },
          property: prop,
          value: splitValue
        }}));
      }
    }
  }
  return foundProps;
};

const sortResults = function(results) {
  results.sort((a, b) => {
    return (b.weights.hasProperDashes - a.weights.hasProperDashes) ||
           (b.weights.startsFromAbbr - a.weights.startsFromAbbr) ||
           (b.weights.hasCommonPairStart - a.weights.hasCommonPairStart) ||
           (b.weights.hasDirections - a.weights.hasDirections) ||
           (a.weights.popularity - b.weights.popularity) ||
           (a.weights.strLength - b.weights.strLength);
  });
};

const rankResults = function(results) {
  return results.map(result => {
    result.weights = {
      hasProperDashes: (
        result.property.indexOf('-') === -1 || result.abbr.prop.match(propRegexps[propNames.indexOf(result.property)].strictProp)
      ) ? 1 : 0,
      startsFromAbbr: result.property.indexOf(result.abbr.prop) === 0 ? 1 : 0,
      hasCommonPairStart: (
        (result.property.indexOf('border') === 0 && result.abbr.prop.indexOf('bd') === 0) ||
        (result.property.indexOf('background') === 0 && result.abbr.prop.indexOf('bg') === 0)
      ) ? 1 : 0,
      hasDirections: result.property.match(/top|right|bottom|left/) ? 1 : 0,
      popularity: PropsByPopularity.indexOf(result.property) === -1 ? PropsByPopularity.length : PropsByPopularity.indexOf(result.property),
      strLength: result.property.length
    };
    return result;
  });
}

const expandDeclaration = function(abbr) {
  const rankedProps = rankResults(getDeclarationParts(abbr));
  sortResults(rankedProps);
  return rankedProps;
}

// console.log(expandDeclaration('pos'))


const expandProps = function(abbr) {
  const rankedProps = rankResults(expandDeclaration(abbr + ':'));
  sortResults(rankedProps);
  return rankedProps;
};

const Hayaku = {
  expandProps: expandProps
}

module.exports = Hayaku;
