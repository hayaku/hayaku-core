// Abbreviations missing expanded values should be lowered
module.exports = function (result) {
  return result.value || !result.value && !result.abbr.val ? 1 : 0;
};
