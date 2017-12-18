const Hayaku = require('./../');

const checkProp = function(abbr, expected) {
  test(`${abbr} → ${expected}`, () => {
    const props = Hayaku.expandProps(abbr);
    expect(props[0] && props[0].name).toBe(expected);
  });
}

describe('simple one-letter prop tests', () => {
  checkProp('a', 'animation');
  checkProp('b', 'bottom');
  checkProp('c', 'color');
  checkProp('d', 'display');
  checkProp('e', 'empty-cells');
  checkProp('f', 'float'); // `font`?
  checkProp('g', 'grid');
  checkProp('h', 'height');
  checkProp('i', 'isolation'); // not used much?
  checkProp('j', 'justify-content');
  checkProp('k', undefined);
  checkProp('l', 'left');
  checkProp('m', 'margin');
  checkProp('n', undefined);
  checkProp('o', 'opacity'); // `overflow` or not?
  checkProp('p', 'padding');
  checkProp('q', 'quotes');
  checkProp('r', 'right');
  checkProp('s', 'scroll-behavior'); // or `stroke` from svg?
  checkProp('t', 'top');
  checkProp('u', 'user-select');
  checkProp('v', 'visibility');
  checkProp('w', 'width');
  checkProp('x', undefined);
  checkProp('y', undefined);
  checkProp('z', 'z-index'); // `zoom` is not needed anymore?
});

describe('Zen CSS compat test', () => {
  checkProp('pos', 'position');
  checkProp('fl', 'float');
  checkProp('cl', 'clear');
  checkProp('ov', 'overflow');
  checkProp('ovx', 'overflow-x');
  checkProp('ovy', 'overflow-y');
  checkProp('cp', 'clip');
  // checkProp('bs', 'box-sizing'); // gets `border-style`
  checkProp('fxd', 'flex-direction');
  checkProp('mt', 'margin-top');
  checkProp('mr', 'margin-right');
  checkProp('mb', 'margin-bottom');
  checkProp('ml', 'margin-left');
  checkProp('pt', 'padding-top');
  checkProp('pr', 'padding-right');
  checkProp('pb', 'padding-bottom');
  checkProp('pl', 'padding-left');
  checkProp('miw', 'min-width');
  checkProp('mih', 'min-height');
  checkProp('maw', 'max-width');
  checkProp('mah', 'max-height');
  checkProp('ow', 'outline-width');
  checkProp('os', 'outline-style');
  // In those our popular > dashstarts is better as otherwise `bd` wouldn't be `border` etc.
  // checkProp('oc', 'outline-color'); // Gets opacity?
  // checkProp('oo', 'outline-offset'); // Gets overflow?
  checkProp('bd', 'border');
  // checkProp('bdcl', 'border-collapse'); // Potential prev-checker?
  checkProp('bdsp', 'border-spacing');
  checkProp('bdw', 'border-width');
  checkProp('bds', 'border-style');
  checkProp('bdc', 'border-color');
  checkProp('bdt', 'border-top');
  checkProp('bdtw', 'border-top-width');
  // Probs all other bd with directions would be ok
  checkProp('bdi', 'border-image');
  checkProp('bg', 'background');
  checkProp('bgc', 'background-color');
  checkProp('bgi', 'background-image');
  checkProp('br', 'border-right');
  // checkProp('bgr', 'background-repeat'); // Potential prev-checker?
  checkProp('bga', 'background-attachment');
  checkProp('bgp', 'background-position');
  checkProp('bgpy', 'background-position-y');
  // checkProp('bgo', 'background-origin'); // Potential prev-checker?
  checkProp('bgz', 'background-size');
  checkProp('bdbr', 'box-decoration-break');
  checkProp('bsh', 'box-shadow');
  checkProp('tl', 'table-layout');
  // Some skips after this
  checkProp('ls', 'list-style');
  checkProp('va', 'vertical-align');
  checkProp('ta', 'text-align');
  checkProp('ti', 'text-indent');
  checkProp('ws', 'white-space');
  checkProp('ww', 'word-wrap');
  checkProp('les', 'letter-spacing');
  // checkProp('fs', 'font-style'); // Font-style, as there is font-size hmmmm
  checkProp('fz', 'font-size');
  checkProp('cur', 'cursor');
});

describe('Some other misc tests', () => {
  checkProp('bxs', 'box-sizing');
  checkProp('po', 'position');
  checkProp('fst', 'font-style');
});
