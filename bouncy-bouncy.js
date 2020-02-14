var ballY = 0;
var ballX = 0;
var ballYVelocity = 12.5;
var ballXVelocity = 12.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200,ballY,50);
  ellipse(ballX,200,50);
  ellipse(100,ballY,50);
  
  ballY = ballY + ballYVelocity;
  ballX = ballX + ballXVelocity;
  
  
  if(ballY > width) {
    ballYVelocity = -ballYVelocity;
  }
  
  if (ballY < 0){
    ballYVelocity = ballYVelocity*-1;
  }
  if(ballX > width){
     ballXVelocity = -ballXVelocity;
     }
  if (ballX <0){
  ballXVelocity = ballXVelocity*-1;
  }
}
