module.exports = function(result) {
  return result.property.indexOf(result.abbr.prop) === 0 ? 1 : 0;
};
