// If we can expand a thing to a one with a direction, its often preferable,
// as this allows for more consistency.
module.exports = function(result) {
  return result.property.match(/top|right|bottom|left/) ? 1 : 0;
};
