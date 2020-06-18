let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  canvasWidth = document.querySelector('#intro').offsetWidth
  canvasHeight = document.querySelector('#intro').offsetHeight + 15
  let myCanvas = createCanvas(canvasWidth, canvasHeight);
   myCanvas.parent("canvas");
}

function draw() {
  background(156,195,231);
  fill(49,122,165);
  // We are going to draw a polygon out of the wave points
  beginShape();
  noStroke()
  //let xoff = 0; // Option #1: 2D Noise
  let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 200, 330);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y-100);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

    fill(0,48,84);
  // We are going to draw a polygon out of the wave points
  beginShape();
  noStroke()
  //let xoff = 0; // Option #1: 2D Noise
  let xuoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xuoff, yoff), 0, 3, 100, 300);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y+100);
    // Increment x dimension for noise
    xuoff += 0.06;
  }
  // increment y dimension for noise
  yoff += 0.005;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

      fill(0,23,52);
  // We are going to draw a polygon out of the wave points
  beginShape();
  noStroke()
  //let xoff = 0; // Option #1: 2D Noise
  //let xauoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xuoff, yoff), 0, 3, 100, 300);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y+200);
    // Increment x dimension for noise
    xuoff += 0.06;
  }
  // increment y dimension for noise
  yoff += 0.005;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}


function windowResized() {
  canvasWidth = document.querySelector('#intro').offsetWidth
  canvasHeight = document.querySelector('#intro').offsetHeight + 15
	resizeCanvas(canvasWidth, canvasHeight);
}
