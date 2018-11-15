# Hayaku Tests

Main way I'm testing everything right now is via jest snapshots with a bit of extra setup using a custom tester.

Here is an example of how things are done:

``` js
const getAbbrSplits = require('./../lib/getAbbrSplits.js');
const test = require('./createTester.js')(abbr => getAbbrSplits(abbr));

test('p', result => expect(result).toMatchSnapshot());
```

Note that you can use both `toMatchSnapshot()` and `toMatchInlineSnapshot()` there.

At first we import everything that would be needed for our test, then we require a custom `createTester` function and pass our test inside of it, then we can use this tester instead of the jest's built-in `test`.

All of this is done in order to

1. Not repeat yourself, by having to change just the passed abbreviation that would be both the snapshot name & the value that would be used to generate a snapshot.

2. Guarantee that VS Code jest plugin would still work in the same way as before.

The VS Code plugin compatibility needs us to have:

1. `test()` function itself to show the success/fail circle icon.
2. `toMatchSnapshot` word to show the “view snapshot” links etc.
3. `expect().toMatchSnapshot()` with a context, as this would define the line in case of an error.

Basically, right now it is very easy to add new tests, both alongside existing ones (only the abbr is changed), and for new methods and functions (very easy with `createTester` and the uniform test call lines, same for every test).
