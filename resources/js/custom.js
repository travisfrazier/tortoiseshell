$('.main-nav').click(function() {
    alert('clicked!');
});

$('.statement').click(function() {
    $(this).css('background-color', 'blue');
});

$('.cool').hover(function() {
    $(this).css('width', '400px');
    $(this).css('height', '400px');
});

$('.cool').mouseout(function() {
    $(this).css('width', '175px');
    $(this).css('height', '175px');
});