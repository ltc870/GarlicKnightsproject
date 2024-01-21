
var text;
function search() {
    let ele = document.getElementsByName('subject');
    for (i=0;i<ele.length; i++) {
        if(ele[i].checked)
         text = ele[i].value;
    }
    //let text = ele[0].value;
    console.log(text);
    let urlInput = 'https://openlibrary.org/subjects/' +text;
    console.log(urlInput);
    $.ajax ({
        url: urlInput,
        method: 'get',
        datatype: 'json',
        success: function (data) {
            let book = data.works[0].title;
                let bookout = JSON.stringify(book);
                document.getElementById("title1").innerHTML = bookout;
                let book2 = data.works[1].title;
                let bookout2 = JSON.stringify(book2);
                document.getElementById("title2").innerHTML = bookout2;
                console.log(bookout2);
                let book3 = data.works[2].title;
                let bookout3 = JSON.stringify(book3);
                document.getElementById("title3").innerHTML = bookout3;
                console.log(bookout3);
        }
    })
}


