
var text,OLID,ebook;
function search() {
    let ele = document.getElementsByName('subject');
    for (i=0;i<ele.length; i++) {
        if(ele[i].checked) {
         text = ele[i].value;
         console.log(text); }
        
    }
    let urlInput = 'https://openlibrary.org/subjects/' +text;
    let checkbox = document.querySelector("#checkbox");
    if ( checkbox.checked==true ) {
       let ebook = "?ebooks=true";
       urlInput+=ebook;
       console.log(ebook);
    } else {
     ebook="";
    }
    
    console.log(urlInput);

    $.ajax ({
        url: urlInput,
        method: 'get',
        datatype: 'json',
        success: function (data) {
            document.getElementById('output').innerHTML="";
            for(var i=0;i<5; i++) {
                let title= data.works[i].title;
                let authorArr = data.works[i].authors;
                let author = authorArr[0].name;

                let bookImg=data.works[i].cover_id;
                let urlInput = 'https://covers.openlibrary.org/b/id/' + bookImg + '-M.jpg';
                    
                document.getElementById("output").innerHTML+="<h2>" +
                title + "<br>" + "<h3>Written By:" + author + "<br><img src=" + urlInput + " ><br>";
            

            }
            
        }
        }
        
    )

    async function searchImg(data) {
        let OLID = data;
        let urlInput = 'https://covers.openlibrary.org/b/id/' + OLID + '-M.jpg';
        document.getElementById("output")+= "<img src=" + urlInput + " >";
        console.log(urlInput);
        console.log (cover1);
}
}
