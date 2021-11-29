$(function () {
    $(".owl-carousel").owlCarousel({
        nav: true,
        navText: [
            '<div class="video-box__arrow-left"></div>',
            '<div class="video-box__arrow-right"></div>',
        ],
        items: 1,
        loop: true,
        video: true,
        lazyLoad: true,
        center: true,
        responsive: {
            340: {
                items: 1,
            },
            1280: {
                items: 1,
            },
            1650: {
                items: 3,
            },
        },
    });
});
