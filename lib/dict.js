const CSSdata = require('mdn-data');
const propNames = Object.keys(CSSdata.css.properties);

const abbrLooseMatcher = abbr => new RegExp(`^${abbr.split('').join('.*')}.*$`);

module.exports = {
  getPropsFromAbbr: abbr => propNames.filter(prop => prop.match(abbrLooseMatcher(abbr)))
};
