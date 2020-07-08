const slider = $('.slider__list').bxSlider({
    pager: false,
    controls: false
});

$(".controls-arrowL").click(e => {
    e.preventDefault();
    slider.goToPrevSlide()
});

$(".controls-arrowR").click(e => {
    e.preventDefault();
    slider.goToNextSlide()
});