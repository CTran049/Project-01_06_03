$("document").ready(function() {
  var navin = false;
  $("#naviconcontainer").click(function() {
    if(navin) {
      $("#mobnavcontain").css("left", "100%");
      $("#mobilenav div a").css("opacity", "0").css("transition", "1s");
      navin = false;
    } else {
      $("#mobnavcontain").css("display", "block").css("left", "0").css("transition", "left 1s, height 1s");
      $("#mobilenav div a").css("opacity", "1").css("transition", "opacity 3s");
      navin = true;
    }
  });
});
