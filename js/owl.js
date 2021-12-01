$(function () {
    $(".owl-carousel").owlCarousel({
        nav: true,
        navText: [
            '<div class="video-box__arrow-left"></div>',
            '<div class="video-box__arrow-right"></div>',
        ],
        loop: true,
        video: true,
        lazyLoad: true,
        margin: 30,
        responsive: {
            320: {
                items: 1,
            },
            980: {
                items: 2,
                margin: 44,
            },
            1280: {
                items: 3,
                margin: 80,
            },

        },
    });
});
