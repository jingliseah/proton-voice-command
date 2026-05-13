$(function () {

	var carColorSelectButtonActive = $('#360-color-selection li.active');
	var carColorSelectButton = $('#360-color-selection li');
	var carModelContainer = $('.model-360');
	var carModelContainerClass = ".model-360";
	var carColorText = $('.color-raw-name');

	var firstLoad = true;

	$('#sagaWhite-reel img').bind("loaded", function () {

		if (firstLoad) {
			$('#360-color-selection #snow-white').trigger("click");
			firstLoad = false;
		}
	});

	carColorText.html(carColorSelectButtonActive.attr("id").toUpperCase().replace('-', ' '));

	carColorSelectButton.click(function (event) {

		event.preventDefault();

		var selectedColor = $(this).attr('id');
		var activeCarModel = carModelContainerClass + '.' + selectedColor;
		var activeCarModelImg = activeCarModel + " img";

		$('.reel').reel(':teardown');

		carModelContainer.removeClass('active');
		$(activeCarModel).addClass('active');

		$('#360-color-selection').find('.active').removeClass('active');
		$(this).addClass('active');

		$(carColorText).html($('#360-color-selection li.active').attr("id").toUpperCase().replace('-', ' '));

		var newOptions = $(activeCarModelImg).data().options;
		newOptions.images = newOptions.images
			.map(function(img) {
				return img.trim();
			});		

		$(activeCarModelImg).reel($(activeCarModelImg).data().options);
		$(activeCarModelImg).trigger("click");

		$(activeCarModelImg).trigger("pause");
		$(activeCarModelImg).bind('loaded', () => {
			console.log("Loaded!")
			$(activeCarModelImg).trigger("play");
		});

		
	})
});