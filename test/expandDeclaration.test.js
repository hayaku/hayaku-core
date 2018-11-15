const Hayaku = require('./../');
const test = require('./createTester.js')(abbr => {
  const results = Hayaku.expandDeclaration(abbr);
  return results[0] && `${results[0].property}: ${results[0].value}`;
});

describe('simple declarations test:', () => {
  test('pos:', result => expect(result).toMatchSnapshot());
  test('pos', result => expect(result).toMatchSnapshot());
  test('poa', result => expect(result).toMatchSnapshot());
  test('por', result => expect(result).toMatchSnapshot());
  test('fl', result => expect(result).toMatchSnapshot());
  test('fr', result => expect(result).toMatchSnapshot());
  test('f', result => expect(result).toMatchSnapshot());
  test('f:l', result => expect(result).toMatchSnapshot());
  test('dn', result => expect(result).toMatchSnapshot());
  test('bgn', result => expect(result).toMatchSnapshot());
  test('curp', result => expect(result).toMatchSnapshot());
  test('wa', result => expect(result).toMatchSnapshot());
  test('bsbb', result => expect(result).toMatchSnapshot());
});

describe('some suddenly complex declarations test:', () => {
  test.skip('fs', result => expect(result).toMatchSnapshot());
  test('fz', result => expect(result).toMatchSnapshot());
  test('fv', result => expect(result).toMatchSnapshot());
  test('fv', result => expect(result).toMatchSnapshot());
  test('ti', result => expect(result).toMatchSnapshot());
  test('lh', result => expect(result).toMatchSnapshot());
  test('orp', result => expect(result).toMatchSnapshot());
  test.skip('rz', result => expect(result).toMatchSnapshot());
  test('cur', result => expect(result).toMatchSnapshot());
  test('op', result => expect(result).toMatchSnapshot());
  test('fst', result => expect(result).toMatchSnapshot());
});

describe('declarations with numeric values:', () => {
  test('w10', result => expect(result).toMatchSnapshot());
  test('w1.5', result => expect(result).toMatchSnapshot());
  test('w25%', result => expect(result).toMatchSnapshot());
  test('w50p', result => expect(result).toMatchSnapshot());
  test('w20px', result => expect(result).toMatchSnapshot());
  test('w20e', result => expect(result).toMatchSnapshot());
});
