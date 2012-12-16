$(document).ready(function() {  

  show_webcam_stream();  

  webcam_stream_to_canvas();

  $("#canvas-stream").click(function(event) {
    var position = get_click_position(this, event);
    var pixel = get_pixel(this, position);
    var rgb = get_pixel_rgb_color(pixel);    

    $("#color").css("background-color", rgb);
    $("#color").css("color", "white");
    $("#color").css("font-size", "20px");
    $("#color").html(rgb);
  });
});