$(document).ready(function() {

  /*$('.remove_color').live('click', function() {
    var color_key = $(this).parent().attr('class');    
    localStorage.removeItem(color_key);
    $(this).parent().remove();
  });*/

  show_webcam_stream();

  webcam_stream_to_canvas();

  set_local_storage();

  $('#canvas-stream').click(function(event) {
    var position = get_click_position(this, event);
    var pixel = get_pixel(this, position);
    var rgb = get_pixel_rgb_color(pixel);    
    set_selected_color(rgb);    
  });

  $('#store-form').submit(function(event) {
    event.preventDefault();

    var color_key = $('#color-input').val();
    var color_rgb = $('#color-rgb').html();

    save_color(color_key, color_rgb);
    clear_current_color();

    $('.ui-dialog').dialog('close');

    show_message(color_key + ' is saved!');
  });
});
