$(function(){
    $('#menu1').click(function(){
        var position = $("#introduce_location".offset());
        $("body").stop().animate({scrollTop:position.top},500);
    })
    //Slick.js :experience
    $('.experience_info').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplayspeed: 2000,
        cssEase: 'linear'
    })
})