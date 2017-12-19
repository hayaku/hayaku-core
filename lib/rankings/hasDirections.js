module.exports =  function(result) {
  return result.property.match(/top|right|bottom|left/) ? 1 : 0;
};
