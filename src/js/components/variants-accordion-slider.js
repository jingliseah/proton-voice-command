$(function () {

	slickMobile = $('.slick-mobile');

	// Define options setting Slick config
	settings = {
		mobileFirst: true,
		infinite: false,
		responsive: [{
			breakpoint: 768,
			settings: 'unslick'
		}]
	}

	$(document).ready(function () {
		$(slickMobile).slick(settings);

		$(window).resize(function () {

			var $windowWidth = $(window).width();
			
			// Conditional if window size less than the size supposedly
			if ($windowWidth < 768) {
				$('.slick-mobile').slick('init');
			}
		})
	})
})