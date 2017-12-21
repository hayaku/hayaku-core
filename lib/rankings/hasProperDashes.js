// If property has dashes and all letters in abbr match the first letter
// of every word between dashes, that should rank the result up.
const matcher = prop => new RegExp(`^${prop.replace(/([^-])[^-]*/g, '$1.*').replace(/-/g, '-?')}$`);
const ignoredProps = ['z-index'];
module.exports = function(result) {
  return result.property.indexOf('-') === -1
    || ignoredProps.indexOf(result.property) !== -1
    || result.abbr.prop.match(matcher(result.property))
    ? 1 : 0;
};
