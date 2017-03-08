
function displayTime() {
    var date = moment().format('dddd, MMMM Do, YYYY');
    var time = moment().format('hh:mm:ss A');
    $('#clock').html(time);
    $('#date').html(date);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();

    $("#js-rotating").Morphext({
    animation: "fadeIn", // Overrides default "bounceIn"
    separator: "|", // Overrides default ","
    speed: 6000, // Overrides default 2000
    complete: function () {
        // Overrides default empty function
    }
  });

  // Launch fullscreen for browsers that support it!
launchIntoFullscreen(document.documentElement); // the whole page


});


function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }

  console.log(element);
  
}



