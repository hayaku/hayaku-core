const Hayaku = require("./../");
const test = require("./createTester.js")(abbr => {
  const results = Hayaku.expandDeclaration(abbr);
  return results[0] && `${results[0].property}: ${results[0].value}`;
});

describe("simple declarations test:", () => {
  test("pos:", result => expect(result).toMatchInlineSnapshot(`"position: undefined"`));
  test("pos", result => expect(result).toMatchInlineSnapshot(`"position: static"`));
  test("poa", result => expect(result).toMatchInlineSnapshot(`"position: absolute"`));
  test("por", result => expect(result).toMatchInlineSnapshot(`"position: relative"`));
  test("fl", result => expect(result).toMatchInlineSnapshot(`"float: left"`));
  test("fr", result => expect(result).toMatchInlineSnapshot(`"float: right"`));
  test("f", result => expect(result).toMatchInlineSnapshot(`"float: undefined"`));
  test("f:l", result => expect(result).toMatchInlineSnapshot(`"float: left"`));
  test("dn", result => expect(result).toMatchInlineSnapshot(`"display: none"`));
  test("bgn", result => expect(result).toMatchInlineSnapshot(`"background: none"`));
  test("curp", result => expect(result).toMatchInlineSnapshot(`"cursor: pointer"`));
  test("wa", result => expect(result).toMatchInlineSnapshot(`"width: auto"`));
  test("bsbb", result => expect(result).toMatchInlineSnapshot(`"box-sizing: border-box"`));
  // `border-style: hidden`??
  test.skip("bshn", result => expect(result).toMatchInlineSnapshot());
});

describe("some suddenly complex declarations test:", () => {
  test.skip("fs", result => expect(result).toMatchInlineSnapshot());
  test("fz", result => expect(result).toMatchInlineSnapshot(`"font-size: undefined"`));
  test("fv", result => expect(result).toMatchInlineSnapshot(`"font-variant: undefined"`));
  test("fv", result => expect(result).toMatchInlineSnapshot(`"font-variant: undefined"`));
  test("ti", result => expect(result).toMatchInlineSnapshot(`"text-indent: undefined"`));
  test("lh", result => expect(result).toMatchInlineSnapshot(`"line-height: undefined"`));
  test("orp", result => expect(result).toMatchInlineSnapshot(`"orphans: undefined"`));
  test.skip("rz", result => expect(result).toMatchInlineSnapshot());
  test("cur", result => expect(result).toMatchInlineSnapshot(`"cursor: undefined"`));
  test("op", result => expect(result).toMatchInlineSnapshot(`"opacity: undefined"`));
  test("fst", result => expect(result).toMatchInlineSnapshot(`"font-style: undefined"`));
});

describe("declarations with numeric values:", () => {
  test("w10", result => expect(result).toMatchInlineSnapshot(`"width: 10px"`));
  test("w1.5", result => expect(result).toMatchInlineSnapshot(`"width: 1.5em"`));
  test("w25%", result => expect(result).toMatchInlineSnapshot(`"width: 25%"`));
  test("w50p", result => expect(result).toMatchInlineSnapshot(`"width: 50%"`));
  test("w20px", result => expect(result).toMatchInlineSnapshot(`"width: 20px"`));
  test("w20e", result => expect(result).toMatchInlineSnapshot(`"width: 20em"`));
});
