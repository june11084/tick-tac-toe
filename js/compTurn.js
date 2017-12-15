
function row() {
  this.row1 = 3;
  this.row2 = 3;
  this.row3 = 3;
  this.col1 = 3;
  this.col2 = 3;
  this.col3 = 3;
  this.ang1 = 3;
  this.ang2 = 3;
}


var compTurn = function() {

  if (boards.indexOf("B2") > -1) {
    markPlayerO("B2");
    $("#B2").css("background-image", "url('img/imgo.png')");

    console.log(this.row1);
  } else if (boards.indexOf("A1") > -1) {
    markPlayerO("A1");
    $("#A1").css("background-image", "url('img/imgo.png')");
  } else {
    console.log("Elsed");
  }
}
