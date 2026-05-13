$(function () {
    /* Media Query */
    var xs = window.matchMedia('(max-width: 767.98px)');
    var sm = window.matchMedia('(min-width: 576px)');
    var md = window.matchMedia('(min-width: 768px)');
    var lg = window.matchMedia('(min-width: 992px)');
    var xl = window.matchMedia('(min-width: 1200px)');

    /* Init ScrollMagic */
    var controller = new ScrollMagic.Controller();
    var loadingScreen = $('.overlay-loader');

    /* Timelines */
    var widgetTimeline = new TimelineMax();
    var headlineTimeline = new TimelineMax();
    var overviewTimeline = new TimelineMax();
    var detailsTimeline = new TimelineMax();
    var specificTimeline = new TimelineMax();
    var priceTimeline = new TimelineMax();

    /* Widget Vars */
    var x70WidgetWrapper = $('#proton-x70-2020').find('.all-widgets-wrapper');
    var x70Widget = $(x70WidgetWrapper).find('.widget');

    /* Headline Vars */
    var navigation = $('#menu');
    var headline = $('#proton-x70-2020').find('#headline');
    var innerText = $(headline).find('.text-inner');
    var headlineBtn = $(headline).find('.cust-button');
    var imgContainer = $('#headline img');
    var voiceBtn = $('.voice-btn');

    /* Overview Vars */
    var featureOverview = $('#proton-x70-2020').find('#feature-overview');
    var overviewNav = $(featureOverview).find('#overview-menu');
    var overviewNavItem = $(overviewNav).find('.x70-menu-item');
    var overviewProgressBar = $(overviewNav).find('.progress');
    var overviewInnerText = $(featureOverview).find('.text-inner');

    /* Details Vars */
    var featureDetails = $('#proton-x70-2020').find('#feature-details');
    var detailsNav = $(featureDetails).find('#detail-menu');
    var detailsNavItem = $(detailsNav).find('.x70-menu-item');
    var detailsProgressBar = $(detailsNav).find('.progress');
    var detailsInnerText = $(featureDetails).find('.text-inner');

    /* Variant Vars*/
    var variantComparison = $('#variant-comparison');
    var variantComparisionInfo = $(variantComparison).find('.text-info');
    var variantComparisionInnerText = $(variantComparison).find('.text-inner');

    /* Price Vars*/
    var priceComparison = $('#price-comparison');
    var priceComparisonInnerText = $(priceComparison).find('.text-inner');

    var animationSpeed = 0.75;
    var animationTimingIn = Expo.easeIn;
    var animationTimingOut = Expo.easeOut;

    var modalPopUp = $('#x70popup');

    if (md.matches) {
        /* Close Modal */
        $(".landing-popup").find('.x70-modal-close').on('click', function () {
            $('body').removeClass('modal-open')
            $(".landing-popup").removeClass('show').delay(1000).hide();
            $('.voice-btn').delay(600).fadeIn();
            loadingScreen.addClass('hide');

            /* Animations: Headline */
            headlineTimeline.fromTo(
                navigation,
                animationSpeed,
                { y: "-100%", opacity: 0, ease: animationTimingIn },
                { y: "0%", opacity: 1, ease: animationTimingOut },
                "-=0.25"
            ).staggerFromTo(
                innerText,
                animationSpeed,
                { y: "120%", opacity: 0, ease: animationTimingIn },
                { y: "0%", opacity: 1, ease: animationTimingOut },
                0.15
            ).staggerFromTo(
                x70Widget,
                animationSpeed,
                { x: "150px", opacity: 0 },
                { x: "-70px", opacity: 1 },
                0.05
            )
            headlineTimeline.play();
        })

        // new ScrollMagic.Scene({
        //     triggerElement: "#headline",
        //     triggerHook: 0,
        //     reverse: true
        // })
        //     .setTween(headlineTimeline)
        //     .addIndicators()
        //     .addTo(controller);

        /* Animations: Feature Overview */
        overviewTimeline
        .from(
            overviewNav,
            0.2,
            { opacity: 0 },
            { opacity: 1 }
        ).staggerFromTo(
            overviewNavItem,
            animationSpeed,
            { y: "120%", opacity: 0, ease: animationTimingIn },
            { y: "0%", opacity: 1, ease: animationTimingOut },
            0.1
        ).from(
            overviewProgressBar,
            0.2,
            { opacity: 0 },
            { opacity: 1 }
        ).staggerFromTo(
            overviewInnerText,
            animationSpeed,
            { y: "120%", opacity: 0, ease: animationTimingIn },
            { y: "0%", opacity: 1, ease: animationTimingOut },
            0.1
        )

        new ScrollMagic.Scene({
            triggerElement: "#feature-overview",
            triggerHook: 0.5
        })
            .setTween(overviewTimeline)
            // .addIndicators()
            .addTo(controller);


        /* Animations: Feature Detail */
        detailsTimeline.staggerFromTo(
            detailsNavItem,
            animationSpeed,
            { y: "120%", opacity: 0, ease: animationTimingIn },
            { y: "0%", opacity: 1, ease: animationTimingOut },
            0.03
        ).fromTo(
            detailsProgressBar,
            0.1,
            { opacity: 0 , ease: animationTimingIn},
            { opacity: 1 , ease: animationTimingOut}
        ).staggerFromTo(
            detailsInnerText,
            animationSpeed,
            { x: "-50%", opacity: 0, ease: animationTimingIn },
            { x: "0%", opacity: 1, ease: animationTimingOut },
            0.1
        )

        new ScrollMagic.Scene({
            triggerElement: "#feature-details",
            // triggerHook: 0.5
        })
            .setTween(detailsTimeline)
            // .addIndicators()
            .addTo(controller);


        /* Animations: Variant Comparison */
        // specificTimeline.fromTo(
        //     variantComparisionInfo,
        //     animationSpeed,
        //     { y: 200, opacity: 0, ease: animationTimingIn },
        //     { y: 0, opacity: 1, ease: animationTimingOut },
        //     0.01
        // )
        specificTimeline.staggerFromTo(
            variantComparisionInnerText,
            animationSpeed,
            { y: 50, opacity: 0, ease: animationTimingIn },
            { y: 0, opacity: 1, ease: animationTimingOut },
            0.05
        );

        new ScrollMagic.Scene({
            triggerElement: "#variant-comparison",
            triggerHook: 0.5
        })
            .setTween(specificTimeline)
            // .addIndicators()
            .addTo(controller);

        /* Animations: Price Comparison */
        priceTimeline.staggerFromTo(
            priceComparisonInnerText,
            animationSpeed,
            { y: 50, opacity: 0, ease: animationTimingIn },
            { y: 0, opacity: 1, ease: animationTimingOut },
            0.05
        );

        // Build a Scene
        new ScrollMagic.Scene({
            triggerElement: "#price-comparison",
            triggerHook: 0.5
        })
            .setTween(priceTimeline)
            // .addIndicators()
            .addTo(controller);
    } else {
        $(".landing-popup").find('.x70-modal-close').on('click', function () {
            $('body').removeClass('modal-open')
            $(".landing-popup").removeClass('show').delay(1000).hide();
            $('.voice-btn').delay(600).fadeIn();
            loadingScreen.addClass('hide');

            /* Animations: Headline */
            headlineTimeline.staggerFromTo(
                innerText,
                animationSpeed,
                { y: "120%", opacity: 0, ease: animationTimingIn },
                { y: "0%", opacity: 1, ease: animationTimingOut },
                0.15
            )
            headlineTimeline.play();
        })

        $('.x70-info-alert-close').on('click', function () {
            $('.voice-info-alert-wrapper').addClass('slideOutDown animated');
            $('.voice-info-alert-xs').fadeOut();
            $('.voice-btn').delay(600).fadeIn();
            loadingScreen.addClass('hide');
        })
    }
})