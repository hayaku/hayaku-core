// Proxy for jest test to write abbr only once, ok
const test = (desc, func) => it(desc, () => func(desc));
test.only = (desc, func) => it.only(desc, () => func(desc));
test.skip = (desc, func) => it.skip(desc, () => func(desc));

const getAbbrSplits = require('./../lib/getAbbrSplits.js');

test('p', abbr => expect(getAbbrSplits(abbr)).toMatchSnapshot());
test('w20', abbr => expect(getAbbrSplits(abbr)).toMatchSnapshot());
test('poa:', abbr => expect(getAbbrSplits(abbr)).toMatchSnapshot());
test('p5:5', abbr => expect(getAbbrSplits(abbr)).toMatchSnapshot());
test('p:5:5:5', abbr => expect(getAbbrSplits(abbr)).toMatchSnapshot());
test('f:l', abbr => expect(getAbbrSplits(abbr)).toMatchSnapshot());
