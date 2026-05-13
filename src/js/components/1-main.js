/* Media Query */
var xs = window.matchMedia('(max-width: 767.98px)');
var sm = window.matchMedia('(min-width: 576px)');
var md = window.matchMedia('(min-width: 768px)');
var lg = window.matchMedia('(min-width: 992px)');
var xl = window.matchMedia('(min-width: 1200px)');

var loadingScreen = $('.overlay-loader');

$(window).on('load', function() {

    var dynamicScript = '<div class="overlay-enable-scrolling"></div><script src="https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=rsb&c=28&pli=29446163&PluID=0&w=1&h=1&ord=[timestamp]&ucm=true"></script> <noscript> <a href="https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=brd&FlightID=29446163&Page=&PluID=0&Pos=1789094614" target="_blank"> <img src="https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=bsr&FlightID=29446163&Page=&PluID=0&Pos=1789094614(1 kB) https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=bsr&FlightID=29446163&Page=&PluID=0&Pos=1789094614" border=0 width=1 height=1> </a> </noscript>';

    // test dynamic start 
    if (xs.matches) {
        $("#headline #dynamicScript").remove();
        console.log("mobileDetect")
    } else {
        $("#headline-xs #dynamicScript").remove();
        console.log("desktopDetect")
    }
    //test dynamic end


    // var dynamicScript = '<div class="overlay-enable-scrolling"></div><script src="https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=rsb&c=28&pli=29446163&PluID=0&w=1&h=1&ord=[timestamp]&ucm=true"></script> <noscript> <a href="https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=brd&FlightID=29446163&Page=&PluID=0&Pos=1789094614" target="_blank"> <img src="https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=bsr&FlightID=29446163&Page=&PluID=0&Pos=1789094614(1 kB) https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=bsr&FlightID=29446163&Page=&PluID=0&Pos=1789094614" border=0 width=1 height=1> </a> </noscript>';

    // // test dynamic start 
    // if (xs.matches) {
    // 	$("#headline-xs").html(dynamicScript);
    // 	console.log("mobileDetect")
    // } else {
    // 	$("#headline").html(dynamicScript);
    // 	console.log("desktopDetect")
    // }



    $('body').addClass('loaded');

    // Remove white gap on top of the fullpage section
    if (window.location.pathname.indexOf('x70-2020') > -1)
        $('#proton-x70-2020').parent().prev().remove();

    if (!xl.matches && !lg.matches)
        $('.sub-menu-nav-wrapper.sub-nav-fixed-top').html('');

    // Replace default navigation search icon
    $('.nav-search-button').find('img').attr('src', '/assets/x70/2020/img/icons/Search.svg')

    // Replace default navigation Proton Logo
    $('.navbar-brand').find('img').attr('src', '/assets/x70/2020/img/ProtonLogoAnimation.png')

    /* Show loading overlay as window on load */
    setTimeout(function() {
        $('#loader-page').fadeOut('slow');
    }, 1000);

    /* Hide loading overlay when DOM is ready */
    $(document).ready(function() {
        loadingScreen.addClass('hide');
    });

    /* Lazy Load */
    $('.video-feature source').each(function() {
        $(this).attr("src", $(this).attr("data-src"));
        $(this).removeAttr("data-src");
    });

    /* Browser */
    var sBrowser, sUsrAg = navigator.userAgent;
    var isChrome = (typeof window.chrome === "object" && navigator.appVersion.indexOf('Edge') === -1) && (!!window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition || window.SpeechRecognition);
    var isEdgeChromium = navigator.appVersion.indexOf('Edg') > -1;
    var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) {
        return p.toString() === "[object SafariRemoteNotification]";
    })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    // var isChromeMobile = uaParser.getDevice().type.includes("mobile");
    // var isTrident = sUsrAg.indexOf("Trident") > -1;
    // var isSamsungBrowser = sUsrAg.indexOf("SamsungBrowser") > -1;
    // var isFirefox = typeof InstallTrigger !== 'undefined';
    // var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // var isIe = /*@cc_on!@*/ false || !!document.documentMode;


    if (isChrome && !isEdgeChromium) {
        $('.voice-info-alert').addClass('d-none');
        $('.voice-info-alert-xs').addClass('d-none');

        setTimeout(function() {
            $(".landing-popup").delay(900).fadeIn();
        }, 1000);
    } else if (isEdgeChromium) {
        $('.guide-wrapper-xs').addClass('d-none');
        $('.landing-popup').hide();
        $('.voice-btn').addClass('d-none');
        $('.voice-info-alert').addClass('animated slideInRight d-none d-md-block slow');
        $('.voice-info-alert-xs').addClass('d-md-none');
        setTimeout(function() {
            $('.landing-popup').find('.x70-modal-close').click();
        }, 1000);
    } else {
        $('.guide-wrapper-xs').addClass('d-none');
        $('.landing-popup').hide();
        $('.voice-btn').addClass('d-none');
        $('.voice-info-alert').addClass('animated slideInRight d-none d-md-block slow');
        $('.voice-info-alert-xs').addClass('d-md-none');
        // $('.voice-info-alert').addClass('slideOutRight').removeClass('slideInRight slower');
        setTimeout(function() {
            $('.landing-popup').find('.x70-modal-close').click();
        }, 1000);
    }
});

$(function() {
    //js start
    (function() {
        "use strict";

        lazyload();

        var navHeight = $('.navbar').outerHeight();
        var btnSwitch = $('.switch');

        if (xs.matches) {
            $('.sub-menu-nav-wrapper.sub-nav-fixed-top + section').css('margin-top', '0');
            // $('.voice-info-alert-wrapper').css('bottom', navHeight);

            if (window.location.pathname == "/en/find-a-car/x70-2020") {
                // Remove proton site existing sub nav
                $('.sub-menu-nav-wrapper').addClass('d-none')
            }
        }


        btnSwitch.on('click', function() {
            if (isSafari) {
                window.location.href = "https://apps.apple.com/us/app/google-chrome/id535886823";
            } else {
                window.location.href = "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.myapp";
            }
        })


        //onclick on banner 
        $('.overlay-enable-scrolling').click(function() {
            if (ebO.adConfig.interactions.ebDefaultClick.jumpUrl != "") {
                window.location.href = 'https://' + ebO.adConfig.interactions.ebDefaultClick.jumpUrl;
            }
        })

        if (!$("iframe[id*='ebBanner']").is(":visible")) {
            $('.overlay-enable-scrolling').hide();
        } else {
            $('.overlay-enable-scrolling').show()
        }

        //Close guide wrapper 
        $('.guide-wrapper').click(function() {
            $(this).removeClass('active')
        })

        //Mobile Navigation
        var mobileNavDisplay = $('.mobile-nav-display');
        var mobileNav = $('.mobile-nav');
        var mobileNavItem = $('.mobile-nav-item');
        var mobileSubNavItem = $('.mobile-sub-nav-item');
        var mobileNavOverlay = $('.mobile-nav-overlay')
        $(mobileNav).hide();

        $(mobileNavDisplay).click(function(event) {
            $(mobileNav).fadeIn();
            $(mobileNavOverlay).fadeIn();
            $('.expand-icon').addClass('active');
        })

        $("body").mouseover(function(e) {
            if ($(e.target).is(mobileNavOverlay)) {
                $(mobileNav).fadeOut();
                $(mobileNavOverlay).fadeOut();
                $('.expand-icon').removeClass('active');
            }
        });

        $(mobileNavItem).find('.mobile-nav-link, .mobile-sub-nav-link').click(function(e) {
            // event.preventDefault();
            var text = $(this).text();
            $(mobileNavDisplay).find('.mobile-selected-nav-item').text(text);
            $(mobileNav).fadeOut();
            $(mobileNavOverlay).fadeOut();
            $('.expand-icon').removeClass('active');
        })

        $('.voice-info-alert #btn-x70-modal-close').click(function() {
            $('.voice-info-alert').removeClass('slideInRight').addClass('slideOutRight')
        })

        // 360 Rotate Detection and Show Popup 
        // $('#sagaWhite-reel').on('frameChange', function () {
        //     $('#popup1').removeClass('show-popup').addClass('hide-popup')

        //     var currentClasses = $(this).attr('class').split(' ')

        //     if (currentClasses.length != 1) {
        //         var currFrame;
        //         for (var i = 0; i < currentClasses.length; i++) {
        //             if (currentClasses[i].includes('frame')) {
        //                 currFrame = currentClasses[i];
        //             }
        //         }
        //         console.log(currFrame)
        //         if (currFrame == ('frame-7') || currFrame == ('frame-8')) {
        //             $('#popup1').addClass('show-popup').removeClass('hide-popup');
        //         }
        //     }

        // })

    })();
    //js end

    function lazyload() {
        var lazyloadVideos;
        var lazyloadImages;

        if ("IntersectionObserver" in window) {
            // lazyloadVideos = document.querySelectorAll('video.video-feature');

            // IntersectionObserver.rootMargin = '-50%';

            // var videoObserver = new IntersectionObserver(function (videos, observer) {
            // 	console.log(observer);

            // 	videos.forEach(function (video) {
            // 		if (videos.isIntersecting) {
            // 			for (var source in video.target.children) {
            // 				var videoSource = video.target.children[source];
            // 				if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
            // 					videoSource.src = videoSource.dataset.src;

            // 				}
            // 			}
            // 			video.target.load();
            // 			videoObserver.unobserve(video.target);

            // 		}
            // 	});

            // });

            // lazyloadVideos.forEach(function (video) {
            // 	videoObserver.observe(video);
            // });

            lazyloadImages = document.querySelectorAll('img.variant-img-container');
            var imageObserver = new IntersectionObserver(function(images, observer) {
                images.forEach(function(image) {
                    if (image.isIntersecting) {
                        var imageSource = image.target;
                        imageSource.src = imageSource.dataset.src;
                        imageObserver.unobserve(imageSource);
                    }

                    lazyloadImages.forEach(function(imageSource) {
                        imageObserver.observe(imageSource);
                    })
                });
            });
        }
    }
});