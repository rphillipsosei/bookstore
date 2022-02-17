// Client facing scripts here

// document for fixed nav links in _header.ejs
$(document).ready(function() {
  const nav = $("#header-nav-top");
  const navTop = nav.offset().top;

  $(window).on('scroll', function() {

    if (navTop <= $(window).scrollTop()) {
      nav.addClass("fixed-top");
    } else {
      nav.removeClass("fixed-top");
    }

  });

});

