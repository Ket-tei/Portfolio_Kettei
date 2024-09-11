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