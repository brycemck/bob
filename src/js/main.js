console.log('hello crazy');

$('.album-carousel').slick({
    arrows: false
});

$('.album-carousel').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('.music-queue').addClass('loading');
    setTimeout(function(){
        $('.music-queue').removeClass('loading');
    }, 1000);
});

$('.music-queue').on('click touchend', function(event) {
    if ($(this).hasClass('paused')) {
        $(this).addClass('loading');
        $(this).removeClass('paused');
        setTimeout(function(){
            $('.music-queue').removeClass('loading');
        }, 5000);
    } else {
        $(this).addClass('paused');
    }
});