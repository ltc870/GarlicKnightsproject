async function getbooks() {
  var outputElement = document.getElementById("output");
  var inputElement = document.getElementById("input");

  outputElement.innerHTML = "";

  try {
    const response = await fetch(
      "http://openlibrary.org/search.json?q=" + inputElement.value
    );

    if (!response.ok) {
      console.error(
        "Failed to fetch data:",
        response.status,
        response.statusText
      );
    }

    const data = await response.json();

    for (var i = 0; i < 5; i++) {
      var doc = jsonData.docs[i];
      if (!doc.title || !doc.author_name || !doc.isbn) {
        console.error("Required data missing in document:", doc);
        continue;
      }

      outputElement.innerHTML +=
        "<h2>" +
        jsonData.docs[i].title +
        "</h2>" +
        jsonData.docs[i].author_name[0] +
        "<br><img src='http://covers.openlibrary.org/b/isbn/" +
        jsonData.docs[i].isbn[0] +
        "-M.jpg'><br>";
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  //   fetch("http://openlibrary.org/search.json?q=" + inputElement.value)
  //     .then((a) => a.json())
  //     .then((response) => {
  //       for (var i = 0; i < 5; i++) {
  //         var doc = response.docs[i];
  //         if (!doc.title || !doc.author_name || !doc.isbn) {
  //           console.error("Required data missing in document:", doc);
  //           continue;
  //         }

  //     output.innerHTML +=
  //       "<h2>" +
  //       response.docs[i].title +
  //       "</h2>" +
  //       response.docs[i].author_name[0] +
  //       "<br><img src='http://covers.openlibrary.org/b/isbn/" +
  //       response.docs[i].isbn[0] +
  //       "-M.jpg'><br>";
  //   }
  // });
}

module.exports = getbooks;
