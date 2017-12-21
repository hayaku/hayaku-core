// If the property starts from the abbreviation, rank it higher.
module.exports = function(result) {
  return result.property.indexOf(result.abbr.prop) === 0 ? 1 : 0;
};
