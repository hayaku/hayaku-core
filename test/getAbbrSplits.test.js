const getAbbrSplits = require('./../lib/getAbbrSplits.js');

test('should properly split `p` abbr', () => {
  expect(getAbbrSplits('p')).toMatchSnapshot();
});

test('should properly split `w20` abbr', () => {
  expect(getAbbrSplits('w20')).toMatchSnapshot();
});

test('should properly split `poa:` abbr', () => {
  expect(getAbbrSplits('poa:')).toMatchSnapshot();
});

test('should properly split `poa:` abbr', () => {
  expect(getAbbrSplits('poa:')).toMatchSnapshot();
});

test('should properly split `p5:5` abbr', () => {
  expect(getAbbrSplits('p5:5')).toMatchSnapshot();
});

test('should properly split `p:5:5:5` abbr', () => {
  expect(getAbbrSplits('p:5:5:5')).toMatchSnapshot();
});

test('should properly split `f:l` abbr', () => {
  expect(getAbbrSplits('f:l')).toMatchSnapshot();
});
