// If everything else is similar, choose the more popular property.
const PropertiesByPopularity = require('./../popularity/properties.js');
module.exports = function(result) {
  const index = PropertiesByPopularity.indexOf(result.property);
  return index === -1 ? 0 : PropertiesByPopularity.length - index;
};
