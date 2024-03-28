gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
var b = document.querySelector('body');
var menu = document.querySelector('nav');
var xMousePos = 0;
var yMousePos = 0;
var lastScrolledLeft = 0;
var lastScrolledTop = 0;

// smooth scrolling for anchor 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// custom cursor
// custom cursor to cursor postition
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        xMousePos = e.pageX;
        yMousePos = e.pageY;
        $('#circularcursor').css( {
            left: 1+e.pageX,
            top: -15+e.pageY,
        });
    })
    $(document).on('scroll', function(e) {
        if (lastScrolledLeft != $(document).scrollLeft()) {
            xMousePos -= lastScrolledLeft;
            lastScrolledLeft = $(document).scrollLeft();
            xMousePos += lastScrolledLeft;
        }
        if (lastScrolledTop != $(document).scrollTop()) {
            yMousePos -= lastScrolledTop;
            lastScrolledTop = $(document).scrollTop();
            yMousePos += lastScrolledTop;
        }
        $('#circularcursor').css( {
            left: 1+xMousePos,
            top: -15+yMousePos,
        });
    })
});

// definition of custom cursor pointer
document.querySelectorAll('[name="cursor_hover"]').forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
        b.style.setProperty('--size-main-cursor', '6vh');
    });
    anchor.addEventListener('mouseout', () => {
        b.style.setProperty('--size-main-cursor', '3vh');
    });
});



function changeText(text, id)
{
    var display = document.getElementById(id);

    display.innerHTML = "";
    display.innerHTML = text;
}
function changeBack(text, id)
{
    var display = document.getElementById(id);
    display.innerHTML = "";
    display.innerHTML = text;
}
// parallax
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
        $('nav').css("bottom", 5-(e.clientY/window.innerHeight) + '%');
        $('nav').css("left", 5+(e.clientX/window.innerWidth) + '%');

        $('.button a').css("bottom", 30-(e.clientY/window.innerHeight) + '%');
        $('.button a').css("left", 50+(e.clientX/window.innerWidth) + '%');

        $('#index').css("top", 50+(e.clientY/window.innerHeight) + '%');
        $('#index').css("right", 2-(e.clientX/window.innerWidth) + '%');

        $('.detail1').css("top", 350+(e.clientY/window.innerHeight) + '%');
        $('.detail1').css("left", 4+(e.clientX/window.innerWidth) + '%');

        $('.detail2').css("top", 390+(e.clientY/window.innerHeight) + '%');
        $('.detail2').css("left", 5+(e.clientX/window.innerWidth) + '%');

        $('.detail3').css("top", 365.67+(e.clientY/window.innerHeight) + '%');
        $('.detail3').css("right", 5-(e.clientX/window.innerWidth) + '%');
    })
});
// -------------------------
// animation menu
$(window).scroll(function(){;
    var bodyRect = document.body.getBoundingClientRect(),
    menuRect = menu.getBoundingClientRect();
    offset   = menuRect.top - bodyRect.top;
    offsetvh = ((100 * offset) / window.innerHeight);

    if(offsetvh<=98){
        $('nav #menu').css('color', 'var(--secondary)' );
        $('nav #menu_hover1').css('color', 'var(--secondary)' );
        $('nav #menu_hover2').css('color', 'var(--secondary)' );
        $('nav ul li a').css('color', 'var(--secondary)' );
        $('nav ul li a').hover(function(){
            $(this).css("color", "var(--white)");
            }, function(){
            $(this).css("color", "var(--secondary)");
        });
    } else if(offsetvh>=98 && offsetvh<=376){
        $('nav #menu').css('color', 'var(--primary)' );   
        $('nav #menu_hover1').css('color', 'var(--primary)' );
        $('nav #menu_hover2').css('color', 'var(--primary)' );
        $('nav ul li a').css('color', 'var(--primary)' );
        $('nav ul li a').hover(function(){
            $(this).css("color", "var(--white)");
            }, function(){
            $(this).css("color", "var(--primary)");
        });
    } else if(offsetvh>=376){
        $('nav #menu').css('color', 'var(--secondary)' );   
        $('nav #menu_hover1').css('color', 'var(--secondary)' );
        $('nav #menu_hover2').css('color', 'var(--secondary)' );
        $('nav ul li a').css('color', 'var(--secondary)' );
        $('nav ul li a').hover(function(){
            $(this).css("color", "var(--white)");
            }, function(){
            $(this).css("color", "var(--secondary)");
        });
    } 
});
$(window).scroll(function(){;
    var bodyRect = document.body.getBoundingClientRect(),
    dotRect = index.getBoundingClientRect();
    offset   = dotRect.top - bodyRect.top;
    offsetvh = ((100 * offset) / window.innerHeight);
    if(offsetvh<=92){
        $('#index span').css('background-color', 'var(--secondary)' );
        $('#index #i1').css('background-color', 'var(--evidence)' );
    } else if(offsetvh>=92 && offsetvh<=370.3){
        $('#index span').css('background-color', 'var(--primary)' );
        $('#index #i2').css('background-color', 'var(--evidence)' );
    } else if(offsetvh>=370.3){
        $('#index span').css('background-color', 'var(--secondary)' );
        $('#index #i3').css('background-color', 'var(--evidence)' );
    } 
});

// -------------------------

// animation project
let timeln = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "top-=3.1% top",
        end: "250% bottom",
        scrub: 1
    }
});

timeln.addLabel('card1');
timeln.to('.card-1', {
    xPercent: 0,
    opacity: 1
});

timeln.addLabel("card2");
timeln.from('.card-2', {
    xPercent: 30,
    opacity: 0
});

timeln.to(".card-1", {
    scale: 0.95,
    xPercent: -0.5,
    opacity: 0.5,
    zIndex: 995
}, "-=0.3");

timeln.to('.card-2', {
    xPercent: 0,
    opacity: 1,
    zIndex: 998
});

timeln.from('.card-3', {
    xPercent: 35,
    opacity: 0
});
timeln.addLabel('card3');

timeln.to(".card-1", {
    scale: 0.90,
    xPercent: -0.4,
    opacity: 0.4,
    zIndex: 996
}, "-=0.3");

timeln.to(".card-2", {
    scale: 0.95,
    xPercent: -0.4,
    opacity: 0.6,
    zIndex: 997
}, "-=0.3");

timeln.to(".card-3", {
    xPercent: 0,
    opacity: 1,
    zIndex: 998
});

timeln.to(".card-1", {
    scale: 0.85,
    xPercent: -0.2,
    opacity: 0.4
}, "-=0.3");

timeln.to(".card-2", {
    scale: 0.90,
    xPercent: -0.2,
    opacity: 0.5
}, "-=0.3");

timeln.to(".card-3", {
    scale: 0.95,
    xPercent: -0.2,
    opacity: 1
}, "-=0.3");
// -------------------------



