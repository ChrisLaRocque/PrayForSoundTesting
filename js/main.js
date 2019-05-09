import {Howl, Howler} from 'howler';

/* Updates Featured Video */
$('.video-cover').click(function(){
    var id =  $(this).attr('id');
    var title = $(this).find('h4').text()
    console.log(title);

    $('.featured-video').show();    
    $('.featured-video').html('<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + id + '?rel=0&autoplay=1"></iframe></div><div class="row"><h2 class="p-2 light header title">' + title + '</h2></div>');
}); 

/* Countdown Timer */
// Set the date we're counting down to
var countDownDate = new Date("Nov 11, 2019 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

/* Howler Test */
var sound = new Howl({
    src: ['./20180618_Shila.mp3']
  });
  
  sound.play();