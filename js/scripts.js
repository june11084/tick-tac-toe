var playerX = [];
var playerO = [];

var playerTurn = function(block) {
  var turn = playerX.length + playerO.length;
  if (turn % 2 === 0) {
    playerX.push(block);
    markPlayerX(block);
    checkWin(playerX);
  } else if (turn % 2 === 1) {
    playerO.push(block);
    markPlayerO(block);
    checkWin(playerO);
  } else {
    console.log("broken");
  }
}

var victory = function() {

}

var checkWin = function(player) {
  if (player.indexOf("A1") > -1 && player.indexOf("A2") > -1 && player.indexOf("A3") > -1 ) {
    console.log("Win!");
  } else {}
  // if ("A1" in player) {
  //   console.log("Win!");
  // } else {}
  if (player.indexOf("B1") > -1 && player.indexOf("B2") > -1 && player.indexOf("B3") > -1 ) {
    console.log("Win!");
  } else {}
  if (player.indexOf("C1") > -1 && player.indexOf("C2") > -1 && player.indexOf("C3") > -1 ) {
    console.log("Win!");
  } else {}
  if (player.indexOf("A1") > -1 && player.indexOf("B2") > -1 && player.indexOf("C3") > -1 ) {
    console.log("Win!");
  } else {}
  if (player.indexOf("C1") > -1 && player.indexOf("B2") > -1 && player.indexOf("A3") > -1 ) {
    console.log("Win!");
  } else {}
  if (player.indexOf("A1") > -1 && player.indexOf("B1") > -1 && player.indexOf("C1") > -1 ) {
    console.log("Win!");
  } else {}
  if (player.indexOf("A2") > -1 && player.indexOf("B2") > -1 && player.indexOf("C2") > -1 ) {
    console.log("Win!");
  } else {}
  if (player.indexOf("A3") > -1 && player.indexOf("B3") > -1 && player.indexOf("C3") > -1 ) {
    console.log("Win!");
  } else {}
};

var markPlayerX = function(location) {
  $("#" + location).css("background-image", "url('img/imgx.png')");
}
var markPlayerO = function(location) {
  $("#" + location).css("background-image", "url('img/imgo.png')");
}

$(document).ready(function() {

  $("#A1").one("click", function() {
    console.log("A1");
    var block = "A1";
    var image = playerTurn(block);
  });
  $("#A2").one("click", function() {
    console.log("A2");
    var block = "A2";
    var image = playerTurn(block);
  });
  $("#A3").one("click", function() {
    console.log("A3");
    var block = "A3";
    var image = playerTurn(block);
  });
  $("#B1").one("click", function() {
    console.log("B1");
    var block = "B1";
    var image = playerTurn(block);
  });
  $("#B2").one("click", function() {
    console.log("B2");
    var block = "B2";
    var image = playerTurn(block);
  });
  $("#B3").one("click", function() {
    console.log("B3");
    var block = "B3";
    var image = playerTurn(block);
  });
  $("#C1").one("click", function() {
    console.log("C1");
    var block = "C1";
    var image = playerTurn(block);
  });
  $("#C2").one("click", function() {
    console.log("C2");
    var block = "C2";
    var image = playerTurn(block);
  });
  $("#C3").one("click", function() {
    console.log("C3");
    var block = "C3";
    var image = playerTurn(block);
  });
});
