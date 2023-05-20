$(function () {
    $('.header-mobile__button').click(function () {
        $('body').toggleClass('body-hidden');
        $('.header-mobile__button').toggleClass('header-mobile__button_open');
        $('.header-mobile__menu').toggleClass('header-mobile__menu_open');
    });
});

$('a[href^="#"]').click(function () {
    var link = $(this).attr('href');
    var hrefSplitted = link.split('/');

    if (!$(this).attr('role') && !$(this).hasClass('modalbox') && hrefSplitted.length <= 2) {
        event.preventDefault();
        var hash = link.replace(/[^#]*(.*)/, '$1');
        var t = $(hash).offset().top;
        $(window).scrollTop(t - 80);

        if ($(this).hasClass('mobile-menu__dd-link')
            || $(this).hasClass('mobile-menu__link')
        ) {
            $('#mobileMenu').removeClass('header-mobile__menu_open');
            $('.header-mobile__button').removeClass('header-mobile__button_open');
            $('body').removeClass('body-hidden');
        }
    }
});


$(document).ready(function () {
    $(".modalbox").fancybox({
        touch : false,
        });
});

$(document).ready(function () {
    $('.coaches-slider__wrap').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
        nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.reviews-slider').each(function () {
        $(this).slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
            nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
        });
    });
    $('.map-slider__item-wrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $('.map-slider__dots-wrap').first(),
        prevArrow: '<div class="map-slider__arrow map-slider__arrow_prev"></div>',
        nextArrow: '<div class="map-slider__arrow map-slider__arrow_next"></div>',
    });
});

$(window).on("load", function () {
    $(".reviews-item__desc").mCustomScrollbar();
    $(".modal-window__text").mCustomScrollbar();
});


var headerHeight = 88;

if ($(window).width() < 992) {
    headerHeight = 71;
}


var nav = $('header');
$(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight) {
        nav.addClass("header_fixed");
        $('body').addClass('body_fixed');
    } else {
        nav.removeClass("header_fixed");
        $('body').removeClass("body_fixed");
    }
});

$('select').customSelect();