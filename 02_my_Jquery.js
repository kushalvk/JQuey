console.log("We are using Jquery");
// Syantex ---> $('selector').action()

// ----------------

$(document).ready(function () { // to ready a document
    // this is an exam pale of element selector
    // $('p').click(); // click on all the p element
    $('p').click(function () {
        // console.log(" You clicked on p", this);
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

    // ------------------

    // Events
    // mouse events = click , bdlclick , mouseenter , mouseleave
    // Keyboard Events = keypress , keydown , keyup
    // form event = submit , change , focus , blur
    // document/window events = load , resize , scroll , unload

    $('p').dblclick(function () {
        console.log(" You double clicked on p", this);
    });

    // $('p').mouseenter(function () {
    //     console.log(" You entered: ", this);
    // });

    // $('p').mouseleave(function () {
    //     console.log(" You leaved: ", this);
    // });

    // $('p').mousedown(function () { // any button click on mouse
    //     console.log(" You parform mousedown event: ", this);
    // });

    // $('p').mouseup(function () {
    //     console.log(" You click and up your mouse key:", this);
    // });

    // $('p').hover(function () {
    //     console.log(" You hover on p:", this);
    // });

    // -----------------------

    // demoing the on method
    $('p').on(
        {
            click: function () {
                console.log('Thanks for clicking', this);
            },
            // mouseleave: function () {
            //     console.log('mouseleave');
            // }

        })

    // $('#wiki').hide(1000, function () {
    //     console.log("hidden");
    // })
    // $('#wiki').show(1000, function () {
    //     console.log("show");
    // })

    // ------------------

    // fade method -> speed and callback paramitarce are optional
    $('#but').click(function () {
        // $('#wiki').toggle(1000);
        // $('#wiki').fadeOut(1000); // hide
        // $('#wiki').fadeIn(1000); // show
        $('#wiki').fadeToggle(1000, function () { // function is callback
            console.log('fade done');
        });
        // $('#wiki').fadeTo(1000, 0.3); // blur to '0.3' densiti
    })

    // slide method -> speed and callback paramitarce are optional
    $('#slide').click(function () {
        // $('#wiki').slideUp(1000);
        // $('#wiki').slideDown(1000);
        $('#wiki').slideToggle(1000, function () { // function is callback
            console.log('slide done');
        });
    })

    // -----------------

    // animat function in JQuery
    $('.ani').click(function () {
        $('#wiki').animate({
            margin: '50px',
            opacity: 0.5,
            height: '150px',
            width: '200px',
        }, 2000)
    })

    // ----------------

    // stop method
    $('.stop').click(function () {
        $('#wiki').stop();
    })

    // --------------------

    // document/window methods

    // $('#ta').val(); // for teking value
    // $('#ta').val('setting it to kushal'); // to set a value
    // $('#inp').val('setting it to kushal2'); // to set a value
    // $('#wiki').empty(); // to blank the text 
    // $('#wiki').text('you are good'); // to add a text
    // $('#wiki').remove(); // to remove element
    // $('#wiki').addClass('myclass'); // to add a new class in this tag
    // $('#wiki').removeClass('myclass'); // to remove class 
    // $('#wiki').css('background-color', 'gray'); // to add a css
    // $('#wiki').css('background-color'); // to show a css proparty

    // i am harshad
});