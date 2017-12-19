const matcher = prop => new RegExp(`^${prop.replace(/([^-])[^-]*/g, '$1.*').replace(/-/g, '-?')}$`);

module.exports = function(result) {
  return (
    result.property.indexOf('-') === -1 || result.abbr.prop.match(matcher(result.property))
  ) ? 1 : 0
};
