var playerX = [];
var playerO = [];

var playerTurn = function(block){
  var turn = playerX.length + playerO.length;
  if (turn % 2 === 0) {
    playerX.push(block);
    checkWin(playerX);
    return "url('img/imgx.png')";
  } else if (turn % 2 === 1) {
    playerO.push(block);
    checkWin(playerO);
    return "url('img/imgo.png')";
  } else {
    console.log("broken");
  }
}

var checkWin = function(player) {
  if (player.indexOf("A1") > -1 && player.indexOf("A2") > -1 && player.indexOf("A3") > -1 ) {
    console.log("Win!");
  } else {}
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

$(document).ready(function() {
  $("#a1").one("click", function() {
    console.log("A1");
    var block = "A1";
    var image = playerTurn(block);
    $("#a1").css("background-image", image);
  });
  $("#a2").one("click", function() {
    console.log("A2");
    var block = "A2";
    var image = playerTurn(block);
    $("#a2").css("background-image", image);
  });
  $("#a3").one("click", function() {
    console.log("A3");
    var block = "A3";
    var image = playerTurn(block);
    $("#a3").css("background-image", image);
  });
  $("#b1").one("click", function() {
    console.log("B1");
    var block = "B1";
    var image = playerTurn(block);
    $("#b1").css("background-image", image);
  });
  $("#b2").one("click", function() {
    console.log("B2");
    var block = "B2";
    var image = playerTurn(block);
    $("#b2").css("background-image", image);
  });
  $("#b3").one("click", function() {
    console.log("B3");
    var block = "B3";
    var image = playerTurn(block);
    $("#b3").css("background-image", image);
  });
  $("#c1").one("click", function() {
    console.log("C1");
    var block = "C1";
    var image = playerTurn(block);
    $("#c1").css("background-image", image);
  });
  $("#c2").one("click", function() {
    console.log("C2");
    var block = "C2";
    var image = playerTurn(block);
    $("#c2").css("background-image", image);
  });
  $("#c3").one("click", function() {
    console.log("C3");
    var block = "C3";
    var image = playerTurn(block);
    $("#c3").css("background-image", image);
  });
});
