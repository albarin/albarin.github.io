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

  $("#canvas-stream").click(function(e) {
    var canvas = document.getElementById('canvas-stream');
    var ctx = canvas.getContext('2d');
    var canvasOffset = $(this).offset();
    var canvasX = Math.floor(e.pageX - canvasOffset.left);
    var canvasY = Math.floor(e.pageY - canvasOffset.top);
    var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
    var pixel = imageData.data;

    var rgb = rgbToHex(pixel[0], pixel[1], pixel[2]);
    $("#color").css("background-color", rgb);
  });
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

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}