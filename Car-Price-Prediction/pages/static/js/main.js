$(document).ready(function () {
  $("label.input-group-text").addClass(
    "rounded-pill justify-content-center fw-bolder"
  );
  $("label.input-group-text").css(
    "background-color",
    "rgba(153, 172, 153, 0.77)"
  );
  $("select").addClass("rounded-pill w-50");
  window.onblur = function () {
    document.title = "YİNE BEKLERİZ :)";
  };
  window.onfocus = function () {
    document.title = "ARABA FİYAT TAHMİNİ";
  };
});
$(window).resize(function () {
  var windowsize = $(window).width();
  if (windowsize < 992) {
    $("section.col-lg-6 > section").removeClass("ps-5 pe-5");
  }
});
var px = 0;
$(window).scroll(function () {
  if ($(window).width() >= 992) {
    if (px + 15 < window.scrollY) {
      $("nav").slideUp("fast");
    } else if (px - 15 > window.scrollY) {
      $("nav").slideDown("slow");
    }
    px = window.scrollY;
  }
});
