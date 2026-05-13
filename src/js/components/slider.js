$(function () {
    'use strict'

    /* Feature Overview Slider */
    var videoSlider = $('.video-slider-wrapper');
    var video = $('.video-feature[id^="video-"]');
    var menu = $('#overview-menu.x70-menu-wrapper');
    var menuItem = $(menu).find('.x70-menu-item');
    var progressBarWrapper = $('.progress');
    var progressBar = $('.progress-bar');

    /* Feature Detail Slider */
    var detailSlider = $('.feature-detail-slider-wrapper');
    var detailMenu = $('#detail-menu.x70-menu-wrapper');
    var detailMenuItem = $(detailMenu).find('.x70-menu-item');

    /* Feature Detail Sub Slider */
    var detailSubSlider = $('.feature-detail-sub-slider-wrapper');
    var refinedDesignSlider = $('.refined-design-slider-wrapper');

    /* Variant Comparison Mobile Slider */
    var variantSlick = $('.variant-slick');

    /* Progress Nav */
    var size, currentTime, updateBar, duration, barSize;
    var progressBarWidth = menu.width() / 4;
    var initialPos = progressBarWidth / 4;

    /* Media Query */
    var xs = window.matchMedia('(max-width: 767.98px)');
    var sm = window.matchMedia('(min-width: 576px)');
    var md = window.matchMedia('(min-width: 768px)');
    var lg = window.matchMedia('(min-width: 992px)');
    var xl = window.matchMedia('(min-width: 1200px)');

    var update = function (slide) {
        duration = $(video).get(slide).duration;
        barSize = 110;
        size = parseInt(currentTime * barSize / duration);

        currentTime = $(video).get(slide).currentTime;
        progressBar.css('width', size + '%');
    }

    if (md.matches) {
        $(videoSlider).on('init', function (event, slick) {

            var _this = this;
            $(detailMenuItem[0]).find('a').css('opacity', '1');
            $(menuItem[0]).find('a').css('opacity', '1');
            $(this).find(video).prop('muted', true);

            if (fullpage_api.getActiveSection().anchor !== 'featureOverview') {
                $(this).find(video).get(0).pause();
            } else {
                $(this).find(video).get(0).load();

                // var playPromise = $(this).find(video).get(0).load();

                // if (playPromise !== undefined) {
                //     playPromise.then(_ => {
                //         // Automatic playback started!
                //         // Show playing UI.
                //         playPromise
                //     })
                //     .catch(error => {
                //         // Auto-play was prevented
                //         // Show paused UI.
                //     });
                // }
            }

            $(progressBarWrapper).css('width', menuItem.width() / 2 + 'px')
            $(progressBarWrapper).css('left', initialPos + 'px')

            updateBar = setInterval(update, 100, 0);


            $(this).find(video).on('ended', function () {
                $(_this).slick('slickNext');
                $(detailSlider).slick('slickNext');
            });

        }).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            autoplay: false,
            dots: false

        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $(this).find(video).get(currentSlide).currentTime = 0;
            $(this).find(video).get(currentSlide).pause();
            $(menuItem[currentSlide]).find('a').css('opacity', '0.75');
            $(detailMenuItem[currentSlide]).find('a').css('opacity', '0.75')

            if (nextSlide != 0) {
                progressBarWrapper.animate({
                    left: progressBarWidth * nextSlide + initialPos
                })
            } else {
                progressBarWrapper.animate({
                    left: initialPos
                })
            }

        }).on('afterChange', function (event, slick, currentSlide) {
            var _this = this;

            $(menuItem[currentSlide]).find('a').css('opacity', '1');
            $(detailMenuItem[currentSlide]).find('a').css('opacity', '1');

            if (fullpage_api.getActiveSection().anchor !== 'featureOverview') {
                $(this).find(video).get(currentSlide).pause();
            } else {
                $(this).find(video).get(currentSlide).play();
            }

            size = 0;
            window.clearInterval(updateBar);

            updateBar = setInterval(update, 100, currentSlide);

            $(this).find(video).each(function () {
                $(this).on('ended', function () {
                    $(_this).slick('slickNext');
                    $(detailSlider).slick('slickNext');
                });
            })

            $(detailSlider).slick('slickGoTo', currentSlide);
        });

        $(detailSlider).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            autoplay: false,
            dots: false,
            nextArrow: '<button class="any-class-name-you-want-next">Next</button>',
            prevArrow: '<button class="any-class-name-you-want-previous">Previous</button>',
            draggable: false,
            swipe: false,
            swipeToSlide: false,
        });

        $(detailSubSlider).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            autoplay: false,
            dots: true
        });

        $(menu).find('a[data-slide]').click(function (e) {
            e.preventDefault();
            var slideno = $(this).data('slide');
            $(videoSlider).slick('slickGoTo', slideno - 1);
            $(detailSlider).slick('slickGoTo', slideno - 1);
        });

        $(detailMenu).find('a[data-slide]').click(function (e) {
            e.preventDefault();
            var slideno = $(this).data('slide');
            $(videoSlider).slick('slickGoTo', slideno - 1);
            $(detailSlider).slick('slickGoTo', slideno - 1);
        });

    } else {
        $(refinedDesignSlider).on('init', function (event, slick) {
            var _this = this;
            $(this).find(video).prop('muted', true);
            $(this).find(video).get(0).play();

            $(progressBarWrapper).css('width', '150px')

        }).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            autoplay: false,
            dots: true,

        }).on('beforeChange', function (event, slick, currentSlide) {
            if (currentSlide == 0) {
                $(this).find(video).get(0).currentTime = 0;
                $(this).find(video).get(0).pause();
            }
        }).on('afterChange', function (event, slick, currentSlide) {
            if (currentSlide == 0) {
                $(this).find(video).get(0).play();
            }
        });

        $(variantSlick).on('init', function (event, slick) {
            $('.slick-prev').hide();

        }).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            autoplay: false,
            dots: false,
            infinite: false
        }).on('afterChange', function (event, slick, currentSlide) {
            if (currentSlide == 0) {
                $('.slick-prev').fadeOut('fast');
            } else {
                $('.slick-prev').fadeIn('fast');
            }

            if ($('.variant-slick').find('.slick-next').hasClass('slick-disabled')) {
                $('.slick-next').fadeOut('fast');
            } else {
                $('.slick-next').fadeIn('fast');
            }
        });
    }
});
