$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        easing: 'ease',
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 319,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    });
});