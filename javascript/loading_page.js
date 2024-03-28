
$(document).ready(function() {
    $(document).on('mousemove', function(e) {
      $('#circularcursor').css({
        left: e.pageX,
        top: e.pageY
      });
    })
});


var b = document.querySelector('body');
const hover = document.querySelector('[name="cursor_hover"]');
hover.addEventListener('mouseover', () => {
    b.style.setProperty('--bg-main-cursor', '#576489');
    b.style.setProperty('--size-border', '0.05em');
});

hover.addEventListener('mouseout', () => {
    b.style.setProperty('--bg-main-cursor', 'transparent');
    b.style.setProperty('--size-border', '0.1em');
});


