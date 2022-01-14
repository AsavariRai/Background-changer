
function setup() {
  createCanvas(400,400);
}

function draw() {
  background("black");
  if(keyIsDown(UP_ARROW)){
    background("yellow")
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("red")
  }
  if(keyIsDown(LEFT_ARROW)){
    background("blue")
  }
  if(keyIsDown(DOWN_ARROW)){
    background("white")
  }
  
  }





