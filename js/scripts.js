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

    first-player-stats = new gameplayer();
    second-player-stats = new gameplayer();

  });
  //player1roll
  $("#roll-dice-button1").click(function() {
    var rolled = first-player-stats.roll();
    first-player-stats.turnScore += rolled;
    if (rolled == 1) {
      first-player-stats.turnScore = 0;
      $("#stats-turn-score1").text(first-player-stats.turnScore);
      $("#firstPlay").hide()
      $("#play").show()

    }

    $("#stats-turn-score1").text(first-player-stats.turnScore);
    $("#stats-first-player-total-score1").text(second-player-stats.totalScore);

  });
  $("#hold-button1").click(function() {
    first-player-stats.totalScore += first-player-stats.turnScore;
    first-player-stats.turnScore = 0;
    $("#stats-first-player-total-score").text(first-player-stats.totalScore);
    $("#stats-turn-score1").text(first-player-stats.turnScore);
    $("#firstPlay").hide()
    $("#secondPlay").show()

  });
  //player2 roll
  $("#roll-dice-button2").click(function() {
    var rolled = second-player-stats.roll();
    second-player-stats.turnScore += rolled;
    if (rolled == 1) {
      second-player-stats.turnScore = 0;
      $("#stats-turn-score2").text(second-player-stats.turnScore);
      $("#secondPlay").hide()
      $("#firstPlay").show()

    }

    $("#stats-turn-score2").text(second-player-stats.turnScore);

  });
  $("#hold-button2").click(function() {
    second-player-stats.totalScore += second-player-stats.turnScore;
    player-stats.turnScore = 0;
    $("#stats-first-player-total-score").text(second-player-stats.totalScore);
    $("#stats-turn-score2").text(second-player-stats.turnScore);
    $("#firstPlay").hide()
    $("#secondPlay").show()
  });


});
