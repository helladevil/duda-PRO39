var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    // Actualiza quiz
    update(){
      var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
    });
    }
    // Llama al método update que está dentro de la clase quiz
    update(){
  
  
  
  if(gameState === 1){
    clear();
    // Actualiza play
    
    
        // Llama al método play que está dentro de la clase quiz
    play() {
this.handleElements();
      
Player.getPlayersInfo();

if (allPlayers !== undefined){
image(track, 0, -height * 5, width, height * 6);
 var index = 0;
 for (var plr in allPlayers) {
  var x = allPlayers[plr].positionX;
  var y = height -allPlayers[plr].positionY;

  cars[index].position.x = x;
  cars[index].position.y = y;

  index = index +1;
 }

}
    }}
  }
}}
