// Some properties has common aliases people used to have in abbrs.
module.exports = function(result) {
  return result.property.indexOf('border') === 0
    && result.abbr.prop.indexOf('bd') === 0
    || result.property.indexOf('background') === 0
    && result.abbr.prop.indexOf('bg') === 0
    ? 1 : 0;
};
