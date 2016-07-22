var secret = "38384040373937396665";
var input = "";
var timer;

$(document).ready(function() {
    $(".scrolldown").click(function() {
        $('html,body').animate({
            scrollTop: $(".content-section").offset().top},
            'slow');
    });
    var items = ['People', 'Places', 'Puppies'];
    // openCity(event, items[Math.floor(Math.random()*items.length)]);
});

// function openCity(evt, ofTubeMogul) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(ofTubeMogul).style.display = "block";
//     evt.currentTarget.className += " active";
// }

$(document).keyup(function(e) {
    input += e.which;
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 10000);
    check_input();
});

function check_input() {
    if(input == secret || input.indexOf(secret) > -1) {
        // document.getElementsByClassName()
        $('.error-image').remove();
        $('.home-container').remove();
        $('.easter-egg').html("<canvas width='800' height='500' id='tubeMogulBreakBlock'><p>Your browser does not support this feature</p></canvas> ");
        var script = document.createElement( 'script' );
        script.type = 'text/javascript';
        script.src = "js/tubeMingle.js";
        document.body.appendChild(script);
        input = "";
    }
};