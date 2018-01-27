$(document).ready(function () {

    var bgresize = function () {
        if ($(window).width() <= 767) {
            $("#smallcaption").removeClass("hidden");
            $("#bigcaption").addClass("hidden");
        } else {
            $("#smallcaption").addClass("hidden");
            $("#bigcaption").removeClass("hidden");
        }
    }
    bgresize();
    $(window).resize(bgresize);
    $(window).on("orientationchange", bgresize);
});
