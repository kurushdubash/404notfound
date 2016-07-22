$(document).ready(function() {
    $(".scrolldown").click(function() {
        $('html,body').animate({
            scrollTop: $(".content-section").offset().top},
            'slow');
    });
});