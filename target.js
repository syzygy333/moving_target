$(document).ready(function() {
  $('#target').hover(function() {
    if($(this).hasClass("top-left")) {
      $(this).removeClass();
      $(this).addClass("top-right");
    } else if($(this).hasClass("top-right")) {
      $(this).removeClass();
      $(this).addClass("bottom-right");
    } else if($(this).hasClass("bottom-right")) {
      $(this).removeClass();
      $(this).addClass("bottom-left");
    } else {
      $(this).removeClass();
      $(this).addClass("top-left");
    };
  });
});
