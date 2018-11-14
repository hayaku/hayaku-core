// Proxy for jest test to write abbr only once, ok
const test = (desc, func) => it(desc, () => func(desc));
test.only = (desc, func) => it.only(desc, () => func(desc));
test.skip = (desc, func) => it.skip(desc, () => func(desc));

const Hayaku = require('./../');
const getDeclaration = abbr => {
  const results = Hayaku.expandDeclaration(abbr);
  return results[0] && `${results[0].property}: ${results[0].value}`;
};
const toMatchSnapshot = abbr => expect(getDeclaration(abbr)).toMatchSnapshot();

describe('simple declarations test:', () => {
  test('pos:', toMatchSnapshot);
  test('pos', toMatchSnapshot);
  test('poa', toMatchSnapshot);
  test('por', toMatchSnapshot);
  test('fl', toMatchSnapshot);
  test('fr', toMatchSnapshot);
  test('f', toMatchSnapshot);
  test('f:l', toMatchSnapshot);
  test('dn', toMatchSnapshot);
  test('bgn', toMatchSnapshot);
  test('curp', toMatchSnapshot);
  test('wa', toMatchSnapshot);
  test('bsbb', toMatchSnapshot);
});

describe('some suddenly complex declarations test:', () => {
  test('fs', toMatchSnapshot);
  test('fz', toMatchSnapshot);
  test('fv', toMatchSnapshot);
  test('fv', toMatchSnapshot);
  test('ti', toMatchSnapshot);
  test('lh', toMatchSnapshot);
  test('orp', toMatchSnapshot);
  test('rz', toMatchSnapshot);
  test('cur', toMatchSnapshot);
  test('op', toMatchSnapshot);
  test('fst', toMatchSnapshot);
});

describe('declarations with numeric values:', () => {
  test('w10', toMatchSnapshot);
  test('w1.5', toMatchSnapshot);
  test('w25%', toMatchSnapshot);
  test('w50p', toMatchSnapshot);
  test('w20px', toMatchSnapshot);
  test('w20e', toMatchSnapshot);
});
