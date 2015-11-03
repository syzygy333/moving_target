$(document).ready(function() {
  var position = $('#target').attr('class');
  $('#target').hover(function() {
    $(this).removeClass();
    if(position === "top-left") {
      $(this).addClass("top-right");
    } else if(position === "top-right") {
      $(this).addClass("bottom-right");
    } else if(position === "bottom-right") {
      $(this).addClass("bottom-left");
    } else {
      $(this).addClass("top-left");
    };
  });
});
