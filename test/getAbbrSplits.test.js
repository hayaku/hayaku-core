// Proxy for jest test to write abbr only once, ok
const test = (desc, func) => it(desc, () => func(desc));
test.only = (desc, func) => it.only(desc, () => func(desc));
test.skip = (desc, func) => it.skip(desc, () => func(desc));

const getAbbrSplits = require('./../lib/getAbbrSplits.js');
const toMatchSnapshot = abbr => expect(getAbbrSplits(abbr)).toMatchSnapshot();

test('p', toMatchSnapshot);
test('w20', toMatchSnapshot);
test('poa:', toMatchSnapshot);
test('p5:5', toMatchSnapshot);
test('p:5:5:5', toMatchSnapshot);
test('f:l', toMatchSnapshot);
