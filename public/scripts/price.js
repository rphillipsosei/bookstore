$(document).ready(function () {

  let min_price = 0;
  let max_price = 100;

  // The default max price should be equal to or higher than the highest-priced item.
  // Next is to catch and make changes when the range sliders are moved/interacted with.

  // Get the value as an integer, apply it to a span text as a visual guide and then use the new min or max value with the item filter.
  $("#min-price").on("change", function (event) {

    event.preventDefault();

    min_price = parseInt($('#min-price').val());//Get the value
    $('#min-price-txt').text('$' + min_price);//Set the value


  });

  $("#max-price").on("change", function (event) {

    event.preventDefault();
    max_price = parseInt($('#max-price').val());//Get the value
    $('#max-price-txt').text('$' + max_price);//Set the value

  });

});
