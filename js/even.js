$(function () {
  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth <= 1200) {
      $("#event_wrap").css({
        background: "url(images/event_bar1.jpg) center center no-repeat",
      });
    } else {
      $("#event_wrap").css({
        background: "url(images/event_bar.jpg) center center no-repeat",
      });
    }
  });
});
