$(function () {
    $(".header__burger").on("click", function () {
        $(this).fadeOut("slow", function(){
            $('.b-menu').toggleClass('--visible')
        })
    });
});
