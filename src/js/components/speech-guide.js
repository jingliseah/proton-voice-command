$(function () {
    $('.voice-btn').hover(function (){
            $('.guide-wrapper').addClass('active')
            $('.guide-info').delay(400).fadeIn();
        },
        function(){
            $('.guide-wrapper').removeClass('active')
            $('.guide-info').fadeOut();
        }
    )
})