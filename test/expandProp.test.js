const Hayaku = require('./../');
const test = require('./createTester.js')(abbr => {
  const results = Hayaku.expandProp(abbr);
  return results[0] && results[0].property;
});


describe('simple one-letter prop tests:', () => {
  test('a', result => expect(result).toMatchSnapshot());
  test('b', result => expect(result).toMatchSnapshot());
  test('c', result => expect(result).toMatchSnapshot());
  test('d', result => expect(result).toMatchSnapshot());
  test('e', result => expect(result).toMatchSnapshot());
  test('f', result => expect(result).toMatchSnapshot()); // `font`?
  test('g', result => expect(result).toMatchSnapshot());
  test('h', result => expect(result).toMatchSnapshot());
  test('i', result => expect(result).toMatchSnapshot()); // not used much?
  test('j', result => expect(result).toMatchSnapshot());
  test('k', result => expect(result).toMatchSnapshot());
  test('l', result => expect(result).toMatchSnapshot());
  test('m', result => expect(result).toMatchSnapshot());
  test('n', result => expect(result).toMatchSnapshot());
  test('o', result => expect(result).toMatchSnapshot()); // `overflow` or not?
  test('p', result => expect(result).toMatchSnapshot());
  test('q', result => expect(result).toMatchSnapshot());
  test('r', result => expect(result).toMatchSnapshot());
  test('s', result => expect(result).toMatchSnapshot()); // or `stroke` from svg?
  test('t', result => expect(result).toMatchSnapshot());
  test('u', result => expect(result).toMatchSnapshot());
  test('v', result => expect(result).toMatchSnapshot());
  test('w', result => expect(result).toMatchSnapshot());
  test('x', result => expect(result).toMatchSnapshot());
  test('y', result => expect(result).toMatchSnapshot());
  test('z', result => expect(result).toMatchSnapshot());
});

describe('Zen CSS compat test:', () => {
  test('pos', result => expect(result).toMatchSnapshot());
  // Expands to `flex` due to recursive sorter,
  // could be fixed if `font` would be > `float`?
  // test('fl', result => expect(result).toMatchSnapshot());
  test('cl', result => expect(result).toMatchSnapshot());
  test('ov', result => expect(result).toMatchSnapshot());
  test('ovx', result => expect(result).toMatchSnapshot());
  test('ovy', result => expect(result).toMatchSnapshot());
  test('cp', result => expect(result).toMatchSnapshot());
  // test('bs', result => expect(result).toMatchSnapshot()); // gets border-style
  test('fxd', result => expect(result).toMatchSnapshot());
  test('mt', result => expect(result).toMatchSnapshot());
  test('mr', result => expect(result).toMatchSnapshot());
  test('mb', result => expect(result).toMatchSnapshot());
  test('ml', result => expect(result).toMatchSnapshot());
  test('pt', result => expect(result).toMatchSnapshot());
  test('pr', result => expect(result).toMatchSnapshot());
  test('pb', result => expect(result).toMatchSnapshot());
  test('pl', result => expect(result).toMatchSnapshot());
  test('miw', result => expect(result).toMatchSnapshot());
  test('mih', result => expect(result).toMatchSnapshot());
  test('maw', result => expect(result).toMatchSnapshot());
  test('mah', result => expect(result).toMatchSnapshot());
  test('ow', result => expect(result).toMatchSnapshot());
  test('os', result => expect(result).toMatchSnapshot());
  // In those our popular > dashstarts is better as otherwise `bd` wouldn't be `border` etc.
  // Probs would help if existent is shorter?
  // test('oc', result => expect(result).toMatchSnapshot()); // Gets opacity?
  // test('oo', result => expect(result).toMatchSnapshot()); // Gets overflow?
  test('bd', result => expect(result).toMatchSnapshot());
  test('bdcl', result => expect(result).toMatchSnapshot());
  test('bdsp', result => expect(result).toMatchSnapshot());
  test('bdw', result => expect(result).toMatchSnapshot());
  test('bds', result => expect(result).toMatchSnapshot());
  test('bdc', result => expect(result).toMatchSnapshot());
  test('bdt', result => expect(result).toMatchSnapshot());
  test('bdtw', result => expect(result).toMatchSnapshot());
  // Probs all other bd with directions would be ok
  test('bdi', result => expect(result).toMatchSnapshot());
  test('bg', result => expect(result).toMatchSnapshot());
  test('bgc', result => expect(result).toMatchSnapshot());
  test('bgi', result => expect(result).toMatchSnapshot());
  test('br', result => expect(result).toMatchSnapshot());
  test('bgr', result => expect(result).toMatchSnapshot());
  test('bga', result => expect(result).toMatchSnapshot());
  test('bgp', result => expect(result).toMatchSnapshot());
  test('bgpy', result => expect(result).toMatchSnapshot());
  test('bgo', result => expect(result).toMatchSnapshot());
  test('bgz', result => expect(result).toMatchSnapshot());
  test('bdbr', result => expect(result).toMatchSnapshot());
  test('bsh', result => expect(result).toMatchSnapshot());
  test('tl', result => expect(result).toMatchSnapshot());
  // Some skips after this
  test('ls', result => expect(result).toMatchSnapshot());
  test('va', result => expect(result).toMatchSnapshot());
  test('ta', result => expect(result).toMatchSnapshot());
  test('ti', result => expect(result).toMatchSnapshot());
  test('ws', result => expect(result).toMatchSnapshot());
  test('ww', result => expect(result).toMatchSnapshot());
  test('les', result => expect(result).toMatchSnapshot());
  // test('fs', result => expect(result).toMatchSnapshot()); // Font-style, as there is font-size hmmmm
  test('fz', result => expect(result).toMatchSnapshot());
  test('cur', result => expect(result).toMatchSnapshot());
});

describe('Some other misc tests:', () => {
  test('bxs', result => expect(result).toMatchSnapshot());
  test('po', result => expect(result).toMatchSnapshot());
  test('fst', result => expect(result).toMatchSnapshot());
  test('zo', result => expect(result).toMatchSnapshot());
  test('fl', result => expect(result).toMatchSnapshot());
});
