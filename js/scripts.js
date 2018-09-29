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
    second-playerStats = new gameplayer();

  });
  //player1roll
  $("#roll-dice-button1").click(function() {
    var rolled = first-playerStats.roll();
    first-playerStats.turnScore += rolled;
    if (rolled == 1) {
      first-playerStats.turnScore = 0;
      $("#stats-turn-score1").text(first-playerStats.turnScore);
      $("#firstPlay").hide()
      $("#play").show()

    }

    $("#stats-turn-score1").text(first-playerStats.turnScore);
    $("#stats-first-player-total-score1").text(second-playerStats.totalScore);

  });
  $("#hold-button1").click(function() {
    first-playerStats.totalScore += first-playerStats.turnScore;
    first-playerStats.turnScore = 0;
    $("#stats-first-player-total-score").text(first-playerStats.totalScore);
    $("#stats-turn-score1").text(first-playerStats.turnScore);
    $("#firstPlay").hide()
    $("#secondPlay").show()

  });
  //player2 roll
  $("#roll-dice-button2").click(function() {
    var rolled = second-playerStats.roll();
    second-playerStats.turnScore += rolled;
    if (rolled == 1) {
      secondPlayerStats.turnScore = 0;
      $("#stats-turn-score2").text(second-playerStats.turnScore);
      $("#secondPlay").hide()
      $("#firstPlay").show()

    }

    $("#stats-turn-score2").text(second-playerStats.turnScore);

  });
  $("#hold-button2").click(function() {
    second-playerStats.totalScore += second-playerStats.turnScore;
    playerStats.turnScore = 0;
    $("#stats-first-player-total-score").text(second-playerStats.totalScore);
    $("#stats-turn-score2").text(second-playerstats.turnScore);
    $("#firstPlay").hide()
    $("#secondPlay").show()
  });


});
