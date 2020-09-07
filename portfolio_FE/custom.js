$(function(){
    $('#menu1').click(function(){
        var position = $("#introduce_location".offset());
        $("body").stop().animate({scrollTop:position.top},500);
    })
})