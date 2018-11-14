// Proxy for jest test to write abbr only once, ok
const test = (desc, func) => it(desc, () => func(desc));
test.only = (desc, func) => it.only(desc, () => func(desc));
test.skip = (desc, func) => it.skip(desc, () => func(desc));

const Hayaku = require('./../');
const getProperty = abbr => {
  const results = Hayaku.expandProp(abbr);
  return results[0] && results[0].property;
};
const toMatchSnapshot = abbr => expect(getProperty(abbr)).toMatchSnapshot();

describe('simple one-letter prop tests:', () => {
  test('a', toMatchSnapshot);
  test('b', toMatchSnapshot);
  test('c', toMatchSnapshot);
  test('d', toMatchSnapshot);
  test('e', toMatchSnapshot);
  test('f', toMatchSnapshot); // `font`?
  test('g', toMatchSnapshot);
  test('h', toMatchSnapshot);
  test('i', toMatchSnapshot); // not used much?
  test('j', toMatchSnapshot);
  test('k', toMatchSnapshot);
  test('l', toMatchSnapshot);
  test('m', toMatchSnapshot);
  test('n', toMatchSnapshot);
  test('o', toMatchSnapshot); // `overflow` or not?
  test('p', toMatchSnapshot);
  test('q', toMatchSnapshot);
  test('r', toMatchSnapshot);
  test('s', toMatchSnapshot); // or `stroke` from svg?
  test('t', toMatchSnapshot);
  test('u', toMatchSnapshot);
  test('v', toMatchSnapshot);
  test('w', toMatchSnapshot);
  test('x', toMatchSnapshot);
  test('y', toMatchSnapshot);
  test('z', toMatchSnapshot);
});

describe('Zen CSS compat test:', () => {
  test('pos', toMatchSnapshot);
  // Expands to `flex` due to recursive sorter,
  // could be fixed if `font` would be > `float`?
  // test('fl', toMatchSnapshot);
  test('cl', toMatchSnapshot);
  test('ov', toMatchSnapshot);
  test('ovx', toMatchSnapshot);
  test('ovy', toMatchSnapshot);
  test('cp', toMatchSnapshot);
  // test('bs', toMatchSnapshot); // gets border-style
  test('fxd', toMatchSnapshot);
  test('mt', toMatchSnapshot);
  test('mr', toMatchSnapshot);
  test('mb', toMatchSnapshot);
  test('ml', toMatchSnapshot);
  test('pt', toMatchSnapshot);
  test('pr', toMatchSnapshot);
  test('pb', toMatchSnapshot);
  test('pl', toMatchSnapshot);
  test('miw', toMatchSnapshot);
  test('mih', toMatchSnapshot);
  test('maw', toMatchSnapshot);
  test('mah', toMatchSnapshot);
  test('ow', toMatchSnapshot);
  test('os', toMatchSnapshot);
  // In those our popular > dashstarts is better as otherwise `bd` wouldn't be `border` etc.
  // Probs would help if existent is shorter?
  // test('oc', toMatchSnapshot); // Gets opacity?
  // test('oo', toMatchSnapshot); // Gets overflow?
  test('bd', toMatchSnapshot);
  test('bdcl', toMatchSnapshot);
  test('bdsp', toMatchSnapshot);
  test('bdw', toMatchSnapshot);
  test('bds', toMatchSnapshot);
  test('bdc', toMatchSnapshot);
  test('bdt', toMatchSnapshot);
  test('bdtw', toMatchSnapshot);
  // Probs all other bd with directions would be ok
  test('bdi', toMatchSnapshot);
  test('bg', toMatchSnapshot);
  test('bgc', toMatchSnapshot);
  test('bgi', toMatchSnapshot);
  test('br', toMatchSnapshot);
  test('bgr', toMatchSnapshot);
  test('bga', toMatchSnapshot);
  test('bgp', toMatchSnapshot);
  test('bgpy', toMatchSnapshot);
  test('bgo', toMatchSnapshot);
  test('bgz', toMatchSnapshot);
  test('bdbr', toMatchSnapshot);
  test('bsh', toMatchSnapshot);
  test('tl', toMatchSnapshot);
  // Some skips after this
  test('ls', toMatchSnapshot);
  test('va', toMatchSnapshot);
  test('ta', toMatchSnapshot);
  test('ti', toMatchSnapshot);
  test('ws', toMatchSnapshot);
  test('ww', toMatchSnapshot);
  test('les', toMatchSnapshot);
  // test('fs', toMatchSnapshot); // Font-style, as there is font-size hmmmm
  test('fz', toMatchSnapshot);
  test('cur', toMatchSnapshot);
});

describe('Some other misc tests:', () => {
  test('bxs', toMatchSnapshot);
  test('po', toMatchSnapshot);
  test('fst', toMatchSnapshot);
  test('zo', toMatchSnapshot);
  test('fl', toMatchSnapshot);
});
