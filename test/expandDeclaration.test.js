// Proxy for jest test to write abbr only once, ok
const test = (desc, func) => it(desc, () => func(desc));
test.only = (desc, func) => it.only(desc, () => func(desc));
test.skip = (desc, func) => it.skip(desc, () => func(desc));

const Hayaku = require('./../');
const getDeclaration = abbr => {
  const results = Hayaku.expandDeclaration(abbr);
  return results[0] && `${results[0].property}: ${results[0].value}`;
}

describe('simple declarations test:', () => {
  test('pos:', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('pos', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('poa', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('por', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('fl', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('fr', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('f', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('f:l', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('dn', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('bgn', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('curp', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('wa', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('bsbb', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
});

describe('some suddenly complex declarations test:', () => {
  test('fs', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('fz', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('fv', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('fv', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('ti', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('lh', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('orp', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('rz', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('cur', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('op', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('fst', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
});

describe('declarations with numeric values:', () => {
  test('w10', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('w1.5', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('w25%', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('w50p', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('w20px', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
  test('w20e', abbr => expect(getDeclaration(abbr)).toMatchSnapshot());
});
