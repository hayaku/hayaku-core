const getAbbrSplits = require('./../lib/getAbbrSplits.js');
const test = require('./createTester.js')(abbr => getAbbrSplits(abbr));

test('p', result => expect(result).toMatchSnapshot());
test('w20', result => expect(result).toMatchSnapshot());
test('poa:', result => expect(result).toMatchSnapshot());
test('p5:5', result => expect(result).toMatchSnapshot());
test('p:5:5:5', result => expect(result).toMatchSnapshot());
test('f:l', result => expect(result).toMatchSnapshot());
