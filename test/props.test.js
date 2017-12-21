const Hayaku = require('./../');

expect.extend({
  expandTo: (received, argument) => {
    const results = Hayaku.expandProp(received);
    const result = results[0] && results[0].property;
    const pass = result === argument;
    if (pass) {
      return {
        message: () => `${received} → ${argument}`,
        pass: true
      };
    } else {
      return {
        message: () => `${received} → ${result} (expected → ${argument})`,
        pass: false
      };
    }
  }
});

describe('simple one-letter prop tests', () => {
  test('a', () => expect('a').expandTo('animation'));
  test('b', () => expect('b').expandTo('bottom'));
  test('c', () => expect('c').expandTo('color'));
  test('d', () => expect('d').expandTo('display'));
  test('e', () => expect('e').expandTo('empty-cells'));
  test('f', () => expect('f').expandTo('float')); // `font`?
  test('g', () => expect('g').expandTo('grid'));
  test('h', () => expect('h').expandTo('height'));
  test('i', () => expect('i').expandTo('isolation')); // not used much?
  test('j', () => expect('j').expandTo('justify-content'));
  test('k', () => expect('k').expandTo('kerning'));
  test('l', () => expect('l').expandTo('left'));
  test('m', () => expect('m').expandTo('margin'));
  test('n', () => expect('n').expandTo(undefined));
  test('o', () => expect('o').expandTo('opacity')); // `overflow` or not?
  test('p', () => expect('p').expandTo('padding'));
  test('q', () => expect('q').expandTo('quotes'));
  test('r', () => expect('r').expandTo('right'));
  test('s', () => expect('s').expandTo('speak')); // or `stroke` from svg?
  test('t', () => expect('t').expandTo('top'));
  test('u', () => expect('u').expandTo('user-select'));
  test('v', () => expect('v').expandTo('visibility'));
  test('w', () => expect('w').expandTo('width'));
  test('x', () => expect('x').expandTo(undefined));
  test('y', () => expect('y').expandTo(undefined));
  test('z', () => expect('z').expandTo('z-index'));
});

describe('Zen CSS compat test', () => {
  test('pos', () => expect('pos').expandTo('position'));
  // Expands to `flex` due to recursive sorter,
  // could be fixed if `font` would be > `float`?
  // test('fl', () => expect('fl').expandTo('float'));
  test('cl', () => expect('cl').expandTo('clear'));
  test('ov', () => expect('ov').expandTo('overflow'));
  test('ovx', () => expect('ovx').expandTo('overflow-x'));
  test('ovy', () => expect('ovy').expandTo('overflow-y'));
  test('cp', () => expect('cp').expandTo('clip'));
  // test('bs', () => expect('bs').expandTo('box-sizing')); // gets border-style
  test('fxd', () => expect('fxd').expandTo('flex-direction'));
  test('mt', () => expect('mt').expandTo('margin-top'));
  test('mr', () => expect('mr').expandTo('margin-right'));
  test('mb', () => expect('mb').expandTo('margin-bottom'));
  test('ml', () => expect('ml').expandTo('margin-left'));
  test('pt', () => expect('pt').expandTo('padding-top'));
  test('pr', () => expect('pr').expandTo('padding-right'));
  test('pb', () => expect('pb').expandTo('padding-bottom'));
  test('pl', () => expect('pl').expandTo('padding-left'));
  test('miw', () => expect('miw').expandTo('min-width'));
  test('mih', () => expect('mih').expandTo('min-height'));
  test('maw', () => expect('maw').expandTo('max-width'));
  test('mah', () => expect('mah').expandTo('max-height'));
  test('ow', () => expect('ow').expandTo('outline-width'));
  test('os', () => expect('os').expandTo('outline-style'));
  // In those our popular > dashstarts is better as otherwise `bd` wouldn't be `border` etc.
  // Probs would help if existent is shorter?
  // test('oc', () => expect('oc').expandTo('outline-color')); // Gets opacity?
  // test('oo', () => expect('oo').expandTo('outline-offset')); // Gets overflow?
  test('bd', () => expect('bd').expandTo('border'));
  test('bdcl', () => expect('bdcl').expandTo('border-collapse'));
  test('bdsp', () => expect('bdsp').expandTo('border-spacing'));
  test('bdw', () => expect('bdw').expandTo('border-width'));
  test('bds', () => expect('bds').expandTo('border-style'));
  test('bdc', () => expect('bdc').expandTo('border-color'));
  test('bdt', () => expect('bdt').expandTo('border-top'));
  test('bdtw', () => expect('bdtw').expandTo('border-top-width'));
  // Probs all other bd with directions would be ok
  test('bdi', () => expect('bdi').expandTo('border-image'));
  test('bg', () => expect('bg').expandTo('background'));
  test('bgc', () => expect('bgc').expandTo('background-color'));
  test('bgi', () => expect('bgi').expandTo('background-image'));
  test('br', () => expect('br').expandTo('border-right'));
  test('bgr', () => expect('bgr').expandTo('background-repeat'));
  test('bga', () => expect('bga').expandTo('background-attachment'));
  test('bgp', () => expect('bgp').expandTo('background-position'));
  test('bgpy', () => expect('bgpy').expandTo('background-position-y'));
  test('bgo', () => expect('bgo').expandTo('background-origin'));
  test('bgz', () => expect('bgz').expandTo('background-size'));
  test('bdbr', () => expect('bdbr').expandTo('box-decoration-break'));
  test('bsh', () => expect('bsh').expandTo('box-shadow'));
  test('tl', () => expect('tl').expandTo('table-layout'));
  // Some skips after this
  test('ls', () => expect('ls').expandTo('list-style'));
  test('va', () => expect('va').expandTo('vertical-align'));
  test('ta', () => expect('ta').expandTo('text-align'));
  test('ti', () => expect('ti').expandTo('text-indent'));
  test('ws', () => expect('ws').expandTo('white-space'));
  test('ww', () => expect('ww').expandTo('word-wrap'));
  test('les', () => expect('les').expandTo('letter-spacing'));
  // test('fs', () => expect('fs').expandTo('font-style')); // Font-style, as there is font-size hmmmm
  test('fz', () => expect('fz').expandTo('font-size'));
  test('cur', () => expect('cur').expandTo('cursor'));
});

describe('Some other misc tests', () => {
  test('bxs', () => expect('bxs').expandTo('box-sizing'));
  test('po', () => expect('po').expandTo('position'));
  test('fst', () => expect('fst').expandTo('font-style'));
  test('zo', () => expect('zo').expandTo('zoom'));
  test('fl', () => expect('fl').expandTo('flex'));
});
