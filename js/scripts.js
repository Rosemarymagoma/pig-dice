//business logic
function gameplayer() {
  this.turnScore = 0;
  this.totalScore = 0;
  this.winningScore = 100;
  this.roll = function() {
    return Math.floor(Math.random() * 6) + 1;
  }
}



//UI logic
$(document).ready(function() {
  $("#button").click(function() {
    $(".rule").toggle()
  });
  $("#game-container").hide();

  $("#game-level-button").click(function(event) {
  $("#start-game-button").click(function(event) {
    event.preventDefault();

    firstPlayer = $("#firstPlayerName").val();
    secondPlayer = $("#secondPlayerName").val();
    $("#playerinfo").hide();
    $("#game-container").show();
    $(".rule").hide()


    // display input
    $("#gameStartFirstPlayerName").text(firstPlayer);
    $("#gameStartSecondPlayerName").text(secondPlayer);

    firstPlayerStats = new gameplayer();
    secondPlayerStats = new gameplayer();

  });
});
  //player1roll
  $("#roll-dice-button1").click(function() {
    var rolled = firstPlayerStats.roll();
    firstPlayerStats.turnScore += rolled;
    if (rolled == 1) {
      firstPlayerStats.turnScore = 0;
      $("#stats-turn-score1").text(firstPlayerStats.turnScore);
      $("#firstPlay").hide()
      $("#secondPlay").show()

    }

    $("#stats-turn-score1").text(firstPlayerStats.turnScore);
    $("#stats-first-player-total-score1").text(firstPlayerStats.totalScore);

  });
  $("#hold-button1").click(function() {
    firstPlayerStats.totalScore += firstPlayerStats.turnScore;
    firstPlayerStats.turnScore = 0;
    $("#stats-first-player-total-score").text(firstPlayerStats.totalScore);
    $("#stats-turn-score1").text(firstPlayerStats.turnScore);
    $("#firstPlay").hide()
    $("#secondPlay").show()

  });
  //player2roll
  $("#roll-dice-button2").click(function() {
    var rolled = secondPlayerStats.roll();
    secondPlayerStats.turnScore += rolled;
    if (rolled == 1) {
    secondPlayerStats.turnScore = 0;
      $("#stats-turn-score2").text(secondPlayerStats.turnScore);
      $("#secondPlay").hide()
      $("#firstPlay").show()

    }

    $("#stats-turn-score2").text(secondPlayerStats.turnScore);


  });
  $("#hold-button2").click(function() {
    secondPlayerStats.totalScore +=secondPlayerStats.turnScore;
    secondPlayerStats.turnScore = 0;
    $("#stats-second-player-total-score").text(secondPlayerStats.totalScore);
    $("#stats-turn-score2").text(secondPlayerStats.turnScore);
    $("#secondPlay").hide()
    $("#firstPlay").show()
  });


});
