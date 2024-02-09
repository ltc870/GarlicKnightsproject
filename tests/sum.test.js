const sum = require("./sum");

test("adds 2 numbers and get the result", () => {
  expect(sum(1, 2)).toBe(3);
});
