// Based on the code P_2_0_02.pde from
// Generative Gestaltung, ISBN: 978-3-87439-759-9

// Global var
// The var are initialised in gui.js
"strict mode";
//Ernst Junior
var agents = [];
var count = 10;

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
	for(i = 20; i <= width-20; i+=width/20){
		agents.push(new agent(i,random(20,height-20), createVector(random(0,20)-10, random(0,20)-10, 0),random(0,5)));
	}
}

class agent{
	constructor(positionX,positionY,vector,length){
		this.positionX = positionX;
		this.positionY = positionY;
		this.vector = vector;
		this.length = length;
		this.nextPositionX = 0;
		this.nextPositionY = 0;
	}

	calculateCollision(){
		this.nextPositionX = this.positionX*this.vector.x*this.length;
		this.nextPositionY = this.positionY*this.vector.y*this.length;
	}

	update(){
		this.positionX += this.vector.x;
		this.positionY += this.vector.y;
		if(this.positionX>=width-10 || this.positionX <=10){
			this.vector.x*=-1;
		}
		if(this.positionY>=height-10 || this.positionY <=10){
			this.vector.y*=-1;
		}
	}
	draw(){
		line(this.positionX,this.positionY,this.positionX+this.vector.x*this.length, this.positionY+this.vector.y*this.length)
	}
}

function draw() {
		background(255,255,255,options.bgAlpha);
		let collisionArray = [];
		agents.forEach(function(agent1){
			agent1.calculateCollision();
		});
		agents.forEach(function(agent1){
			agent1.update();
			agent1.draw();
		});
		if(options.agentCount != count){
			let newCount = options.agentCount-count;
			count = options.agentCount;
			for(i = 20; i <= width-20; i+=width/newCount){
				agents.push(new agent(i,random(20,height-20), createVector(random(0,20)-10, random(0,20)-10, 0),random(0,5)));
			}
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