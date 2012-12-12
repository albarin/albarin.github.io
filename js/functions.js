$(document).ready(function() {  

  // cross browser compatibility
  window.URL = window.URL || window.webkitURL;
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia; 

  if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true}, onSuccess, onError);
  }
  else {
    console.log('Not supported!');
  }
});

function onSuccess(stream) {
  var video = $('#webcam-stream')[0];

  try {
    video.src = window.URL.createObjectURL(stream);
  }
  catch(e) {
    video.mozSrcObject = stream;
    video.play();
  }
}

function onError(error) {
  console.log('Error!', error);
};