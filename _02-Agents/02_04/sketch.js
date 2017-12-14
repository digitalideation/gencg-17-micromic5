// Based on the code P_2_0_02.pde from
// Generative Gestaltung, ISBN: 978-3-87439-759-9

// Global var
// The var are initialised in gui.js
"strict mode";
//Ernst Junior
let agents = [];
let collisionPointsArray = [];
let testing = true;
let testingCollisionArr = true;
let idCounter = 0;
let count = 20;
let countY = 4;
let size = 20;
let speed = 0.1;
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
	let counter = 20;
	//spawner has to change for simon
	for(i = 20; i <= width-20; i+=width/(count)){
		for(j = 20; j <= height-20; j += height /countY){
			agents.push(new agent(i,j, createVector(random(0,20)-10,random(0,20)-10),speed ,random(3,100/(count*countY/size)),random(3,100/(count*countY/size))));
		}
	}
}

class agent{
	constructor(positionX,positionY,vector,length,width,height){
		this.positionX = positionX;
		this.positionY = positionY;
		this.vector = vector;
		this.length = length;
		this.width = width;
		this.height = height;
		this.strokecol = 0;
		idCounter++;
		this.id = idCounter;
	}

	calculateCollision(){
		this.positionX += this.vector.x*this.length;
		this.positionY += this.vector.y*this.length;
		collisionPointsArray.push({id:this.id,x:this.positionX,y:this.positionY,width:this.width,height:this.height,vector:this.vector.copy()});
	}

	update(){
		collisionPointsArray.forEach(function(coll){
				if(coll.id != this.id &&(this.positionX <= coll.x+coll.width && this.positionX+this.width >= coll.x && this.positionY <= coll.y + coll.height && this.positionY+this.height >= coll.y))
				{
					if(this.vector.x > 0 && coll.vector.x > 0){
						if(this.vector.x > coll.vector.x){
							this.vector.x *=-1;
						}
					}else if(this.vector.x < 0 && coll.vector.x < 0){
						if(this.vector.x < coll.vector.x){
							this.vector.x *=-1;
						}
					}else if((this.vector.x > 0 && coll.vector.x < 0) || (this.vectorx < 0 && coll.vector.x > 0)){
						this.vector.x *=-1;
					}else{
						this.vector.x *=-1;
					}
					//this.vector.y *=-1;
					 if(this.vector.y > 0 && coll.vector.y > 0){
						if(this.vector.y > coll.vector.y){
							this.vector.y *=-1;
						}
					}else if(this.vector.y < 0 && coll.vector.y < 0){
						if(this.vector.y < coll.vector.y){
							this.vector.y *=-1;
						}
					}else if((this.vector.y > 0 && coll.vector.y < 0) || (this.vectory < 0 && coll.vector.y > 0)){
						this.vector.y *=-1;
					}else{
						this.vector.y *=-1;
					}
				}
			},this);
		if(this.positionX>=width || this.positionX <=0){
			this.vector.x*=-1;
		}
		if(this.positionY>=height || this.positionY <=0){
			this.vector.y*=-1;
		}
	}
	draw(){
		fill(options.color);
		stroke(options.color);
		rect(this.positionX,this.positionY,this.width,this.height);
	}
}

function draw() {
	collisionPointsArray = []
	agents.forEach(function(agent1){
		agent1.calculateCollision();
	});
	background(options.backgroundColor[0],options.backgroundColor[1],options.backgroundColor[2],options.bgAlpha);
	agents.forEach(function(agent1){
		agent1.update();
		agent1.draw();
	});
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