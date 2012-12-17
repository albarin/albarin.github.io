function show_webcam_stream() {
  // cross browser compatibility for webcam
  window.URL = window.URL || window.webkitURL;
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia; 

  if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true}, on_success, on_error);
  }
  else {
    console.log('getUserMedia not supported!');
  }    
}

function on_success(stream) {  
  var video = $('#webcam-stream')[0];
  try {
    // video.src = stream;
    video.src = window.URL.createObjectURL(stream);
  }
  catch(e) {
    video.mozSrcObject = stream;
    video.play();
  }
}

function on_error(error) {
  console.log('Error!', error);
};

function webcam_stream_to_canvas() {
  var video = document.getElementById('webcam-stream');
  var canvas = document.getElementById('canvas-stream');
  var context = canvas.getContext('2d');
 
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
 
  video.addEventListener('play', function(){
    draw_to_canvas(this, context, canvas.width, canvas.height);    
  });
}

function get_click_position(canvas, event) {
  var x = event.pageX;
  var y = event.pageY;

  var canvasOffset = $(canvas).offset();
  x = Math.floor(x - canvasOffset.left);
  y = Math.floor(y - canvasOffset.top);

  return { x: x, y: y};
}

function get_pixel(canvas, position) {
  var context = canvas.getContext('2d');
  var imageData = context.getImageData(position.x, position.y, 1, 1);
  var pixel = imageData.data;

  return pixel;
}

function get_pixel_rgb_color(pixel) {
  return Chromath.rgb2hex(pixel[0], pixel[1], pixel[2]);
}

function rgb_to_hex(red, green, blue) {
  var r = ('0' + red.toString(16)).slice(-2);
  var g = ('0' + green.toString(16)).slice(-2);
  var b = ('0' + blue.toString(16)).slice(-2);      

  return '#' + r + g + b;
}

function draw_to_canvas(v, c, w, h) {
  if(v.paused || v.ended) {
    return false;
  }

  try {      
    c.drawImage(v, 0, 0, w, h);
  }
  catch(err){
    console.log("Error!");
  }
 
  setTimeout(draw_to_canvas, 25, v, c, w, h);
}