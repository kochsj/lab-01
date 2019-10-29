$(document).ready(function(){
    if(window.innerWidth >= 960){
        $("header").css("background-color", "grey");
        $("footer").css("background-color", "grey");
        $("section").css("background-color", "grey");
        $("article").css("background-color", "grey");
        $("nav").css("background-color", "grey");
    }
    if(window.innerWidth < 960 && window.innerWidth > 768){
        $("header").css("background-color", "lightgreen");
        $("footer").css("background-color", "lightgreen");
        $("section").css("background-color", "lightgreen");
        $("article").css("background-color", "lightgreen");
        $("nav").css("background-color", "lightgreen");
    }
    if(window.innerWidth <= 768){
        $("header").css("background-color", "orange");
        $("footer").css("background-color", "orange");
        $("section").css("background-color", "orange");
        $("article").css("background-color", "orange");
        $("nav").css("background-color", "orange");
    }
});

$(window).resize(function(){
    if(window.innerWidth >= 960){
        $("header").css("background-color", "grey");
        $("footer").css("background-color", "grey");
        $("section").css("background-color", "grey");
        $("article").css("background-color", "grey");
        $("nav").css("background-color", "grey");
    }
    if(window.innerWidth < 960 && window.innerWidth > 768){
        $("header").css("background-color", "lightgreen");
        $("footer").css("background-color", "lightgreen");
        $("section").css("background-color", "lightgreen");
        $("article").css("background-color", "lightgreen");
        $("nav").css("background-color", "lightgreen");
    }
    if(window.innerWidth <= 768){
        $("header").css("background-color", "orange");
        $("footer").css("background-color", "orange");
        $("section").css("background-color", "orange");
        $("article").css("background-color", "orange");
        $("nav").css("background-color", "orange");
    }
});

