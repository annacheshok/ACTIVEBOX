new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 1000,
        stopOnLastSlide:false,
        disableOnInteraction:false,
    },
    speed:700,
    effect: 'fade',
    fadeEffect:{
        crossFade:true
    },
});
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.menu__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.icon').on('mouseover', function () {
        $(this).addClass('is-hover');
    }).on('mouseout', function () {
        $(this).removeClass('is-hover');
    })
});