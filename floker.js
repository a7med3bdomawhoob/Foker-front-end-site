// $(window).scroll(function () {
//     $()
//     let top = $(window).scrollTop();
//     console.log(top)
// })

let pageafterhome = $('.parent').offset().top;
$(window).scroll(function () {
    let sctop = $(window).scrollTop();
    if (sctop > pageafterhome - 20) {
        $('.navbar').css('backgroundColor', 'rgba(0,0,0,0.7)')
        $('.navbar').css('padding', '10px')
    }
    else {
        $('.navbar').css('backgroundColor', 'transparent')
        $('.navbar').css('padding', '0px')
    }
})



$('#about').click(function () {
    let distance = $('.parent').offset().top;

    // $(window).scrollTop(distance)

    $('html, body').animate({ scrollTop: distance }, 2000)
})

$(document).ready(function () {
    $('.spin').fadeOut(1000, function () {
        // $('.load').css('backgroundColor', ' transparent')
        $('.load').fadeOut(1000, function () {
            $('body').css('overflow-y', 'auto')
        })
    });


})


$('.onec').eq(0).css('backgroundColor', 'tomato');
$('.onec').eq(1).css('backgroundColor', 'red');
$('.onec').eq(2).css('backgroundColor', 'black');
$('.onec').eq(3).css('backgroundColor', 'yellow');
$('.onec').eq(4).css('backgroundColor', 'orange');




$('.onec').click(function () {
    let bg=$(this).css('backgroundColor');
    $('.details h1').css('color', bg);
})


$('.sp').click(function(){
    $('.options .chooce').toggle(1000);
})