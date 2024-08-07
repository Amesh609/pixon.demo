$(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
        $(".navbar").addClass("filled");
    } else {
        $(".navbar").removeClass("filled");
    }
});