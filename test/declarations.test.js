const Hayaku = require('./../');

expect.extend({
  expandTo: (received, argument) => {
    const results = Hayaku.expandDeclaration(received);
    const result = results[0] && `${results[0].property}: ${results[0].value}`;
    const pass = result === argument;
    if (pass) {
      return {
        message: () => `${received} → ${argument}`,
        pass: true
      };
    } else {
      // console.log(results.map(result => `${result.property}:${result.value}, ${result.weights.filter(weight => weight.weight !== 0).map(weight => `${weight.name}:${weight.weight}`)}`));
      return {
        message: () => `${received} → ${result} (expected → ${argument})`,
        pass: false
      };
    }
  }
});

describe('simple declarations test', () => {
  test('pos:', () => expect('pos:').expandTo('position: undefined'));
  test('pos', () => expect('pos').expandTo('position: static'));
  test('poa', () => expect('poa').expandTo('position: absolute'));
  test('por', () => expect('por').expandTo('position: relative'));
  test('fl', () => expect('fl').expandTo('float: left'));
  test('fr', () => expect('fr').expandTo('float: right'));
  test('f', () => expect('float').expandTo('float: undefined'));
  test('f:l', () => expect('f:l').expandTo('float: left'));
  test('dn', () => expect('dn').expandTo('display: none'));
  test('bgn', () => expect('bgn').expandTo('background: none'));
  test('curp', () => expect('curp').expandTo('cursor: pointer'));
  test('wa', () => expect('wa').expandTo('width: auto'));
  test('bsbb', () => expect('bsbb').expandTo('box-sizing: border-box'));
});

describe('some suddenly complex declarations test', () => {
  test('fs', () => expect('fs').expandTo('font-size: undefined'));
  test('fz', () => expect('fz').expandTo('font-size: undefined'));
  test('fv', () => expect('fv').expandTo('font-variant: undefined'));
  test('fv', () => expect('fv').expandTo('font-variant: undefined'));
  test('ti', () => expect('ti').expandTo('text-indent: undefined'));
  test('lh', () => expect('lh').expandTo('line-height: undefined'));
  test('orp', () => expect('orp').expandTo('orphans: undefined'));
  test('rz', () => expect('rz').expandTo('resize: undefined'));
  test('cur', () => expect('cur').expandTo('cursor: undefined'));
  test('op', () => expect('op').expandTo('opacity: undefined'));
  test('fst', () => expect('fst').expandTo('font-style: undefined'));
});
