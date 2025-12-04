function sketch1(p) {
  p.setup = function () {
    let backgroundcanvas = p.createCanvas(p.windowWidth, p.windowHeight);
    backgroundcanvas.style('position','fixed');
    backgroundcanvas.style('z-index','-1');
    backgroundcanvas.position(0,0);
    backgroundcanvas.style('top','0');
    backgroundcanvas.style('left','0');

    let r1 = p.random(150, 255);
    let g1 = p.random(150, 255);
    let b1 = p.random(150, 255);
    let color1 = p.color(r1, g1, b1);

    let r2 = p.random(100, 200);
    let g2 = p.random(100, 200);
    let b2 = p.random(100, 200);
    let color2 = p.color(r2, g2, b2);

    for (let x = 0; x <= p.height; x = x + 1) {
      p.strokeWeight(1);
      lerpmap = p.map(x, 0, p.height, 0.0, 1.0);
      lerpvalue = p.lerpColor(color1, color2, lerpmap);
      p.stroke(lerpvalue);
      p.line(0, x, p.width, x);
    };
    p.noLoop();
  };
};


function sketch2(p) {
  p.setup = function () {
    let fleshDiv = p.select('#fruitflesh');
    let dimension = fleshDiv.elt.getBoundingClientRect();
    let fleshWidth = fleshDiv.width;
    let fleshHeight = fleshDiv.height;
    let canvas = p.createCanvas(fleshWidth, fleshHeight);
    canvas.parent('fruitflesh');
    p.clear();
    p.noLoop();
  };

  p.drawSeeds = function() {
  p.clear();
  p.noStroke();
  for (let y = 0; y <= p.height; y = y + 20) {
    for (let x = 0; x <= p.width; x = x + 20) {
      p.tile(x, y, p.random(5, 20));
    }
  }
};

 p.tile = function(xpos, ypos, tilesize) {
  p.fill(0);
  p.circle(xpos + p.random(-15,15), ypos + p.random(-15,15), tilesize);
};

p.mousePressed = function() {
  p.drawSeeds();
};
};

new p5(sketch1);
new p5(sketch2);

