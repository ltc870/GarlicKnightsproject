function getbooks(){
    document.getElementById('output').innerHTML="";
    fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value).then(a=>a.json()).then(response=>{
        for(var i=0; i<5; i++){
            document.getElementById("output").innerHTML+=
            "<div class=\"d-flex flex-row border border-dark rounded\"> \n" 
            + "<div class=\"object-fit-contain\">"
            + "<img src=\"http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg\"><br>"
            + "</div><br>"
            + "<div class=\"d-flex flex-column\">"
            + "<div class=\"h2\">" + response.docs[i].title + "</div>" 
            + "<div class=\"h4\">" + response.docs[i].author_name[0] + "</div>"
            + "<div class=\"h4\">" + response.docs[i].first_sentence + "</div>"
            + "</div><br></div><br>";
        }
        });
}