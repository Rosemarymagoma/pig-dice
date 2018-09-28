//
var playerOne = "";
var playerTwo = "";

var throwDice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.tempPoints = 0;
  this.totalPoints = 0;
  this.turn = turn;
  this.playerNumber;
}

// checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempPoints = 0;
    alert("Sorry " + this.player + ", you rolled a 1! Your turn is over!")
    // this.changeturn();
  } else {
    this.tempPoints += this.roll;
  }
}

// hold
Player.prototype.hold = function() {
  this.totalPoints += this.trialPoints;
  this.tempPoints = 0;
  // this.changeturn();
  alert(this.playerNumber + ", your turn is over, pass the mouse!");
}

// // changing turn
// Player.prototype.changeturn = function () {
//   if (this.roll ===1) {
//     this.turn = false;
//   } else {
//     this.turn = true;
//   }
// }
// check for 100
Player.prototype.winnerCheck = function() {
  if (this.totalPoints >= 100) {
    alert(this.playerNumber + " You are the winner!");
  }
}

Player.prototype.newGame = function() {
  //debugger;
  this.roll = 0;
  this.tempPoints = 0;
  this.totalPoints = 0;
  this.playerNumber = "";
}

var clearValues = function() {
  $("#firstPlayer").val("");
  $("#secondPlayer").val("");
}

// User Interface
$(document).ready(function() {

  $("button#start").click(function(event) {
    playerOne = new Player(true);
    playerTwo = new Player(false);
    $(".playing").show();
    $(".begin").hide();

    var firstPlayer = $(".firstPlayer").val();
    $("#firstPlayer").text(firstPlayer);

    var secondPlayer = $(".secondPlayer").val();
    $("#secondPlayer").text(secondPlayer);

     PlayerOne.firstPlayer = firstPlayer;
    PlayerTwo.secondPlayer = firstPlayer;

  });
  $("button#new-game").click(function(event) {
    $(".player-console").hide();
    clearValues();
     playerOne.newGame();
     playerTwo.newGame();
    $("#timesTotalOne").empty();
    $("#totalPointsOne").empty();
    $("#dieRollOne").empty();
    $("#timesTotalTwo").empty();
    $("#totalPointsTwo").empty();
    $("#dieRollTwo").empty();

    $(".begin").show();
  });

  $("button#playerOne-roll").click(function(event) {
    playerOne.roll = throwdice();
    $("#firstPlayerRoll").text(firstPlayer.roll);
    playerOne.rollone();
    $("#timesTotalOne").text(firstPlayer.trialPoints);
  });

  $("button#secondPlayer").click(function(event) {
    playerTwo.roll = throwdice();
    $("#secondPlayerRoll").text(secondPlayer.roll);
    playerTwo.rollone();
    $("#timesTotalTwo").text(secondPlayer.trialPoints);
  });

  $("button#firstPlayerHold").click(function(event) {
    playerOne.hold();
    $("#totalPointsOne").text(player1.totalscore);
    $("#timesTotalOne").empty();
    $("#diceRollTwo").empty();
    playerOne.winnerCheck();
  });

  $("button#player2-hold").click(function(event) {
    playerTwo.hold();
    $("#totalPointsOne").text(player2.totalscore);
    $("#timesTotalTwo").empty();
    $("#timesRollTwo").empty();
    playerTwo.winnerCheck();
  });

});
