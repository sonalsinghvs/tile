function setup() {
  createCanvas(200, 200);
}
function createTile() {
  translate(0, 0);
  fill('#2A363B');
  rect(0, 0, 200, 200);
  fill('#FF847C');
  noStroke();
  ellipse(100, 100, 170, 170);
  fill('# FECEAB');
  noStroke();
  ellipse(100, 100, 130, 130);
  fill('#99B898');
  noStroke();
  ellipse(100, 100, 100, 100);
  fill('#E84A5F');
  strokeWeight(5);
  arc(50, 50, 100, 100, QUARTER_PI, PI+QUARTER_PI);
  arc(150, 150, 100, 100, PI+QUARTER_PI, QUARTER_PI,);
  fill('# FECEAB');
  noStroke();
  ellipse(100, 100, 30, 30);
}

function draw() {
  createTile();
}
