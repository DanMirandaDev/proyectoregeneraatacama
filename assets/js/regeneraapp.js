$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 650,
            easing: "linear",
            queue: !6
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 650,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})


// Siempre vuelve al inicio al recargar
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


