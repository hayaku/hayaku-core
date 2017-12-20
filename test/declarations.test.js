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
      return {
        message: () => `${received} → ${result} (expected → ${argument})`,
        pass: false
      };
    }
  }
})

describe('simple declarations test', () => {
  test('pos:', () => expect('pos:').expandTo('position: undefined'));
  test('pos', () => expect('pos').expandTo('position: static'));
  test('poa', () => expect('poa').expandTo('position: absolute'));
  test('por', () => expect('por').expandTo('position: relative'));
  test('fl', () => expect('fl').expandTo('float: left'));
  test('f', () => expect('float').expandTo('float: undefined'));
  test('f:l', () => expect('f:l').expandTo('float: left'));
  test('dn', () => expect('dn').expandTo('display: none'));
  test('bgn', () => expect('bgn').expandTo('background: none'));
  test('curp', () => expect('curp').expandTo('cursor: pointer'));
});

