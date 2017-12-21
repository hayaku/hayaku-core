// If the result have an actual value, rank it up.
const matcher = value => new RegExp(`^${value.replace(/([^-])[^-]*/g, '$1.*').replace(/-/g, '-?')}$`);
module.exports = function (result) {
  return !result.value && !result.abbr.value || result.value && (result.value.indexOf('-') === -1 || result.abbr.value.match(matcher(result.value))) ? 1 : 0;
};
