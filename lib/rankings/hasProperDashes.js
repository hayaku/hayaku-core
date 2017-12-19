module.exports = function(result) {
  return (
    result.property.indexOf('-') === -1 || result.abbr.prop.match(result.data.propRegexps.strictProp)
  ) ? 1 : 0
};
