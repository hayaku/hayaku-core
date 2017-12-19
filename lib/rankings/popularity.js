const PropsByPopularity = require('./popularity/props.js');

module.exports = function(result) {
  const index = PropsByPopularity.indexOf(result.property);
  return index === -1 ? 0 : PropsByPopularity.length - index;
};
