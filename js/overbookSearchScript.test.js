/**
 * @jest-environment-jsdom
 */
// Import the fetch-mock package
const fetchMock = require("fetch-mock");

// Import your function
const getbooks = require("./overbookSearchScript");

// Mock the fetch call
beforeEach(() => {
  fetchMock.mock("http://openlibrary.org/search.json?q=", {
    status: 200,
    body: {
      docs: [
        {
          title: "Test Book",
          author_name: ["Test Author"],
          isbn: ["1234567890"],
        },
      ],
    },
  });

  // Set up our document body
  document.body.innerHTML =
    '<div id="output"></div>' + '<input id="input" value="test">';
});

// Reset the fetch mock after each test
afterEach(() => {
  fetchMock.reset();
});

test("getbooks function exists", () => {
  expect(typeof getbooks).toEqual("function");
});

test("test getbooks", async () => {
  // Call the function and wait for it to complete
  await getbooks();

  // Get the output element
  const output = document.getElementById("output");

  // Test that the output's innerHTML has been modified as expected
  expect(output.innerHTML).toContain("<h2>Test Book</h2>Test Author");
  expect(output.innerHTML).toContain(
    "<br><img src='http://covers.openlibrary.org/b/isbn/1234567890-M.jpg'><br>"
  );
});
