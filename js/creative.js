$(document).ready(function() {
    $(".scrolldown").click(function() {
        $('html,body').animate({
            scrollTop: $(".content-section").offset().top},
            'slow');
    });
    var items = ['People', 'Places', 'Puppies'];
    openCity(event, items[Math.floor(Math.random()*items.length)]);
});

function openCity(evt, ofTubeMogul) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(ofTubeMogul).style.display = "block";
    evt.currentTarget.className += " active";
}