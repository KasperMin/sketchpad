
$(document).ready(function() {
var squaresPrSide = 10;
var newSketchOn = false;
createSketch(squaresPrSide);

  function createSketch(squaresPrSide) {

    var colums = squaresPrSide;
    var rows = squaresPrSide - 1;
    var width = parseInt(400/squaresPrSide);
    var height = parseInt(400/squaresPrSide);
    console.log(width);

    for (var i = 0; i < colums; i++) {
      $("<div></div>").appendTo(".container").addClass("boxColum").width(width).height(height);
      for (var j = 0; j < rows; j++) {
        $("<div></div>").appendTo(".container").addClass("boxRow").width(width).height(height);
      }
    }
    $("div").show();
  }

  $("button.clear").click(function() {
    $("div").hide();
    squaresPrSide = prompt("Enter squares pr. side");
    squaresPrSide = parseInt(squaresPrSide);
    if (isNaN(squaresPrSide)) {
      squaresPrSide = prompt("Invalid input! Please enter a number"); // don't show if cancel
    }
    createSketch(squaresPrSide);
  });





  function createColor() {
    var letter = "0123456789abcdef";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letter[Math.floor( Math.random() * 16 )];
    }
    return color;
  };

  $("div").on("mouseenter", function() {
    $(this).css( "background-color", createColor() );
  });

});


/*

*/
