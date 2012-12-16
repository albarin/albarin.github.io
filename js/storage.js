function set_local_storage() {
  if(typeof(Storage) !== 'undefined') {
    var color = $('#color').val();
    if(color == '') {
      $('#save_button').button('disable');
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
      $('#saved_colors').append('<li>' + key + "-->" + value + '</li>');
    } 
  }
}