// Proxy for jest test to write abbr only once, ok
const test = (desc, func) => it(desc, () => func(desc));
test.only = (desc, func) => it.only(desc, () => func(desc));
test.skip = (desc, func) => it.skip(desc, () => func(desc));

const Hayaku = require('./../');
const getProperty = abbr => {
  const results = Hayaku.expandProp(abbr);
  return results[0] && results[0].property;
}

describe('simple one-letter prop tests:', () => {
  test('a', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('b', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('c', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('d', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('e', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('f', abbr => expect(getProperty(abbr)).toMatchSnapshot()); // `font`?
  test('g', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('h', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('i', abbr => expect(getProperty(abbr)).toMatchSnapshot()); // not used much?
  test('j', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('k', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('l', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('m', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('n', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('o', abbr => expect(getProperty(abbr)).toMatchSnapshot()); // `overflow` or not?
  test('p', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('q', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('r', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('s', abbr => expect(getProperty(abbr)).toMatchSnapshot()); // or `stroke` from svg?
  test('t', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('u', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('v', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('w', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('x', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('y', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('z', abbr => expect(getProperty(abbr)).toMatchSnapshot());
});

describe('Zen CSS compat test:', () => {
  test('pos', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  // Expands to `flex` due to recursive sorter,
  // could be fixed if `font` would be > `float`?
  // test('fl', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('cl', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('ov', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('ovx', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('ovy', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('cp', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  // test('bs', abbr => expect(getProperty(abbr)).toMatchSnapshot()); // gets border-style
  test('fxd', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('mt', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('mr', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('mb', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('ml', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('pt', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('pr', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('pb', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('pl', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('miw', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('mih', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('maw', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('mah', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('ow', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('os', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  // In those our popular > dashstarts is better as otherwise `bd` wouldn't be `border` etc.
  // Probs would help if existent is shorter?
  // test('oc', abbr => expect(getProperty(abbr)).toMatchSnapshot()); // Gets opacity?
  // test('oo', abbr => expect(getProperty(abbr)).toMatchSnapshot()); // Gets overflow?
  test('bd', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bdcl', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bdsp', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bdw', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bds', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bdc', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bdt', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bdtw', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  // Probs all other bd with directions would be ok
  test('bdi', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bg', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bgc', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bgi', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('br', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bgr', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bga', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bgp', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bgpy', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bgo', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bgz', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bdbr', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('bsh', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('tl', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  // Some skips after this
  test('ls', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('va', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('ta', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('ti', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('ws', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('ww', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('les', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  // test('fs', abbr => expect(getProperty(abbr)).toMatchSnapshot()); // Font-style, as there is font-size hmmmm
  test('fz', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('cur', abbr => expect(getProperty(abbr)).toMatchSnapshot());
});

describe('Some other misc tests:', () => {
  test('bxs', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('po', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('fst', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('zo', abbr => expect(getProperty(abbr)).toMatchSnapshot());
  test('fl', abbr => expect(getProperty(abbr)).toMatchSnapshot());
});
