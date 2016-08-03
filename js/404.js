var secret = "38384040373937396665";
var input = "";
var timer;

$(document).ready(function() {
    setTimeout(function(){
            $("#randomGenerator").fadeIn(1500);
        }, 1500);
    // random = document.getElementById('randomGenerator');
    // random.addEventListener("mouseover",function(){
    //     this.src = "hover.jpg";
    // });
    // random.addEventListener("mouseout",function(){
    //     this.src = "norm.png";
    // });
    $("#randomGenerator").click(function() {
        $(".error-code").hide();
        $(".error-subtitle").hide();
        $(".error-image-container").hide();
        $(".content-container").slideUp("slow");

        // $(".content-container").hide();

        animationsTest(function() {
           var allthings = [person1, person2, person3, person4, person5];
            var chosenOne = allthings[Math.floor(Math.random()*allthings.length)];
            $(".content-type").html("MEET OUR PEOPLE");
            $(".content-image").html("<img src=" + chosenOne.url + " class='content-image'>");
            $(".content-title").html(chosenOne.name);
            $(".content-subtitle").html(chosenOne.department);
            $(".content-text").html(chosenOne.description);
            var tmColors = [super_dark_blue,
                            dark_blue,
                            medium_blue,
                            light_blue,
                            pink,
                            dark_green,
                            medium_green,
                            light_green,
                            dark_gray,
                            medium_gray];
            // $(".content-container").css("background-color", tmColors[Math.floor(Math.random()*tmColors.length)]);
            var chosenColor = tmColors[Math.floor(Math.random()*tmColors.length)]
            $(".content-container").css("border", chosenColor + " solid 1px");
            $(".content-type").css("color", chosenColor);
            $(".content-container").slideDown("slow");
            // $(".content-container").show();
        });

    })

    function animationsTest (callback) {
        // Test if ANY/ALL page animations are currently active
        var testAnimationInterval = setInterval(function () {
            if (! $.timers.length) { // any page animations finished
                clearInterval(testAnimationInterval);
                callback();
            }
        }, 25);
    };

    var super_dark_blue     = "#0085A5";
    var dark_blue           = "#00B7CE";
    var medium_blue         = "#56C5D0";
    var light_blue          = "#94D6DA";
    var super_light_blue    = "#C9E9E6";
    var pink                = "#CD007A";
    var dark_green          = "#70982B";
    var medium_green        = "#A7BE39";
    var light_green         = "#CBD42F";
    var dark_gray           = "#4D4D4F";
    var medium_gray         = "#939598";
    var light_gray          = "#C7C8CA";

    var items = ['People', 'Places', 'Puppies'];
    var people = [person1, person2, person3, person4, person5];
    var places = [place1, place2, place3];
    var puppies = [puppy1, puppy2, puppy3];

    openCity(event, items[Math.floor(Math.random()*items.length)], people[Math.floor(Math.random()*people.length)],
        places[Math.floor(Math.random()*places.length)], puppies[Math.floor(Math.random()*puppies.length)]);
});

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
        $('.error-code').remove();
        $('.error-subtitle').remove();
        $('.home-container').remove();
        $('.content-container').remove();
        $('#randomGenerator').remove();
        $('.easter-egg').html("<canvas width='800' height='500' id='tubeMogulBreakBlock' style='display: none;' ><p>Your browser does not support this feature</p></canvas>");
        var script = document.createElement( 'script' );
        script.type = 'text/javascript';
        script.src = "js/tubeBreakBlock.js";
        document.body.appendChild(script);
        input = "";
        $('html,body').animate({
            scrollTop: $(".easter-egg").offset().top},
            'slow');
        $("#tubeMogulBreakBlock").slideDown( 1000 );
    }
};

    

function openCity(evt, list1, list2, list3, list4) {
    // var i, tabcontent, tablinks;
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none";
    // }
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    // var doc = document.getElementById(list1);
    // doc.style.display = "block";
    document.getElementById("h3peep").innerHTML = list2.name;
    document.getElementById("ppeep").innerHTML = list2.department;
    document.getElementById("p2peep").innerHTML = list2.description;
    document.getElementById("divpeep").innerHTML = "<img src=" + list2.url + " class='people-image'>";

    document.getElementById("h3place").innerHTML = list3.name;
    document.getElementById("pplace").innerHTML = list3.location;
    document.getElementById("p2place").innerHTML = list3.description;
    document.getElementById("divplace").innerHTML = "<img src=" + list3.url + " class='place-image'>";

    document.getElementById("h3puppies").innerHTML = list4.name;
    document.getElementById("ppuppies").innerHTML = list4.breed;
    document.getElementById("p2puppies").innerHTML = list4.favoriteToy;
    document.getElementById("divpuppies").innerHTML = "<img src=" + list4.url + " class='puppy-image'>";
    evt.currentTarget.className += " active";
}

var person1 = {
    name: "Kurush",
    department: "PTV Team",
    description: "I like long bike rides to TubeMogul, rockclimbing without ropes, and watching my stock investments fail... Oh wait is this not for tinder?",
    url: "http://i.imgur.com/IjCLh9Y.jpg"
}

var person2 = {
    name: "Cassidy",
    department: "UI Team",
    description: "I am the only female intern, the odds are good but the goods are odd.",
    url: "http://i.imgur.com/MtKSMXC.jpg"
}

var person3 = {
    name: "Jordan",
    department: "UI Team",
    description: "Did you know that Raleigh, North Carolina is the Silicon Valley of the East Coast?",
    url: "http://i.imgur.com/xOUi2b8.jpg"
}

var person4 = {
    name: "Richard",
    department: "RTB Team",
    description: "You can call me by my nickname: Lil Dicky Shoe.",
    url: "http://i.imgur.com/DEcGdDK.jpg"
}

var person5 = {
    name: "Alton",
    department: "STATS Team",
    description: "I'm a rising junior studying EECS at UC Berkeley and a Software Engineering Intern on the STATS team.",
    url: "http://i.imgur.com/AOngfTP.jpg"
}

var place1 = {
    name: "Emeryville",
    location: "California",
    description: "Eight years ago TubeMogul was a tiny startup located in the basement of a Berkeley hotel. Currently, TubeMogul is based in Emeryville, occupying Pixar’s previous buildings where many of their original animated films were made!",
    url: "http://i.imgur.com/2U5lfgx.jpg",
}

var place2 = {
    name: "London",
    location: "United Kingdom",
    description: "Many argue that the birthplace of our industry can be found in London - all thanks to the ‘father of modern advertising’, Thomas J. Barratt who created the first-ever advertising slogan – so it’s no wonder we set up shop where it all began.",
    url: "http://i.imgur.com/q5RNyut.jpg",
}

var place3 = {
    name: "New York",
    location: "New York",
    description: "Called many things: “The Big Apple, “Gotham City, “The City that Never Sleeps”. To NY TubeMogulers, we call NYC home. Many of us are transplants from other cities; however, as Tom Wolf accurately said “One belongs to New York instantly, one belongs to it as much in five minutes as in five years.”",
    url: "http://i.imgur.com/zZK7vE1.jpg",
}

var puppy1 = {
    name: "Kurush",
    breed: "Golden Retriever",
    favoriteToy: "Doggy Pacifier",
    url: "http://i.imgur.com/OSY1rZr.jpg",
}

var puppy2 = {
    name: "Snapchat",
    breed: "Golden Retriever",
    favoriteToy: "Plush Toy",
    url: "http://i.imgur.com/j0TVEfe.jpg"
}

var puppy3 = {
    name: "Kanye",
    breed: "Scottish Terrier",
    favoriteToy: "Rope Chew Toy",
    url: "http://i.imgur.com/yAhIdDx.jpg",
}

var people = [person1, person2, person3, person4, person5];
var places = [place1, place2, place3];
var puppies = [puppy1, puppy2, puppy3];

function random(list) {
    var number = randomIntFromInterval(0, list.length);
    return list[number];
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

