// Based on the code P_2_0_02.pde from
// Generative Gestaltung, ISBN: 978-3-87439-759-9

// Global var
// The var are initialised in gui.js
var lineCount = 6
var rotator = 0;
function setup() {
  // Canvas setup
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Container");
  // Detect screen density (retina)
  var density = displayDensity();
  pixelDensity(density);
  // Init var
  // The var are initialised in gui.js
}

function draw() {
  stroke(options.strokeColor);
 // background(255);
  background(255);
  smooth();
  for(i = 100; i <= width; i+= width/options.tileCount){
    rectangle(i,200,60,rotator);
  }
  rotator++;
}

function rectangle(startX,startY,length,rotation){
  let distance = length/lineCount;
  fill(255);
  push();
  translate(startX,startY);
  rotate(radians(rotation));
  beginShape();
    vertex(-length/2, -length/2);
    vertex(length-length/2, -length/2);
    vertex(length-length/2, length-length/2);
    vertex(-length/2, length-length/2);
  endShape(CLOSE);
  pop();
  noFill();
  rectangleRecursive(startX,startY,length,rotation,distance);
}

function rectangleRecursive(startX,startY,length,rotation,distance){
  length = length-distance;
  push();
  translate(startX,startY);
  rotate(radians(rotation));
  beginShape();
    vertex(-length/2, -length/2);
    vertex(length-length/2, -length/2);
    vertex(length-length/2, length-length/2);
    vertex(-length/2, length-length/2);
  endShape(CLOSE);
  pop();
  if(length > 10){
    rectangle(startX,startY,length,rotation,distance);
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveThumb(650, 350);
}

// Tools

// resize canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight, false);
}

// Int conversion
function toInt(value) {
  return ~~value;
}

// Timestamp
function timestamp() {
  return Date.now();
}

// Thumb
function saveThumb(w, h) {
  let img = get( width/2-w/2, height/2-h/2, w, h);
  save(img,'thumb.jpg');
}