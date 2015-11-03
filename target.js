$(document).ready(function() {
  var position = $('#target').className;
  $('#target').mouseover(function() {
    switch(position) {
      case 'top-left':
        $('#target').className = "top-right";
        break;
      case 'top-right':
        $('#target').className = "bottom-right";
        break;
      case 'bottom-right':
        $('#target').className = "bottom-left";
        break;
      case 'bottom-left':
        $('#target').className = "top-left";
        break;
    };
  });
});
