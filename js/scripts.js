var boards = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
var playerX = [];
var playerO = [];
var computer = true;


var playerTurn = function(block) {
  var turn = playerX.length + playerO.length;
  if(computer === false) {
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
  } else if (computer === true) {
   if (turn % 2 === 0) {
     playerX.push(block);
     markPlayerX(block);
     boards.splice(boards.indexOf(block), 1);
     checkWin(playerX);
     compTurn();
   } else if (turn % 2 === 1) {
     playerO.push(block);
     markPlayerO(block);
     checkWin(playerO);
     compTurn();
   } else {
     console.log("broken");
   }
  console.log("Computers turn");

  console.log("Spots Left:" + boards);
  }
}

var checkWin = function(player) {

  if (player.join(" ").match(/(?=.*A1)(?=.*A2)(?=.*A3)/)) {
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

var markPlayerX = function(location) {
  $("#" + location).css("background-image", "url('img/imgx.png')");
}
var markPlayerO = function(location) {
  $("#" + location).css("background-image", "url('img/imgo.png')");
}

$(document).ready(function() {

  $("#enableCom").click(function() {
    if (computer === true) {
      $("#compCheck").text("Human");
      computer = false;
    } else if (computer === false) {
      $("#compCheck").text("Computer");
      computer = true;
    } else {
      console.log("Reached else in toggle computer");
    }
  });

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
