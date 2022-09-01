$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.menu__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.icon-facebook').on('mouseover', function () {
        $(this).parent().addClass('is-hover--facebook');
    }).on('mouseout', function () {
        $(this).parent().removeClass('is-hover--facebook');
    })
    $('.icon-twitter').on('mouseover', function () {
        $(this).parent().addClass('is-hover--twitter');
    }).on('mouseout', function () {
        $(this).parent().removeClass('is-hover--twitter');
    })
    $('.icon-linkedin').on('mouseover', function () {
        $(this).parent().addClass('is-hover--linkedin');
    }).on('mouseout', function () {
        $(this).parent().removeClass('is-hover--linkedin');
    })
});