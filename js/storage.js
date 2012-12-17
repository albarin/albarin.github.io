function set_local_storage() {
  if(typeof(Storage) !== 'undefined') {
    var color = $('#color-rgb').val();

    if(color == '') {      
      $('#like-button').addClass('ui-disabled');
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

function save_color(color_key, color_rgb) {    
  localStorage.setItem(color_key, color_rgb);
}