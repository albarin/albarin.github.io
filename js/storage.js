function set_local_storage() {
  if(typeof(Storage) !== 'undefined') {
    var color = $('#color-rgb').val();

    if(color == '') {      
      $('#like-button').addClass('ui-disabled');
    }

    if(localStorage.length <= 0) {
      $('#list-colors').hide();
    }
  }
  else {
    $('.storage').hide();
    console.debug("localStorage not supported");
  }
}

function print_saved_colors() {
  if(typeof(Storage) !== 'undefined') {
    for (var i=0; i<localStorage.length; i++){
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      $('#saved-colors').append('<li class="' + key + '">' + key + "-->" + value + ' <span class="remove_color">Delete</span></li>');
    } 
  }
}

function load_saved_colors() {
  for (var i=0; i<localStorage.length; i++){
    var color_key = localStorage.key(i);
    var color_rgb = localStorage.getItem(color_key);
    var li = $('<li data-color="' + color_key + '"><a href="#">' + color_key + '</a><a class="remove-color" href="#"></a></li>');    
    $(li).css('background-color', color_rgb);
    $('#list-page ul').append(li);
    $('#list-page ul').listview('refresh');
  }
}

function save_color(color_key, color_rgb) {    
  localStorage.setItem(color_key, color_rgb);
  $('#list-colors').show();
}