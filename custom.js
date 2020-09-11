window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const start = document.getElementsByClassName('start')[0];
    const background = document.getElementsByClassName('background')[0];

    if (scrollY > 50) {
        start.classList.add('active');
        // background.classList.add('active2');

    } else {
        start.classList.remove('active');
        // background.classList.remove('active2');
    }

});

$(function () {
    $('.experience_info').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
    })
})
