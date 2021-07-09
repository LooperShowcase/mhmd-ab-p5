function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let seconds = second();
  let minutes = minute();
  let hours = hour();
  // The same as doing: background(220); or --> background(220,220,220);
  background(26, 101, 158);
  translate(width / 2, height / 2);
  rotate(-90);
  noFill();
  strokeWeight(8);
  let secondsArc = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondsArc);

  stroke("red");
  let minuteAngle = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 200, 200, 0, minuteAngle);

  stroke("pink");
  let hourAnfgle = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 150, 150, 0, hourAnfgle);

  push();
  stroke("yellow");
  rotate(minuteAngle);
  line(0, 0, 100, 0);
  pop();

  push();
  stroke(255);
  rotate(secondsArc);
  line(0, 0, 150, 0);
  pop();

  push();
  stroke("#03045E");
  rotate(hourAnfgle);
  line(0, 0, 75, 0);
  pop();

  strokeWeight(1);
  rotate(90);
  text(12, 0, -160);

  text(6, 0, 170);
  text(9, 0, 100);
  text (3,0,190);

}
