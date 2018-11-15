const createTester = tester => {
  const customTester = (abbr, func, tst) => (tst || it)(abbr, () => func(tester(abbr)));
  customTester.only = (abbr, func) => customTester(abbr, func, it.only);
  customTester.skip = (abbr, func) => customTester(abbr, func, it.skip);
  return customTester;
};

module.exports = createTester;
