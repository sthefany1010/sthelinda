function setup() {
  createCanvas(600, 600);
  background ('pink')
}

function draw() {
  fill("rgb(134,47,62)");
  stroke("rgb(107,61,69)");
  strokeWeight(1);
  
  if(mouseIsPressed) {
  rect(mouseX, mouseY, 20, 30);
  }
}
