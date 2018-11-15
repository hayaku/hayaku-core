const Hayaku = require("./../");
const test = require("./createTester.js")(abbr => {
  const results = Hayaku.expandProp(abbr);
  return results[0] && results[0].property;
});

describe("simple one-letter prop tests:", () => {
  test("a", result => expect(result).toMatchInlineSnapshot(`"animation"`));
  test("b", result => expect(result).toMatchInlineSnapshot(`"bottom"`));
  test("c", result => expect(result).toMatchInlineSnapshot(`"color"`));
  test("d", result => expect(result).toMatchInlineSnapshot(`"display"`));
  test("e", result => expect(result).toMatchInlineSnapshot(`"empty-cells"`));
  test("f", result => expect(result).toMatchInlineSnapshot(`"float"`)); // `font`?
  test("g", result => expect(result).toMatchInlineSnapshot(`"grid"`));
  test("h", result => expect(result).toMatchInlineSnapshot(`"height"`));
  test("i", result => expect(result).toMatchInlineSnapshot(`"isolation"`)); // not used much?
  test("j", result => expect(result).toMatchInlineSnapshot(`"justify-content"`));
  test("k", result => expect(result).toMatchInlineSnapshot(`"kerning"`));
  test("l", result => expect(result).toMatchInlineSnapshot(`"left"`));
  test("m", result => expect(result).toMatchInlineSnapshot(`"margin"`));
  test("n", result => expect(result).toMatchInlineSnapshot(`undefined`));
  test("o", result => expect(result).toMatchInlineSnapshot(`"opacity"`)); // `overflow` or not?
  test("p", result => expect(result).toMatchInlineSnapshot(`"padding"`));
  test("q", result => expect(result).toMatchInlineSnapshot(`"quotes"`));
  test("r", result => expect(result).toMatchInlineSnapshot(`"right"`));
  test("s", result => expect(result).toMatchInlineSnapshot(`"speak"`)); // or `stroke` from svg?
  test("t", result => expect(result).toMatchInlineSnapshot(`"top"`));
  test("u", result => expect(result).toMatchInlineSnapshot(`"user-select"`));
  test("v", result => expect(result).toMatchInlineSnapshot(`"visibility"`));
  test("w", result => expect(result).toMatchInlineSnapshot(`"width"`));
  test("x", result => expect(result).toMatchInlineSnapshot(`undefined`));
  test("y", result => expect(result).toMatchInlineSnapshot(`undefined`));
  test("z", result => expect(result).toMatchInlineSnapshot(`"z-index"`));
});

describe("Zen CSS compat test:", () => {
  test("pos", result => expect(result).toMatchInlineSnapshot(`"position"`));

  // Expands to `flex` due to recursive sorter,
  // could be fixed if `font` would be > `float`?
  test.skip("fl", result => expect(result).toMatchInlineSnapshot());

  test("cl", result => expect(result).toMatchInlineSnapshot(`"clear"`));
  test("ov", result => expect(result).toMatchInlineSnapshot(`"overflow"`));
  test("ovx", result => expect(result).toMatchInlineSnapshot(`"overflow-x"`));
  test("ovy", result => expect(result).toMatchInlineSnapshot(`"overflow-y"`));
  test("cp", result => expect(result).toMatchInlineSnapshot(`"clip"`));
  test.skip("bs", result => expect(result).toMatchInlineSnapshot()); // gets border-style
  test("fxd", result => expect(result).toMatchInlineSnapshot(`"flex-direction"`));
  test("mt", result => expect(result).toMatchInlineSnapshot(`"margin-top"`));
  test("mr", result => expect(result).toMatchInlineSnapshot(`"margin-right"`));
  test("mb", result => expect(result).toMatchInlineSnapshot(`"margin-bottom"`));
  test("ml", result => expect(result).toMatchInlineSnapshot(`"margin-left"`));
  test("pt", result => expect(result).toMatchInlineSnapshot(`"padding-top"`));
  test("pr", result => expect(result).toMatchInlineSnapshot(`"padding-right"`));
  test("pb", result => expect(result).toMatchInlineSnapshot(`"padding-bottom"`));
  test("pl", result => expect(result).toMatchInlineSnapshot(`"padding-left"`));
  test("miw", result => expect(result).toMatchInlineSnapshot(`"min-width"`));
  test("mih", result => expect(result).toMatchInlineSnapshot(`"min-height"`));
  test("maw", result => expect(result).toMatchInlineSnapshot(`"max-width"`));
  test("mah", result => expect(result).toMatchInlineSnapshot(`"max-height"`));
  test("ow", result => expect(result).toMatchInlineSnapshot(`"outline-width"`));
  test("os", result => expect(result).toMatchInlineSnapshot(`"outline-style"`));
  // In those our popular > dashstarts is better as otherwise `bd` wouldn't be `border` etc.
  // Probs would help if existent is shorter?
  test.skip("oc", result => expect(result).toMatchInlineSnapshot()); // Gets opacity?
  test.skip("oo", result => expect(result).toMatchInlineSnapshot()); // Gets overflow?
  test("bd", result => expect(result).toMatchInlineSnapshot(`"border"`));
  test("bdcl", result => expect(result).toMatchInlineSnapshot(`"border-collapse"`));
  test("bdsp", result => expect(result).toMatchInlineSnapshot(`"border-spacing"`));
  test("bdw", result => expect(result).toMatchInlineSnapshot(`"border-width"`));
  test("bds", result => expect(result).toMatchInlineSnapshot(`"border-style"`));
  test("bdc", result => expect(result).toMatchInlineSnapshot(`"border-color"`));
  test("bdt", result => expect(result).toMatchInlineSnapshot(`"border-top"`));
  test("bdtw", result => expect(result).toMatchInlineSnapshot(`"border-top-width"`));
  // Probs all other bd with directions would be ok
  test("bdi", result => expect(result).toMatchInlineSnapshot(`"border-image"`));
  test("bg", result => expect(result).toMatchInlineSnapshot(`"background"`));
  test("bgc", result => expect(result).toMatchInlineSnapshot(`"background-color"`));
  test("bgi", result => expect(result).toMatchInlineSnapshot(`"background-image"`));
  test("br", result => expect(result).toMatchInlineSnapshot(`"border-right"`));
  test("bgr", result => expect(result).toMatchInlineSnapshot(`"background-repeat"`));
  test("bga", result => expect(result).toMatchInlineSnapshot(`"background-attachment"`));
  test("bgp", result => expect(result).toMatchInlineSnapshot(`"background-position"`));
  test("bgpy", result => expect(result).toMatchInlineSnapshot(`"background-position-y"`));
  test("bgo", result => expect(result).toMatchInlineSnapshot(`"background-origin"`));
  test("bgz", result => expect(result).toMatchInlineSnapshot(`"background-size"`));
  test("bdbr", result => expect(result).toMatchInlineSnapshot(`"box-decoration-break"`));
  test("bsh", result => expect(result).toMatchInlineSnapshot(`"box-shadow"`));
  test("tl", result => expect(result).toMatchInlineSnapshot(`"table-layout"`));
  // Some skips after this
  test("ls", result => expect(result).toMatchInlineSnapshot(`"list-style"`));
  test("va", result => expect(result).toMatchInlineSnapshot(`"vertical-align"`));
  test("ta", result => expect(result).toMatchInlineSnapshot(`"text-align"`));
  test("ti", result => expect(result).toMatchInlineSnapshot(`"text-indent"`));
  test("ws", result => expect(result).toMatchInlineSnapshot(`"white-space"`));
  test("ww", result => expect(result).toMatchInlineSnapshot(`"word-wrap"`));
  test("les", result => expect(result).toMatchInlineSnapshot(`"letter-spacing"`));
  test.skip("fs", result => expect(result).toMatchInlineSnapshot()); // Font-style, as there is font-size hmmmm
  test("fz", result => expect(result).toMatchInlineSnapshot(`"font-size"`));
  test("cur", result => expect(result).toMatchInlineSnapshot(`"cursor"`));
});

describe("Some other misc tests:", () => {
  test("bxs", result => expect(result).toMatchInlineSnapshot(`"box-sizing"`));
  test("po", result => expect(result).toMatchInlineSnapshot(`"position"`));
  test("fst", result => expect(result).toMatchInlineSnapshot(`"font-style"`));
  test("zo", result => expect(result).toMatchInlineSnapshot(`"zoom"`));
});
