$(function () {
    'use strict'

    /* Media Query */
    var xs = window.matchMedia('(max-width: 767.98px)');
    var sm = window.matchMedia('(min-width: 576px)');
    var md = window.matchMedia('(min-width: 768px)');
    var lg = window.matchMedia('(min-width: 992px)');
    var xl = window.matchMedia('(min-width: 1200px)');

    var desktopAnchor = ['headlines', 'featureOverview', 'featureDetails', '360View', 'variantComparison', 'priceComparison'];
    var mobileAnchor = ['headlines', 'refinedDesign', 'refinedConnectivity', 'responsivePerformance', 'reassuredSafety', '360View', 'variantComparison', 'priceComparison'];
    var desktopColor = ['black', 'black', 'black', 'black', 'black', 'black'];
    var mobileColor = ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'];

    var fpScreenView = sm.matches ? '#fullpage-desktop' : '#fullpage-mobile';
    var fpAnchor = sm.matches ? desktopAnchor : mobileAnchor;
    var fpSectionColor = sm.matches ? desktopColor : mobileColor;

    md.matches ? $('#price-comparison-xs').remove() : $('#price-comparison').remove();
    md.matches ? $('#360-view-xs').remove() : $('#360-view').remove();

    var myFullpage = new fullpage(fpScreenView, {
        licenseKey: '2BDCBFE0-3C4149B9-A03B1E45-384DE9FD',

        //Navigation
        lockAnchors: false,
        anchors: fpAnchor,
        navigation: false,
        navigationPosition: 'top',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: true,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        scrollOverflow: true,
        scrollOverflowReset: true,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        bigSectionsDestination: null,
        normalScrollElements: '.modal-open .modal',

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: false,
        sectionsColor: fpSectionColor,
        // paddingTop: '66px',
        // heightAdjust: 66,
        // paddingBottom: '66px',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: true,
        parallax: true,
        parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },
        cards: false,
        cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function (origin, destination, direction) {
            if (md.matches) {
                if (destination.anchor == 'featureOverview') {
                    $('#feature-overview').find('.slick-current').find('.video-feature').get(0).load();
                } else {
                    $('#feature-overview').find('.slick-current').find('.video-feature').get(0).pause();
                }

                $('.menu-item a').removeClass('active');
                $('.sub-menu-items').find("a[href*='" + destination.anchor + "']").addClass('active');

            } else {
                $('.all-widgets-wrapper').removeClass('d-none slideOutDown').addClass('d-flex slideInUp');
                var mobileNav = $('#proton-x70-2020').find('.mobile-selected-nav-item');

                switch (destination.anchor) {
                    case 'headlines':
                        $(mobileNav).text('Features');
                        break;

                    case 'refinedDesign':
                        $(mobileNav).text('REFINED DESIGN');
                        break;

                    case 'refinedConnectivity':
                        $(mobileNav).text('REDEFINED CONNECTIVITY');
                        break;

                    case 'reassuredSafety':
                        $(mobileNav).text('REASSURED SAFETY');
                        break;

                    case 'responsivePerformance':
                        $(mobileNav).text('RESPONSIVE PERFORMANCE');
                        break;

                    case '360View':
                        $(mobileNav).text('360°');
                        break;

                    case 'variantComparison':
                        $(mobileNav).text('VARIANT COMPARISON');
                        break;

                    case 'priceComparison':
                        $(mobileNav).text('PRICE AND SPECIFICATIONS');
                        break;
                }
            }

            $('.mobile-nav').fadeOut();
            $('.mobile-nav-overlay').fadeOut();
            $('.expand-icon').removeClass('active');
        },
        afterLoad: function (origin, destination, direction) {
            setTimeout(function () {
                !md.matches ? $('.all-widgets-wrapper').removeClass('slideInUp').addClass('slideOutDown') : ''
            }, 4000)
        },
        afterRender: function () {
            $('.exterior-360-wrapper').removeClass('d-none');
            $('.interior-360-wrapper').addClass('d-none');
        },
        // afterResize: function (width, height) { },
        // afterReBuild: function () { },
        // afterResponsive: function (isResponsive) { },
        // afterSlideLoad: function (section, origin, destination, direction) { },
        // onSlideLeave: function (section, origin, destination, direction) {}
    });

});
