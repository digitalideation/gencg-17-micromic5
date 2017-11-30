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
 // background(255);
  smooth();
  for(i = 100; i <= width; i+= width/5){
    rectangle(i,200,60,rotator);
  }
  rotator++;
  //noLoop();
}

function rectangle(startX,startY,length,rotation){
  let distance = length/lineCount/2;
  fill(255);
  push();
  translate(startX,startY);
  rotate(radians(rotation));
  beginShape();
    vertex(0, 0);
    vertex(length, 0);
    vertex(length, length);
    vertex(0, length);
  endShape(CLOSE);
  pop();
  noFill();
  rectangleRecursive(startX+distance,startY+distance,length-length/lineCount,rotation,distance);
}

function rectangleRecursive(startX,startY,length,rotation,distance){
  push();
  translate(startX,startY);
  rotate(radians(rotation));
  beginShape();
    vertex(0, 0);
    vertex(length, 0);
    vertex(length, length);
    vertex(0, length);
  endShape(CLOSE);
  pop();
  if(length > 10){
    rectangle(startX+distance,startY+distance,length-distance*2,rotation);
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