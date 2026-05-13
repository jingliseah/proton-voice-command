// //// Initializing all JS related to the Model Specs Accordion Slider /// //
$(function () {

	var specsLink = $(".specs-collapse-link");
	var specsAccordion = $(".specs-accordion");
	var metaCarId = $('meta[name=carid]').attr("content");
	var regionSelect = $('.specs-slick .region-select');
	var currSlide = 0;


	specsLink.on("click", function (event) {
		$(this).toggleClass("active");
	})


	//Check if Accordion is already open then init the Slider
	specsAccordion.each(function (index, item) {

		if ($(this).hasClass("show")) {
			initSliderDisplay($(this).attr('id'));
		}

	});


	//Price Specs dropdown
	var priceSpecs = $('.specs-slick #priceSpecsRegionSelect');
	var priceSpecsItem = $("#x70-priceSpecsItem");

	if (priceSpecsItem.hasClass("show")) {

	} else {
		if (regionSelect.length) {
			regionSelect.hide();
		}
	}

	if (priceSpecs.length) {

		priceSpecs.each(function (index, item) {

			for (i = 0; i < $(this).length; i++) {
				$.get(ApiUrl + "feature/cars/getcarregions", {}).done(function (data) {

					priceSpecs.html("");

					data.Data.forEach(function (region, index) {

						priceSpecs.each(function (index, ele) {
							var hideRegion = '';

							if (metaCarId == "dbe4378d-26fd-4d61-aaae-c25776ddb1af" && (region.RegionName == "Labuan" || region.RegionName == "Langkawi")) {
								hideRegion = 'display:none';
							}

							var optionHtml = '<option style="' + hideRegion + '" value = "' + region.RegionId + '" > ' + region.RegionName + '</option> ';
							//var optionHtml = '<option value="' + region.RegionId + '">' + region.RegionName + '</option>';
							$(this).append(optionHtml);

						});

					});

					$.get(ApiUrl + "feature/cars/getcarregionvariantpricesbyregionandcar", {
						"carid": metaCarId,
						"regionid": priceSpecs.val(),
					}).done(function (data) {


						data.forEach(function (item, index) {

							var variantWrapperName = item.CarVariant;
							variantWrapperName = variantWrapperName.replace(/\s/g, "");

							var variantWrapper = $("." + variantWrapperName);
							var downloadPriceLinkWrapper = variantWrapper.find(".download-price");



							if (item.SharedPrice) {

								var sharePriceNum = parseFloat(item.SharedPrice);
								variantWrapper.find(".shared-price .price-text").html("<sup>RM</sup> " + sharePriceNum.formatMoney(2, '.', ','));

							} else {

								item.UniqueVariantPrice.forEach(function (uniqueItem, index) {

									var uniquePriceNum = parseFloat(uniqueItem.Price);
									var uniqueWrapperString = ".unique-price .price-text." + uniqueItem.PaintType;
									variantWrapper.find(uniqueWrapperString).html("<sup>RM</sup> " + uniquePriceNum.formatMoney(2, '.', ','));

								});

							}

							downloadPriceLinkWrapper.html(item.DownloadPriceUrl);

						});

					}).fail(function (error) {
						console.log(error);
					}).always(function () {});


				}).fail(function (error) {
					console.log(error);
				}).always(function () {});
			}

		});


		priceSpecs.on("change", function (event) {

			$.get(ApiUrl + "feature/cars/getcarregionvariantpricesbyregionandcar", {
				"carid": metaCarId,
				"regionid": priceSpecs.val(),
			}).done(function (data) {


				data.forEach(function (item, index) {

					var variantWrapperName = item.CarVariant;
					variantWrapperName = variantWrapperName.replace(/\s/g, "");

					var variantWrapper = $("." + variantWrapperName);
					var downloadPriceLinkWrapper = variantWrapper.find(".download-price");


					if (item.SharedPrice) {

						var sharePriceNum = parseFloat(item.SharedPrice);
						variantWrapper.find(".shared-price .price-text").html("<sup>RM</sup> " + sharePriceNum.formatMoney(2, '.', ','));

					} else {

						item.UniqueVariantPrice.forEach(function (uniqueItem, index) {

							var uniquePriceNum = parseFloat(uniqueItem.Price);
							var uniqueWrapperString = ".unique-price .price-text." + uniqueItem.PaintType;
							variantWrapper.find(uniqueWrapperString).html("<sup>RM</sup> " + uniquePriceNum.formatMoney(2, '.', ','));

						});

					}

					downloadPriceLinkWrapper.html(item.DownloadPriceUrl);

				});

			}).fail(function (error) {
				console.log(error);
			}).always(function () {});

		});


	}


	specsAccordion.on('show.bs.collapse', function () {
		var specOverlay = $("#" + $(this).attr('id')).prev();		
		specOverlay.addClass("active").show();
		$(this).hide();

	});

	specsAccordion.on('shown.bs.collapse', function () {

		initSliderDisplay($(this).attr('id'));

		if (regionSelect.length) {
			if ($(this).attr('id') === priceSpecsItem.attr('id')) {
				regionSelect.show();
			}
		}
		//to calculate back height of section when accordion expand
		fullpage_api.reBuild();

		$(this).show();		

	});

	specsAccordion.on('hide.bs.collapse', function () {

		var specOverlay = $("#" + $(this).attr('id')).prev();
		// specOverlay.show();

		$(this).hide();

		var specSlider = $("#" + $(this).attr('id') + " .specs-slider");
		specSlider.slick("unslick");

		if (regionSelect.length) {
			if ($(this).attr('id') === priceSpecsItem.attr('id')) {
				regionSelect.hide();
			}
		}

		$("#" + $(this).attr('id')).parent().prev().find("a span").html("+");
		$("#" + $(this).attr('id')).parent().parent().find(".specs-header a span").html("+");

	});

	specsAccordion.on('hidden.bs.collapse', function () {

		var specOverlay = $("#" + $(this).attr('id')).prev();
		specOverlay.hide();
		fullpage_api.reBuild();

	});


	function initSliderDisplay(sliderID) {

		var specSlider = $("#" + sliderID + " .specs-slider");
		var specOverlay = $("#" + sliderID).prev();

		specSlider.on("init", function (event, slick) {
			setTimeout(function () {
				specSlider.slick('slickGoTo', currSlide);
				specOverlay.hide().removeClass("active");

			}, 100);
		});

		specSlider.on("afterChange", function (event, slick, currentSlide) {

			currSlide = currentSlide;
			// console.log("slick: ", slick);
			// console.log("currentSlide: ", currentSlide);
			// console.log("screen width: ", window.screen.width);
			// console.log('Global Current Slide: ', currSlide);

		});

		specSlider.slick({
			dots: false,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			rows: 0,
			responsive: [{

					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}

				},
				{

					breakpoint: 770,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}

				},
				{
					breakpoint: 567,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		var specsTitleHeight = $("#" + sliderID + " .spec-slide .spec-slide-header").height() + 8.4;
		$("#" + sliderID + " .specs-list").css("margin-top", specsTitleHeight + "px");

		var specMaxHeight = 0;

		$("#" + sliderID + " .specs-slider .spec-slide .spec-desc").each(function (index) {
			if ($(this).outerHeight() > specMaxHeight) {
				specMaxHeight = $(this).outerHeight();
			}
			// console.log(specMaxHeight);
		});

		// $("#" + sliderID + " .specs-slider .spec-slide .spec-desc").css("min-height", specMaxHeight + "px");


		var specsDescHeightArray = [];

		$("#" + sliderID + " .specs-slider .spec-slide:first-child .spec-desc").each(function (index) {
			specsDescHeightArray[index] = $(this).outerHeight();
		});

		$("#" + sliderID + " .side-specs-title .specs-list .specs-title").each(function (index) {
			$(this).css("height", specsDescHeightArray[index] + "px");
		});

		$("#" + sliderID).parent().prev().find("a span").html("-");
		$("#" + sliderID).parent().parent().find(".specs-header a span").html("-");

		//to delay the loading gif and give some time to slick init and slide
		setTimeout(function () {
		    specOverlay.hide().removeClass("active");
		}, 600);

		var initSlider = $('.specs-accordion').find('.slick-initialized');
		// console.log('initial slider', initSlider)

		// On swipe event
		initSlider.on('swipe', function (event, slick, direction) {
			event.preventDefault();
			// console.log(direction);
			if (direction == 'left') {
				initSlider.slick('slickNext');
			} else {
				initSlider.slick('slickPrev');

			}
		});


		$('.slick-next').on('click', function (e) {
			e.preventDefault();
			initSlider.slick('slickNext');
		})

		$('.slick-prev').on('click', function (e) {
			e.preventDefault();
			initSlider.slick('slickPrev');
		})

	}

	detectSelection();

	function detectSelection() {
		$('[data-region]').addClass('d-none');
		$('#x70-priceSpecsItem .spec-slide').addClass('d-flex  justify-content-center');		
		var regionSelect = $('.region-select :selected').text().trim();
		if (regionSelect == regionSelect) {
			if ($('[data-region="' + regionSelect + '"]') != null) {
				if ($('[data-region="' + regionSelect + '"]').hasClass('d-none')) {
					$('[data-region="' + regionSelect + '"]').removeClass('d-none');
				}
			}
		}
	}
	$('.region-select select').on('change', detectSelection);


	//Number to Currency fomatter function
	// Number.prototype.formatMoney = function (c, d, t) {
	//     var n = this,
	//         c = isNaN(c = Math.abs(c)) ? 2 : c,
	//         d = d == undefined ? "." : d,
	//         t = t == undefined ? "," : t,
	//         s = n < 0 ? "-" : "",
	//         i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
	//         j = (j = i.length) > 3 ? j % 3 : 0;
	//     return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	// };

});