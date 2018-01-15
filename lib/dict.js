const csstree = require('css-tree');
const ValuesByPopularity = require('./popularity/values.js');

const getPropertyValues = (property) => {
  const keywords = [];
  const types = [];
  const collect = (def) => {
    if (!def || !def.syntax) return;
    csstree.grammar.walk(def.syntax, (node) => {
      switch (node.type) {
        case 'Keyword':
          if (keywords.indexOf(node.name) === -1) {
            keywords.push(node.name);
          }
          break;

        case 'Type':
          if (types.indexOf(node.name) === -1) {
            types.push(node.name);
            collect(csstree.lexer.getType(node.name));
          }
          break;

        case 'Property':
          collect(csstree.lexer.getProperty(node.name));
          break;
      }
    });
  };

  collect(csstree.lexer.getProperty(property));

  return {
    // TODO: handle this similar to prop rankings?
    keywords: keywords.sort((a, b) => {
      const propValues = ValuesByPopularity[property];
      if (propValues) {
        const aPop = propValues.indexOf(a) === -1 ? 0 : propValues.length - propValues.indexOf(a);
        const bPop = propValues.indexOf(b) === -1 ? 0 : propValues.length - propValues.indexOf(b);
        return bPop - aPop;
      }
      return 0;
    }),
    types: types
  };
};

// Really loose filter, just to remove those props that won't fit completely.
const initialFilter = abbr => new RegExp(`^${abbr.split('').join('.*')}.*$`);

const valMatchers = {};
['length'].map(type => {
  const valMatcher = require(`./valMatchers/${type}.js`);
  valMatchers[type] = (property, val) => {
    const result = { type };
    const match = val.match(valMatcher.matcher);
    if (match) {
      result.value = valMatcher.extract(property, match);
    }
    if (result.value) return result;
  };
});

const getValuesFromPropertyAndVal = (property, abbr) => {
  if (!abbr) return [];
  const result = [];
  const propertyValues = getPropertyValues(property);
  const filteredKeywords = propertyValues.keywords.filter(value => value.match(initialFilter(abbr)));
  filteredKeywords.map(keyword => result.push({
    value: keyword,
    type: 'keyword'
  }));
  propertyValues.types.map(type => {
    if (valMatchers[type]) {
      const valMatcherResult = valMatchers[type](property, abbr);
      if (valMatcherResult) result.push(valMatcherResult);
    }
  });
  return result;
};

module.exports = {
  getPropertiesFromAbbr: abbr => Object.keys(csstree.lexer.properties).filter(property => property.match(initialFilter(abbr))),
  getValuesFromPropertyAndVal
};
