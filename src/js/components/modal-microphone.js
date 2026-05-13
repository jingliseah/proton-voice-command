$(function () {
    'use strict'

    var frame1 = $('.text-modal-frame-1');
    var frame2 = $('.text-modal-frame-2');
    var frame3 = $('.text-modal-frame-3');
    var frame4 = $('.text-modal-frame-4');
    
    $('.text-modal-frame-2, .text-modal-frame-3, .text-modal-frame-4').hide();

    // loadImageLater();
    
    // function loadImageLater() {

    // }

    $('.main-voice-btn').click(function(){
        $(this).removeClass('bounceIn')
        $(this).addClass('active heartBeat slower infinite')
        $('.voice-btn').click();
    })

    //check microphone status
    navigator.permissions.query(
        { name: 'microphone' }
    ).then(function (permissionStatus) {

        console.log(permissionStatus.state); // granted, denied, prompt

        //if user hasn't activated their mic        
        if (permissionStatus.state == 'prompt') {

            navigator.mediaDevices.getUserMedia({ audio: true })

            //Detect browser prompt to allow/block microphone 
            .then(function (stream) {
                let tracks = stream.getTracks();

                console.log('You let me use your mic!')
                $(frame1).fadeOut('fast');
                $(frame2).delay(200).fadeIn();
                
                setTimeout(() => {
                    $(frame2).fadeOut('fast');
                    $(frame3).delay(200).fadeIn();
                }, 3500)

                tracks.forEach(function(track) {
                    track.stop(); // https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/stop
                });
            })

            .catch(function (err) {
                console.log('No mic for you!')
            });

        }

        //if user has activated their mic        
        else if (permissionStatus.state == 'granted') {
            $(frame4).delay(900).fadeIn();
            $(frame1).fadeOut();

        }
        else {
            console.log('mic disabled')
        }


        //Detect browser prompt to allow/block microphone
        permissionStatus.onchange = function () {
            console.log("Permission changed to " + this.state);
            
            // if (this.state == 'granted') {
            //     setTimeout(() => {
            //         $('.modal-content').find('.copy-2').addClass('d-block').removeClass('d-none');
            //         $('.modal-content').find('.copy-1').removeClass('d-block').addClass('d-none');
            //     }, 800);
            // } else {
            //     console.log('disabled')
            // }
        }

    })
});