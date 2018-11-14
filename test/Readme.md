# Hayaku Tests

Main way I'm testing everything right now is via jest snapshots with a bit of extra setup.

This setup is:

``` js
const test = (desc, func) => it(desc, () => func(desc));
test.only = (desc, func) => it.only(desc, () => func(desc));
test.skip = (desc, func) => it.skip(desc, () => func(desc));
```

then we would need a custom snapshot tester:

``` js
const toMatchSnapshot = abbr => expect(getAbbrSplits(abbr)).toMatchSnapshot();
```

and then we can do stuff like

``` js
test('pos:', toMatchSnapshot);
```

What this allows is the Don't Repeat Yourself snapshots — the only thing that you need to add for a test is a new line with a single changed string for an abbreviation.

The trick is to override jest's `test` function with our custom one which would do the stuff in a way you won't need to repeat the input for the test both in its name and inside the `expect`.

We need a custom function to be named `toMatchSnapshot` and custom test function to be called `test` in order to make sure VS Code would still get what we're trying to do.
