var swiper = new Swiper(".swiper-container", {
    loop: false,
    navigation: {
        nextEl: ".video-box__arrow-right",
        prevEl: ".video-box__arrow-left",
    },
    mousewheelControl: false,
    simulateTouch: false,
    slidesPerView:3,
    observer: true,
    observeParents: true,
    breakpoints:{
        340: {
            slidesPerView:1
        },
        1280: {
            slidesPerView:1
        },
        1650: {
            slidesPerView: 3
        }
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
