// Global var
var radius = 80;
var inerRadius = 30;
var horizontalCount =5;
var verticalCount = 8;
var randomRadiusSize = 15;
var stepSize = 5;
function setup() {
  // Canvas setup
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Container");
  // Detect screen density (retina)
  var density = displayDensity();
  pixelDensity(density);
  for(let k = 0; k <= width; k+=width/verticalCount){
    for(let z = 0; z <= height; z+=height/horizontalCount){
      stroke(random(0,250), random(0,250), random(0,250));
      drawCircle(k,z,stepSize,randomRadiusSize);
    }
  }
}

function draw() {
  //background(255);
  smooth();
  noFill();
}

function drawCircle(xCoordinate,yCoodrinate,step,radiusRandomizer){
  let currentRad = radius+1;
  for( i =0; i <= 720; i+=step){
    currentRad += toInt(random(-radiusRandomizer, radiusRandomizer));
    //make sure the currentRad is never smaler than the iner radius
    currentRad = currentRad<inerRadius?inerRadius:currentRad;
    beginShape(LINES);
    vertex(xCoordinate+inerRadius*cos(i), yCoodrinate+inerRadius*sin(i));
    vertex(xCoordinate+currentRad*cos(i), yCoodrinate+currentRad*sin(i));
    endShape();
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