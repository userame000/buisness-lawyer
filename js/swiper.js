var swiper = new Swiper(".swiper-container", {
    loop: false,
    navigation: {
        nextEl: ".video-box__arrow-right",
        prevEl: ".video-box__arrow-left",
    },
    mousewheelControl: false,
    simulateTouch: false,
    slidesPerView: 3,
    observer: true,
    spaceBetween: 30,
    observeParents: true,
    breakpoints:{
        320: {
            slidesPerView: 1,
            spaceBetween: 300,

        },
        980: {
            slidesPerView: 2,
            spaceBetween: 44,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
    }
});










// $(function () {
//     $(".video-box__arrow-right").on("click", function () {
//         if (
//             $(".b-reviews .video-box__player").last().index() >
//             $(".b-reviews .--visible").last().index()
//         ) {
//             var indexLast = $(".b-reviews .--visible").last().index();
//             var indexFirst = $(".b-reviews .--visible").first().index();
//             $(".b-reviews .video-box__player").eq(indexFirst);
//             setTimeout(function () {
//                 $(".b-reviews .video-box__player")
//                     .eq(indexFirst)
//                     .removeClass("--visible");
//                 $(".b-reviews .video-box__player")
//                     .eq(indexLast + 1)
//                     .addClass("--visible");
//             }, 200);
//         }
//     });
//     $(".video-box__arrow-left").on("click", function () {
//         if (
//             $(".b-reviews .video-box__player").first().index() <
//             $(".b-reviews .--visible").first().index()
//         ) {
//             var indexLast = $(".b-reviews .--visible").last().index();
//             var indexFirst = $(".b-reviews .--visible").first().index();
//             $(".b-reviews .video-box__player").eq(indexLast);
//             setTimeout(function () {
//                 $(".b-reviews .video-box__player")
//                     .eq(indexLast)
//                     .removeClass("--visible");
//                 $(".b-reviews .video-box__player")
//                     .eq(indexFirst - 1)
//                     .addClass("--visible");
//             }, 200);
//         }
//     });
// });
