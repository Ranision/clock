function setup() {
  createCanvas(640, 640);
  hc = new Spinhc(width/2, height/2, 0.001);
  mc = new Spinmc(width/2, height/2, 0.006);
  sc = new Spinsc(width/2, height/2, 0.0600);
  }

function draw() {
  background(204);
  circle(width/2, height/2, 400);
  hc.update();
  hc.display();
  mc.update();
  mc.display();
  sc.update();
  sc.display();}

class Spin {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.speed = s;
    this.angle = 0.0;
  }

  update() {
    this.angle += this.speed;
  }
}

class Spinhc extends Spin {
  constructor(x, y, s) {
    super(x, y, s)
  }

  display() {
    strokeWeight(6);
    stroke(0);
    push();
    translate(this.x, this.y);
    this.angle += this.speed;
    rotate(this.angle);
    line(0, 0, 100, 0);
    pop();
  }
}
class Spinmc extends Spin {
  constructor(x, y, s) {
    super(x, y, s)
  }

  display() {
    strokeWeight(3);
    stroke(0);
    push();
    translate(this.x, this.y);
    this.angle += this.speed;
    rotate(this.angle);
    line(0, 0, 165, 0);
    pop();
  }
}
class Spinsc extends Spin {
  constructor(x, y, s) {
    super(x, y, s)
  }

  display() {
    strokeWeight(1);
    stroke(0);
    push();
    translate(this.x, this.y);
    this.angle += this.speed;
    rotate(this.angle);
    line(0, 0, 165, 0);
    pop();
  }
}
