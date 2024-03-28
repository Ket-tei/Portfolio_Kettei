
// smooth scrolling for anchor 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY,
      });
    })
});


var b = document.querySelector('body');

const hover = document.querySelector('[name="cursor_hover"]');
hover.addEventListener('mouseover', () => {
    b.style.setProperty('--size-main-cursor', '2em');
});

hover.addEventListener('mouseout', () => {
    b.style.setProperty('--size-main-cursor', '1.5em');
});