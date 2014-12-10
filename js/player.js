/**
 * Created by jeen-ubun on 07.12.14.
 */


$(document).ready(function()
{
audio = new Audio('/2.mp3');
    //$(".time").append(audio.audioTracks.length);
    //var g=audio.mediaGroup;
        
    console.log(audio.status);
    //console.log(g);

    $('.play').click(function(){
    if ($(this).hasClass('glyphicon-play'))
    {
        $(this).addClass('glyphicon-pause').removeClass('glyphicon-play');
        audio.play();
    }
    else
    {
        $(this).addClass('glyphicon-play').removeClass('glyphicon-pause');
        audio.pause();
    } 
    });

$('.stop').click(function()
{
    audio.pause();
    $('.play').addClass('glyphicon-play').removeClass('glyphicon-pause');
    audio.currentTime = 0;
});

audio.addEventListener('timeupdate', function()
{
    per = audio.duration / 100;
    cur = audio.currentTime / per;
    
    sdur_min = (audio.currentTime) / 60;
    sdur_min = parseInt(sdur_min);
    sdur_sec = (audio.currentTime - sdur_min  * 60);
    sdur_sec = parseInt(sdur_sec);
    if (sdur_sec < 10)
        sdur_sec = '0' + sdur_sec;
    $('.start-time').html(sdur_min + ':' + sdur_sec);

    dur_min = (audio.duration- audio.currentTime) / 60;
    dur_min = parseInt(dur_min);
    dur_sec = (audio.duration - audio.currentTime - dur_min  * 60);
    dur_sec = parseInt(dur_sec);
    if (dur_sec < 10)
        dur_sec = '0' + dur_sec;
    $('.time').html(dur_min + ':' + dur_sec);
    console.log(audio.preload.auto);
    $('.progress-bar').css('width', cur + '%');
});

//////////

        //mute
/*        
    $('.glyphicon-volume-up').click(function(){
    if ($(this).hasClass('glyphicon-volume-up'))
    {
        //$(this).addClass('glyphicon-pause').removeClass('glyphicon-play');
        audio.muted=true;
        console.log("hello"); }
    else{
        //$(this).addClass('glyphicon-play').removeClass('glyphicon-pause');
        //audio.pause();
        console.log("goodbay");}

});

    $('.glyphicon-volume-down').click(function(){
    if ($(this).hasClass('glyphicon-volume-down'))
    {
        //$(this).addClass('glyphicon-pause').removeClass('glyphicon-play');
        audio.muted=false;
        console.log("hello 22222"); }
    else{
        //$(this).addClass('glyphicon-play').removeClass('glyphicon-pause');
        //audio.pause();
        console.log("goodbay 2222");}

});

*/
///////////////

        //volume
        $('.glyphicon-volume-up').click(function(){
    if ($(this).hasClass('glyphicon-volume-up'))
    {
        var volume = $(".glyphicon-volume-up").prop("volume")+0.2;
        if(volume >1){volume = 1;}
        $(".glyphicon-volume-up").prop("volume",volume);
     }   
    else{
        console.log("увеличить не получилось");
    }
});

$('.glyphicon-volume-down').click(function(){
    if ($(this).hasClass('glyphicon-volume-down')){
        var volume = $(".glyphicon-volume-down").prop("volume")-0.2;
    if(volume <0){
        volume = 0;
    }
    $(".glyphicon-volume-down").prop("volume",volume);
    }
    else{
        console.log("уменьшить не получилось");
    }

});
        


///////////////

});

