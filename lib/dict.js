const CSSdata = require('mdn-data');
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

module.exports = {
  getRegexpsByProp: prop => propRegexps[propNames.indexOf(prop)],
  getPropsFromAbbr: abbr => propNames.filter((prop, i) => abbr.match(propRegexps[i].looseProp))
};
