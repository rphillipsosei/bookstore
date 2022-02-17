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

});


// When you are working on your-branch to pull in latest master changes:  1. Git checkout master 2. Git pull origin master 3. Git checkout your-branch 4. Git merge master
