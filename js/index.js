$(document).ready(() => {
	let carouselItem = $('.carousel__item')
	let margin = parseInt($(carouselItem).css('marginRight')) + parseInt($(carouselItem).css('marginLeft'))
	let carouselItemWidth = $(carouselItem).width() + margin;
	let move = 0
	$('.carousel__arrow').click(function () {
		if ($(this).css('left') == '0px') {
			let carousel = $(this).next().find('.carousel__items');
			move = (move < 0) ? move += carouselItemWidth : (carouselItemWidth * $(carousel).children().length * -1) + carousel.width()
			carousel.css({ transform: `translateX(${move}px)` });
		}
		else {
			let carousel = $(this).prev().find('.carousel__items');
			move = (move <= (carouselItemWidth * $(carousel).children().length * -1) + carousel.width()) ? 0 : move -= carouselItemWidth
			carousel.css({ transform: `translateX(${move}px)` });
		}
	})
})