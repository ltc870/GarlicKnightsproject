const sortNumbers = require("./sortnumbers");

test("sorts numbers in ascending order", () => {
  expect(sortNumbers([3, 2, 1])).toEqual([1, 2, 3]);
});
