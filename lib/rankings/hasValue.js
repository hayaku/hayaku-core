// If the result have an actual value, rank it up.
module.exports = function(result) {
  return result.value ? 1 : 0;
};
