// #result
new controller(numOfPlayers) {
  var winScore = 60;
  var turn     = 0;
  var players  = new array [numOfPlayers];
  var offset   = Math.ceiling(Math.random()*players.length);
  var won      = false;
  var dice     = 0;
  var selector = offset;
}
controller.prototype.setPlayers() {
  for (i=0;i<this.players.length;i++) {
    this.players[i] = "USER_"(i+1).toString();
}
controller.prototype.setWin(maxScore) {
  this.winScore = maxScore;
}
controller.prototype.diceRoll() {
  return Math.ceiling(Math.random()*6);
}
controller.prototype.testPlayer(user) {
  if (user.scoreSum => this.winScore) {
    this.won = true;
  }
}

new player(playerName) {
  var name  = playerName.toString();
  var scoreSum = 0;
  var scoreCur = 0;
  //var strike = false;
}

$(document).ready(function(){
  //players start game
  //players enter names and alt winScore
  //computer rolls for starting player
  $("form#GAME_START").submit(function(event){
    var gameController = new controller (parseInt($("input#Players")));
    gameController.setPlayers();

    event.preventDefault();
  });

  //control function
  $("#ROLL").onClick(function(){
    controller.dice = controller.diceRoll();
    if (controller.dice != 1) {
      controller.players[controller.selector].scoreCur = controller.dice;
    }
    else {
      controller.players[controller.selector].scoreCur = 0;
    }
  });
  $("#HOLD").onClick(function(){
    //set results
    controller.players[controller.selector].scoreSum += controller.players[controller.selector].scoreCur;
    //test for win
    controller.testPlayer(controller.players[controller.selector]);
    //if win condition reached
    if (controller.won === true) {
      $("#WINNING").text(controller.players[selector].name+" has won!!!")
    }
    else {
      //move to next player
      controller.selector+=1;
      if (controller.selector => controller.players.length){controller.selector=0;}
    }
  });
});
