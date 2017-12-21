// Abbreviations missing expanded values should be lowered
module.exports = function (result) {
  return result.value || !result.value && !result.abbr.value ? 1 : 0;
};
