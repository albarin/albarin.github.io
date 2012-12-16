$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    
    var color_key = $('#color_input').val();
    var color_rgb = $('#color').html();
    
    localStorage.setItem(color_key, color_rgb);
    $('#saved_colors').append('<li>' + color_key + "-->" + color_rgb + '</li>');
  });

  print_saved_colors();

  show_webcam_stream();

  webcam_stream_to_canvas();

  set_local_storage();

  $('#canvas-stream').click(function(event) {
    var position = get_click_position(this, event);
    var pixel = get_pixel(this, position);
    var rgb = get_pixel_rgb_color(pixel);

    $('#save_button').button('enable');
    $('#color').css('background-color', rgb);
    $('#color').css('color', 'white');
    $('#color').css('font-size', '20px');
    $('#color').html(rgb);
  });
});
