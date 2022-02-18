$(document).ready(function () {

  $("#min-price").on("change", function(event) {

    // event.preventDefault();
  $("#min-price-txt").text("$" + this.value)
    console.log(this.value);

  });

  $("#max-price").on("change", function(event) {

    // event.preventDefault();
    $("#max-price-txt").text("$" + this.value)
    console.log(this.value);

  });

  $("#go").on("click", function (event) {
    event.preventDefault();
    console.log("button clicked")
  })


});
