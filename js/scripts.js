//
var firstPlayer = "";
var secondPlayer ="";

var throwDice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.trialPoints = 0;
  this.totalPoints = 0;
  this.turn = turn;
  this.player;
}

// checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.trialPoints = 0;
    alert("Sorry " + this.player + ", you rolled a 1! Your turn is over!")
    // this.changeturn();
  } else {
    this.trialPoints += this.roll;
  }
}

// hold
Player.prototype.hold = function() {
  this.totalPoints += this.trialPoints;
  this.trialPoints = 0;
  // this.changeturn();
  alert(this.player + ", your turn is over, pass the mouse!");
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
  if (this.trialPoints >= 100) {
    alert(this.player + " You are the winner!");
  }
}

Player.prototype.newGame = function() {
  //debugger;
  this.roll = 0;
  this.trialPoints = 0;
  this.totalPoints = 0;
  this.player = "";
}

var clearValues = function() {
  $(".firstPlayer").val("");
  $(".secondPlayer").val("");
}

// User Interface
$(document).ready(function() {

  $("button#start").click(function(event) {
    First Player = new Player(true);
    Second Player = new Player(false);
    $(".playing").show();
    $(".begin").hide();

    var firstPlayer = $(".firstPlayer").val();
    $("#firstPlayer").text(firstPlayer);

    var secondPlayer = $(".secondPlayer").val();
    $("#secondPlayer").text(secondPlayer);

    First Player.firstPlayer = firstPlayer;
    Second Player.secondPlayer = firstPlayer;

  });
  $("button#new-game").click(function(event) {
    $(".player-console").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".start-menu").show();
  });

  $("button#player1-roll").click(function(event) {
    player1.roll = throwdice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.tempscore);
  });

  $("button#player2-roll").click(function(event) {
    player2.roll = throwdice();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.tempscore);
  });

  $("button#player1-hold").click(function(event) {
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event) {
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });

});
