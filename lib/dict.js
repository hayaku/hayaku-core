const csstree = require('css-tree');
const ValuesByPopularity = require('./popularity/values.js');

const getPropValues = (prop) => {
  const keywords = [];
  const types = [];
  const searcher = (node) => {
    if (!node) return;
    if (node.type === 'Keyword' && keywords.indexOf(node.name) === -1) {
      keywords.push(node.name);
    } else if (node.type === 'Type' || node.type === 'Property') {
      if (types.indexOf(node.name) === -1) {
        types.push(node.name);
        const typeSource = csstree.lexer.getProperty(node.name) || csstree.lexer.types[node.name];
        if (typeSource && typeSource.syntax) {
          csstree.grammar.walk(typeSource.syntax, searcher);
        }
      }
    }
  };

  csstree.grammar.walk(csstree.lexer.getProperty(prop).syntax, searcher);

  return {
    // TODO: handle this similar to prop rankings?
    keywords: keywords.sort((a, b) => {
      const propValues = ValuesByPopularity[prop];
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

module.exports = {
  getPropsFromAbbr: abbr => Object.keys(csstree.lexer.properties).filter(prop => prop.match(initialFilter(abbr))),
  getValuesFromPropAndAbbr: (prop, abbr) => abbr && getPropValues(prop).keywords.filter(value => value.match(initialFilter(abbr)))
};
