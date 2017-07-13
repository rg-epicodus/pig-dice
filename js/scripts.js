// #result
function Controller(numOfPlayers) {
  this.winScore = 60;
  this.turn     = 0;
  this.players  = new Array [numOfPlayers];
  this.offset   = Math.ceiling(Math.random()*players.length);
  this.won      = false;
  this.dice     = 0;
  this.selector = 0;
}
Controller.prototype.setPlayers = function () {
  for (i=0;i<this.players.length;i++) {
    this.players[i] = "USER_" + (i+1).toString();
}
Controller.prototype.setWin = function (maxScore) {
  this.winScore = maxScore;
}
Controller.prototype.diceRoll = function () {
  return Math.ceiling(Math.random()*6);
}
Controller.prototype.testPlayer = function (user) {
  if (user.scoreSum >= this.winScore) {
    this.won = true;
  }
}

function Player(playerName) {
  this.name  = playerName.toString();
  this.scoreSum = 0;
  this.scoreCur = 0;
  //var strike = false;
}

$(document).ready(function(){
  //players start game
  //players enter names and alt winScore
  //computer rolls for starting player
  console.log('test');
  $("form#GAME_START").submit(function(event){
    var gameController = new Controller (parseInt($("input#Players")));
    gameController.setPlayers();

    event.preventDefault();
    console.log("test");
  });

  //control function
  $("#ROLL").click(function(){
    controller.dice = controller.diceRoll();
    if (controller.dice != 1) {
      controller.players[controller.selector].scoreCur = controller.dice;
    } else {
      controller.players[controller.selector].scoreCur = 0;
    }
  });
  $("#HOLD").click(function(){
    //set results
    controller.players[controller.selector].scoreSum += controller.players[controller.selector].scoreCur;
    //test for win
    controller.testPlayer(controller.players[controller.selector]);
    //if win condition reached
    if (controller.won === true) {
      $("#WINNING").text(controller.players[selector].name+" has won!!!")
    } else {
      //move to next player
      controller.selector+=1;
      if (controller.selector >= controller.players.length) {
        controller.selector=0;
      }
    }
  });
});
