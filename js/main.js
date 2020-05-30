$(document).ready(function () {

    let nav_offset_top = $('.header-area').height() + 80;

    function navbarFixed() {
        if ($('.header-area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header-area .main-menu').addClass('navbar-fixed');
                } else {
                    $('.header-area .main-menu').removeClass('navbar-fixed');
                }
            })
        }
    }

    navbarFixed();

});