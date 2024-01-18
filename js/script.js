/*
$(document).ready(function() {
    alert('jquery loaded');
});
*/
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

/*
$(document).ready(function() {
    $.ajax ({
        url: 'https://openlibrary.org/subjects/' + JTP,
        method: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(data.works);
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
        },
        error: function(err){
            console.log(err);
        }
    })
});


/*
$("#lead-banner");  //grab lead wrapped in jquery wrapper
$("#lead-banner p"); //grab banner p tags and put in jquery array


//selectors
$("h3").css({border: "3px solid blue"}); //all items h3 tag not have border

$(".wrapper").css ({border: "3px solid red"});  //class selector - all classes named wrapper now red border

$("#clients").css({border: "3px solid yellow"}); //id selector, client id now yellow border

//filters

*/

