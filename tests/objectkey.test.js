const objectKey = require("./objectkey");

test("check if objectkey has keys", () => {
  expect(objectKey({ name: "John", age: 30 })).toEqual(
    expect.arrayContaining(["name", "age"])
  );
});
