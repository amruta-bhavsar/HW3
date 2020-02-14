var ballY = 0;
var ballYVelocity = 12.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200,ballY,50);
  
  ballY = ballY + ballYVelocity;
  
  
  if(ballY > width) {
    ballYVelocity = -ballYVelocity;
  }
  
  if (ballY < 0){
    ballYVelocity = ballYVelocity*-1;
  }
}
