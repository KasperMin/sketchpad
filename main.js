
$(document).ready(function() {
var squaresPrSide = 10;
createSketch(squaresPrSide);

  function createColor() {
    var letter = "0123456789abcdef";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letter[Math.floor( Math.random() * 16 )];
    }
    return color;
  };

  function createSketch(squaresPrSide) {

    var colums = squaresPrSide;
    var rows = squaresPrSide - 1;
    var width = parseInt(400/squaresPrSide);
    var height = parseInt(400/squaresPrSide);

    for (var i = 0; i < colums; i++) {
      $("<div></div>").appendTo(".container").addClass("boxColum").width(width).height(height);
      for (var j = 0; j < rows; j++) {
        $("<div></div>").appendTo(".container").addClass("boxRow").width(width).height(height);
      }
    }

    $("div").on("mouseenter", function() {
      $(this).css( "background-color", createColor() );
    });

  }

  $("button.clear").click(function() {
    squaresPrSide = prompt("Enter squares pr. side");
    if (typeof squaresPrSide == "string") {
      squaresPrSide = parseInt(squaresPrSide);
    }

    if ( squaresPrSide !== null && isNaN(squaresPrSide) )  {
      alert("Invalid input! Please enter a number");
    } else if (typeof squaresPrSide == "number") {
      $("div").remove(".boxColum").remove(".boxRow");
      createSketch(squaresPrSide);
    }
  });

});
