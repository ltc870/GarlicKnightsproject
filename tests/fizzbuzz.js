"use strict";

function fizzBuzz(numbers) {
  let result = [];

  for (let number of numbers) {
    if (number % 15 === 0) {
      result.push("fizzBuzz");
    } else if (number % 3 === 0) {
      result.push("fizz");
    } else if (number % 5 === 0) {
      result.push("buzz");
    } else {
      return result.push(number);
    }
  }
  return result.join(", ");
}

module.exports = fizzBuzz;
