const stringLength = require("./stringlength");

test("calculates the length of a string", () => {
  expect(stringLength("hello")).toBe(5);
});
