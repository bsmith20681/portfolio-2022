$(document).ready(function () {
  $("#getYear").html(new Date().getFullYear());

  const mobileHamburger = $("#mobile-hamburger");
  const dropDown = $("#mobile-drop-down");

  mobileHamburger.on("click", function () {
    if (mobileHamburger.attr("src") == "./images/bars.svg") {
      mobileHamburger.attr("src", "./images/close.svg");
      dropDown.slideDown("fast");
    } else {
      mobileHamburger.attr("src", "./images/bars.svg");
      dropDown.slideUp("fast");
    }
  });
});
