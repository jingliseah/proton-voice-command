
/* Media Query */
var xs = window.matchMedia('(max-width: 767.98px)');
var sm = window.matchMedia('(min-width: 576px)');
var md = window.matchMedia('(min-width: 768px)');
var lg = window.matchMedia('(min-width: 992px)');
var xl = window.matchMedia('(min-width: 1200px)');

const btn = document.querySelector('.voice-btn');
const modalBtn = document.querySelector('.main-voice-btn');
const btnText = btn.getElementsByClassName('click-here');
const content = document.querySelector('.content');

const SpeechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
const recognition = new webkitSpeechRecognition();
const speech = new SpeechSynthesisUtterance();
// var voices = window.speechSynthesis.getVoices();

var myLang = SpeechRecognition.lang;
SpeechRecognition.lang = ['en-US', 'ms-MY'];

var recognizing = false;

const greeting = ['How may I help you?']

// if (SpeechRecognition) {
//     // speech recognition API supported
//     alert('working')
// } else {
//     // speech recognition API not supported

//     //redirect to another page
//     // location.href = "index.html";
//     alert('not working')
// }

// when voice got activated this gonna run
recognition.onstart = function () {
    console.log('Speech recognition activated')
    recognizing = true;

    btn.classList.remove('pulse', 'slow')
    btn.classList.add('active', 'heartBeat', 'slower')
    $('.click-here').fadeOut();
    btnText.hidden = true
    // checkRecognision();
}


// when voice got deactivated
recognition.onend = function () {

    recognizing = false;
    console.log('Speech recognition has stopped.');
    btn.classList.remove('active', 'heartBeat', 'slower')
    modalBtn.classList.remove('active', 'heartBeat', 'slower', 'infinite')
    btn.classList.add('pulse', 'slow')
    $('.click-here').fadeIn();
    btnText.hidden = false
};


// when stop talking and matches the string then display result
recognition.onresult = function (event) {
    console.log(event);

    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    // content.textContent = transcript;

    readOutLoud(transcript);
}

btn.addEventListener('click', () => {
    recognition.start();
})

function checkRecognision() {
    if (recognizing) {
        btn.addEventListener('click', () => {
            recognition.abort();
            console.log('abort')
            btn.classList.remove('active', 'heartBeat', 'slower')
            btn.classList.add('pulse', 'slow')
        })
    }
}

var homepagePossibilities = ['go to main page', 'proton home page', 'homepage', 'home page', 'home', 'home beach']
// var hiProtonPossibilities = ['hi proton', 'hey brother', 'hey', 'hi', 'proton', 'hybrid un', 'hai', 'hello', 'yo', 'on', 'don'];
var hiProtonPossibilities = ['hi proton', 'brother', 'proton', 'fun', 'hybrid', 'don', 'bom', 'hi', 'hey', 'hello', 'hype', 'hypertonic', 'shepparton', 'use', 'bon', 'how', 'baton', 'britain', 'dawn', 'sun', 'god', 'gone', 'time'];
var explore70Possibilities = ['x 70', 'explore x 70', 'x70', '70', 'explore the x70', 'top', 'back to top', 'go up', 'proton x70'];
var backPossibilities = ['back', 'previous', 'pack'];

/* Widgets */
var testDrivePossibilities = ['test drive', 'drive', 'book a test drive'];
var calculatorPossibilities = ['loan calculator', 'calculator', 'loan calculate', 'use loan calculator', 'count', 'calculate', 'calculate loan'];
var contactPossibilities = ['contact', 'contact us', 'contact proton'];
var locatorPossibilities = ['locator', 'dealor locator', 'view outlet locator', 'outlet locator', 'outlets', 'dealers', 'shops', 'showroom'];
var bookingPossibilities = ['book an x70', 'booking', 'online booking', 'book now', 'book', 'book x70']

/* Headline */
var headerPossibilities = ['main', 'main page', 'beach', 'peach', 'main beach', 'man Beach', 'go to main page', 'proton home page', 'homepage'];

/* Feature Overview */
var overviewPossibilities = ['overview', 'feature overview'];
var viewDesignPossibilities = ['view design', 'vue design'];
var viewConnectivityPossibilities = ['view connectivity', 'vue connectivity', 'dvd'];
var viewSafetyPossibilities = ['view safety', 'vue safety', 'new safety'];
var viewPerformancePossibilities = ['view performance', 'vue performance'];

/* Feature Details */
var detailsPossibilities = ['details', 'feature details'];
var seeDesignPossibilities = ['design', 'see design', 'c design', 'design features', 'exterior', 'interior', 'features', 'tyre', 'wheel', 'rim', 'headlamps', 'seat', 'seats', 'sunroof', 'roof', 'air purifier', 'wipers', 'define', 'sign'];
var seeConnectivityPossibilities = ['see connectivity', 'c connectivity', 'connectivity features', 'pretty', 'activity', 'technology', 'infotainment system', 'voice command', 'voice', 'remote control', 'music', 'navigation', 'connect', 'speakers'];
var seeSafetyPossibilities = ['safety', 'shifty', 'see safety', 'c safety', 'sea safety', 'safety features', 'air bags', 'brake', 'brakes', 'cruise control', 'camera', 'facts', 'arab'];
var seePerformancePossibilities = ['perform', 'performance', 'see performance', 'c performance', 'performance features', 'transmission', 'handling', 'see engine', 'engine', 'beaut and gin', 'view and gin', 'view Angie', 'jin', 'gin'];

/* 360 */
var threeSixtyPossibilities = ['360', 'interior', 'exterior', 'inside', 'outside', '60', '50', 'view in 360', 'see 360', 'c 360', 'view car', 'angle'];
var coloursPossibilities = ['colour', 'colours', 'c colour', 'view colour', 'see colour'];
var showColorsPossibilities = ['show colours','show colors', 'show color', 'show colour', 'scholl callus', 'shower colours', 'sure colours', 'show', 'show gal'];

/* Variant Comparison */
var variantComparePossibilities = ['variant', 'conversion', 'beer in comparison', 'vivarium', 'view variant', 'comparison', 'variants', 'veyron', 'very incomparision', 'variantcomparison', 'compare', 'type', 'difference', 'William'];

/* Specification Comparison */
var specificationComparePossibilities = ['price', 'view price', 'specification', 'brace', 'specs', 'chit', 'spec sheet', 'sheet', 'shit', 'chip', 'view price and specifications', 'price and specifications', 'price and specs', 'specifications', 'bryce']
var downloadBrochurePossibilities = ['download', 'brochure', 'download brochure', 'view brochure', 'pamphlet', 'catalogue']
var watchVideoPossibilities = ['watch', 'video', 'watch video', 'product video']


function homepageMatch(message) {
    let match = false;

    for (var i = 0; i < homepagePossibilities.length; i++) {
        var keyword = homepagePossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function hiProtonMatch(message) {
    let match = false;

    for (var i = 0; i < hiProtonPossibilities.length; i++) {
        var keyword = hiProtonPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function explore70Match(message) {
    let match = false;

    for (var i = 0; i < explore70Possibilities.length; i++) {
        var keyword = explore70Possibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function backMatch(message) {
    let match = false;

    for (var i = 0; i < backPossibilities.length; i++) {
        var keyword = backPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}


/* Functions: Widgets */
function testDriveMatch(message) {
    let match = false;

    for (var i = 0; i < testDrivePossibilities.length; i++) {
        var keyword = testDrivePossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function calculatorMatch(message) {
    let match = false;

    for (var i = 0; i < calculatorPossibilities.length; i++) {
        var keyword = calculatorPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function contactMatch(message) {
    let match = false;

    for (var i = 0; i < contactPossibilities.length; i++) {
        var keyword = contactPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function locatorMatch(message) {
    let match = false;

    for (var i = 0; i < locatorPossibilities.length; i++) {
        var keyword = locatorPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function bookingMatch(message) {
    let match = false;

    for (var i = 0; i < bookingPossibilities.length; i++) {
        var keyword = bookingPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}


/* Functions: Headline */
function headlineMatch(message) {
    let match = false;

    for (var i = 0; i < headerPossibilities.length; i++) {
        var keyword = headerPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}


/* Functions: Feature Overview */
function featureOverviewMatch(message) {
    let match = false;

    for (var i = 0; i < overviewPossibilities.length; i++) {
        var keyword = overviewPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function viewDesignMatch(message) {
    let match = false;

    for (var i = 0; i < viewDesignPossibilities.length; i++) {
        var keyword = viewDesignPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function viewConnectivityMatch(message) {
    let match = false;

    for (var i = 0; i < viewConnectivityPossibilities.length; i++) {
        var keyword = viewConnectivityPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function viewSafetyMatch(message) {
    let match = false;

    for (var i = 0; i < viewSafetyPossibilities.length; i++) {
        var keyword = viewSafetyPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function viewPerformanceMatch(message) {
    let match = false;

    for (var i = 0; i < viewPerformancePossibilities.length; i++) {
        var keyword = viewPerformancePossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}


/* Functions: Feature Details */
function featureDetailsMatch(message) {
    let match = false;

    for (var i = 0; i < detailsPossibilities.length; i++) {
        var keyword = detailsPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function seeDesignMatch(message) {
    let match = false;

    for (var i = 0; i < seeDesignPossibilities.length; i++) {
        var keyword = seeDesignPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function seeConnectivityMatch(message) {
    let match = false;

    for (var i = 0; i < seeConnectivityPossibilities.length; i++) {
        var keyword = seeConnectivityPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function seeSafetyMatch(message) {
    let match = false;

    for (var i = 0; i < seeSafetyPossibilities.length; i++) {
        var keyword = seeSafetyPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function seePerformanceMatch(message) {
    let match = false;

    for (var i = 0; i < seePerformancePossibilities.length; i++) {
        var keyword = seePerformancePossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}


/* Functions: 360 */
function check360Match(message) {
    let match = false;

    for (var i = 0; i < threeSixtyPossibilities.length; i++) {
        var keyword = threeSixtyPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function checkColours(message) {
    let match = false;

    for (var i = 0; i < coloursPossibilities.length; i++) {
        var keyword = coloursPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function showColours(message) {
	let match = false;

	for (var i = 0; i < showColorsPossibilities.length; i++) {
		var keyword = showColorsPossibilities[i];

		if (message.toLowerCase().includes(keyword)) {
			match = true;
			break;
		}
	}
	return match;
}


/* Functions: Variant Comparison */
function variantMatch(message) {
    let match = false;

    for (var i = 0; i < variantComparePossibilities.length; i++) {
        var keyword = variantComparePossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}



/* Functions: Specification Comparison */
function specificationCompareMatch(message) {
    let match = false;

    for (var i = 0; i < specificationComparePossibilities.length; i++) {
        var keyword = specificationComparePossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function downloadMatch(message) {
    let match = false;

    for (var i = 0; i < downloadBrochurePossibilities.length; i++) {
        var keyword = downloadBrochurePossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}

function watchVideo(message) {
    let match = false;

    for (var i = 0; i < watchVideoPossibilities.length; i++) {
        var keyword = watchVideoPossibilities[i];
        if (message.toLowerCase().includes(keyword)) {
            match = true;
            break;
        }
    }
    return match;
}


/* Close Modal */
function closeModal() {
    $('body').removeClass('modal-open')
    $(".landing-popup").removeClass('show');
    $('.voice-btn').delay(600).fadeIn();
    $('.overlay-loader').addClass('hide');
    $(".landing-popup").fadeOut();
    $('.x70-modal-close').click();
    $('.guide-wrapper').click();
}

function openModal() {
    $('body').addClass('modal-open')
    $(".landing-popup").addClass('show');
    $('.voice-btn').delay(600).fadeOut();
    $('.overlay-loader').removeClass('hide');
    $(".landing-popup").fadeIn();
}


function readOutLoud(message) {
    // const speech = new SpeechSynthesisUtterance();
    // var voices = window.speechSynthesis.getVoices();
    // speech.voice = voices[3];
    const vid = document.getElementById('my-video');
    const brochure = document.getElementById('download-brochure');

    console.log(message);

    // speech.text = "Hello";

    switch (true) {
        case homepageMatch(message):
            window.location.href = "https://www.proton.com/";

            // speech.text += finalText;
            break;

        case hiProtonMatch(message):
            // const finalText = greeting[Math.floor(Math.random() * greeting.length)];
            // speech.text += finalText;
            speech.text = greeting;

            var audio = document.getElementById("hi-proton-audio"); 
            audio.play();
            
            // $('.text-modal-frame-3').fadeOut();
            // $('.text-modal-frame-4').delay(200).fadeIn();
            if(md.matches){
                if($('.text-modal-frame-1').is(":visible") || $('.text-modal-frame-2').is(":visible") ||$('.text-modal-frame-3').is(":visible")){
                    console.log('visible')
                    $('.text-modal-frame-3').fadeOut();
                    $('.text-modal-frame-4').delay(200).fadeIn();                
                } else {
                    $(".landing-popup").hasClass('show') ? closeModal() : '';
                    $('.guide-wrapper').addClass('active');
                    $('.guide-info').fadeIn();
                }  
            } else {
                if($('.text-modal-frame-1').is(":visible") || $('.text-modal-frame-2').is(":visible") ||$('.text-modal-frame-3').is(":visible")){
                    console.log('visible')
                    $('.text-modal-frame-3').fadeOut();
                    $('.text-modal-frame-4').delay(200).fadeIn();                
                } else {
                    console.log('hidden')
                    openModal();
                }                   
            }   

            break;

        case explore70Match(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            window.location.href = "#headlines";
            break;


        /* Case: Widgets */
        case testDriveMatch(message):
            window.location.href = "https://www.proton.com/en/shopping-tools/book-test-drive";
            break;

        case calculatorMatch(message):
            window.location.href = "https://www.proton.com/en/shopping-tools/loan-calculator"
            break;

        case contactMatch(message):
            window.location.href = "https://www.proton.com/en/shopping-tools/contact-us"
            break;

        case locatorMatch(message):
            window.location.href = "https://www.proton.com/en/dealer-locator"
            break;

        case bookingMatch(message):
            window.location.href = "https://www.proton.com/en/find-a-car/protonx70/online-booking"
            break;

        /* Case: Headline */
        case headlineMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            window.location.href = "https://www.proton.com/";
            break;



        /* Case: Feature Overview */
        case watchVideo(message):
        case featureOverviewMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            if (md.matches) {
                window.location.href = "#featureOverview";
            }
            break;

        case viewDesignMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            if (md.matches) {
                window.location.href = "#featureOverview";
                $('.video-slider-wrapper').slick('slickGoTo', 0);
            } else {
                window.location.href = "#refinedDesign"
            }
            break;

        case viewConnectivityMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            if (md.matches) {
                window.location.href = "#featureOverview";
                $('.video-slider-wrapper').slick('slickGoTo', 1);
            } else {
                window.location.href = "#refinedConnectivity"
            }
            break;

        case viewSafetyMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            if (md.matches) {
                window.location.href = "#featureOverview";
                $('.video-slider-wrapper').slick('slickGoTo', 3);
            } else {
                window.location.href = "#reassuredSafety"
            }
            break;

        case viewPerformanceMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            if (md.matches) {
                window.location.href = "#featureOverview";
                $('.video-slider-wrapper').slick('slickGoTo', 2);
            } else {
                window.location.href = "#responsivePerformance"
            }
            break;



        /* Case: Feature Details */
        case featureDetailsMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            if (md.matches) {
                window.location.href = "#featureDetails";
            }
            break;

        case seeDesignMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            if (md.matches) {
                window.location.href = "#featureDetails";
                $('.video-slider-wrapper').slick('slickGoTo', 0);
            } else {
                window.location.href = "#refinedDesign"
            }
            break;

        case seeConnectivityMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            if (md.matches) {
                window.location.href = "#featureDetails";
                $('.video-slider-wrapper').slick('slickGoTo', 1);
            } else {
                window.location.href = "#refinedConnectivity"
            }
            break;

        case seeSafetyMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            if (md.matches) {
                window.location.href = "#featureDetails";
                $('.video-slider-wrapper').slick('slickGoTo', 3);
            } else {
                window.location.href = "#reassuredSafety"
            }
            break;

        case seePerformanceMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            if (md.matches) {
                window.location.href = "#featureDetails";
                $('.video-slider-wrapper').slick('slickGoTo', 2);
            } else {
                window.location.href = "#responsivePerformance"
            }
            break;

            
        /* Case: Variant Comparison */
        case variantMatch(message):
            // console.log('variants comparison')
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            window.location.href = "#variantComparison";
            break;



        /* Case: 360 */
        case checkColours(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            window.location.href = "#360View";
            break;
            
        case check360Match(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            window.location.href = "#360View";
			break;
			
		case showColours(message):
			if ($('.exterior-360-wrapper').hasClass('d-none')) {
				$('.exterior-360-wrapper').removeClass('d-none');
				$('.interior-360-wrapper').addClass('d-none');
				window.location.href = "#360View"
			} else {
				window.location.href = "#360View";
			}
			break;


        /* Case: Specification Comparison */
        case specificationCompareMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            window.location.href = "#priceComparison";
            break;

        case backMatch(message):
            window.history.back();
            break;

        case downloadMatch(message):
            $(".landing-popup").hasClass('show') ? closeModal() : '';
            window.location.href = "#priceComparison"
            brochure.click();
            break;

        default:
            $('.speech-error').fadeIn();
            $('.speech-error').show();

            setTimeout(function () {
                $('.speech-error').fadeOut('slow');
            }, 5000)
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    // window.speechSynthesis.speak(speech);
}