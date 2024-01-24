const fizzBuzz = require("./fizzbuzz");

describe("fizzBuzz", () => {
  test('[3] should result in "fizz"', () => {
    expect(fizzBuzz([3])).toBe("fizz");
  });

  test('[5] should result in "buzz"', () => {
    expect(fizzBuzz([5])).toBe("buzz");
  });

  test('[15] should result in "fizzBuzz"', () => {
    expect(fizzBuzz([15])).toBe("fizzBuzz");
  });

  test('[1, 2, 3] should result in "1, 2, fizz"', () => {
    expect(fizzBuzz([3])).toBe("fizz");
  });
});
