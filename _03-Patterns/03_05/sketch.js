// Based on the code P_2_0_02.pde from
// Generative Gestaltung, ISBN: 978-3-87439-759-9

// Global var
// The var are initialised in gui.js
var Initiallength = 500;
var howDeepToGoLengthMidl = 200;
var howDeepToGoLengthLow = 80;
var animationX = 0;
var plusDirection = true;
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
 //generate The first two Triangles
function generator(length){
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
	if((length > howDeepToGoLengthLow) &&(
		(length > howDeepToGoLengthMidl && random(0,100)>=2)||
		(length < howDeepToGoLengthMidl && length > howDeepToGoLengthLow && random(0,100) >=30)))
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
		fillTriangle(length);
	}
}

function fillTriangle(length){
	stroke(random(0,255),random(0,255),random(0,255));
	for(let i = 0; i <= length/2; i+=5){
		line(0-length/2,i-length/2,i-length/2,i-length/2);
	}
 for(let i = 0; i <= length/2; i+=5){
		line(0-length/2,-i+length/2,i-length/2,-i+length/2);
	}
	//the midle stroke  works only with initial length 4000
		 // stroke(0);
		 // strokeWeight(.2);
	if(length >= 70 && length <=300){line(0,0,-length/2,0);}
}

function draw() {
		randomSeed(options.actRandomSeed);
		howDeepToGoLengthMidl = options.howDeepToGoLengthMidl;
		howDeepToGoLengthLow = options.howDeepToGoLengthLow;
		Initiallength = options.startLength;
		smooth();
		background(255,255,255, options.bgAlpha);
		translate(animationX,height/2-Initiallength/2);
		generator(Initiallength);
		if(plusDirection){
			animationX++;
			plusDirection=(animationX>=width-Initiallength/2)?false:plusDirection;
		}else{
			animationX--;
			plusDirection=(animationX<=50)?true:plusDirection;
		}
		//noLoop();
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