$(document).ready(function () {

    $('#home').hover(function () {
        $(this).css("color", 'red');
    })

    $('#about').hover(function () {
        $(this).css("color", 'orange');
    })

    $(".ha #home").click(function () {
        $(".Hlist").animate({margin: '60px 400px'})
        $(".Hlist").slideToggle();
    });

    $(".ha #about").click(function () {
        $(".Alist").animate({margin: '60px 570px'})
        $(".Alist").slideToggle();
    });

    $('#Loginf').mouseenter(function () {
        $(this).css("color", 'white')
        $(this).css("background", 'royalblue')
    })

    $('#singupf').mouseleave(function () {
        $(this).css("color", 'white')
        $(this).css("background", 'royalblue')
    })

    $(".hb #loginf").click(function () {
        $(".hb #singupf").toggle();
    });

    $(".hb #singupf").click(function () {
        $(".hb #loginf").toggle();
    });

    $("#Loginf").click(function () {
        $("#login").animate({
            right: '100px',
        }, 2000)
        $('.p1').css("opacity", 0.1)
        $('.p2').css("opacity", 0.1)
    })

    $("#singupf").click(function () {
        $("#Singup").animate({
            right: '20px',
        }, 2000)
        $('.p1').css("opacity", 0.1)
        $('.p2').css("opacity", 0.1)
        $("#login").fadeToggle(1000);
    })

    $(".p1").click(function () {
        $(this).animate({
            hight: '600px',
            width: '600px',
        })
        $(".p1 img").animate({
            hight: '100%',
            width: '100%',
        })
        $("header").css("opacity",0.3)
        $(".p2").css("opacity",0.3)
    })

    $(".p2").click(function () {
        $(this).animate({
            hight: '600px',
            width: '600px',
        })
        $(".p2 img").animate({
            hight: '100%',
            width: '100%',
        })
        $("header").css("opacity",0.3)
        $(".p1").css("opacity",0.3)
    })
});