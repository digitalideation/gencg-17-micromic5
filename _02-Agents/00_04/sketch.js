// Based on the code P_2_0_02.pde from
// Generative Gestaltung, ISBN: 978-3-87439-759-9

// Global var
// The var are initialised in gui.js
var Initiallength = 600;
var test = true;
var rotator = 0;
function setup() {
  // Canvas setup
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Container");
  // Detect screen density (retina)
  var density = displayDensity();
  pixelDensity(density);
  // Init var
  // The var are initialised in gui.js);
  noFill();
}

function generator(length){
 /* line(0,0,0,length);
  line(length/2,length/2,0,0);
  line(length/2,length/2,0,length);*/
  push();
  translate(0,length/2);
  rotate(radians(135));
  recursiveGenerator(length*sqrt(2)/2);
  pop();
  push();
  translate(0,length/2);
  rotate(radians(225));
  recursiveGenerator(length*sqrt(2)/2);
  pop();
}
function recursiveGenerator(length){
  line(-length/2,-length/2,-length/2,length-length/2);
  line(length/2-length/2,length/2-length/2,-length/2,-length/2);
  line(length/2-length/2,length/2-length/2,-length/2,length-length/2);
  if(length>100)
  {
    push();
    translate(-length/2,0);
    rotate(radians(225));
    recursiveGenerator(length*sqrt(2)/2);
    pop();
    push();
    translate(-length/2,0);
    rotate(radians(135));
    recursiveGenerator(length*sqrt(2)/2);
    pop();
  }
  else
  {
   /* if(random(0,500)>300)
    {
      generator(length-10);
    }*/
 //   else
 //   {
 //
      fillTriangle(length);
    }
  }
}

function fillTriangle(length){
  stroke(100,254,23);
  for(let i = 0; i < length/2; i+=5){
    line(0-length/2,i-length/2,i-length/2,i-length/2);
  }
}

function draw() {
    translate(200,50);
    generator(Initiallength);
    rotator++;
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