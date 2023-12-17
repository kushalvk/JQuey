console.log("We are using Jquery");
// Syantex ---> $('selector').action()

// ----------------

$(document).ready(function () { // to ready a document
    // this is an exam pale of element selector
    // $('p').click(); // click on all the p element
    $('p').click(function () {
        console.log(" You clicked on p", this);
        // $(this).hide(); // to hide the p tag when you click on p
        // $('#id').hide(); // to hide particular id
        // $('.class').hide(); // to hide particular class
    }); // do this when we click on p

    // There are three main type of selectors in jQuery

    // 1. element selector
    // Ex:- 
    // $('p').click();

    // 2. id selector
    // Ex:- 
    // $('#second').click();

    // 3. class selector
    // Ex:- 
    // $('.odd').click();

    // Other selectors
    // $('*').click(); // click on all the element
    // $('p.odd').click(); // click on all the element that class has 'odd'
    // $('p:first').click(); // click on the first element of p
    // $('p:last').click(); // click on the last element of p

})