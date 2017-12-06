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
	for(i = 20; i <= width-20; i+=width/30){
		agents.push(new agent(i,random(20,height-20), createVector(random(0,20)-10,random(0,20)-10), .5,random(25,50),random(25,50)));
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
		/*if(collisionPointsArray.length > 0){
		}*/
		collisionPointsArray.push({id:this.id,x:this.positionX,y:this.positionY,width:this.width,height:this.height,vector:this.vector.copy()});
	//	calculateBetweenPointsIntoArray(this.positionX, this.positionY, this.nextPositionX, this.nextPositionY,this.vector);
	}

	update(){
		collisionPointsArray.forEach(function(coll){
				//let posX = this.vector.x>0?true:false;
				//let posY = this.vector.y>0?true:false;
				if(coll.id != this.id &&(/*posX && posY &&*/ this.positionX <= coll.x+coll.width && this.positionX+this.width >= coll.x && this.positionY <= coll.y + coll.height && this.positionY+this.height >= coll.y)
					/*|| (!posX && posY && this.nextPositionX <= coll.x+coll.width && this.positionX >= coll.x && this.positionY <= coll.y + coll.height && this.nextPositionY >= coll.y)
					|| (posX && !posY && this.positionX <= coll.x+coll.width && this.nextPositionX >= coll.x && this.nextPositionY <= coll.y + coll.height && this.positionY >= coll.y)
					|| (!posX && !posY && this.nextPositionX <= coll.x+coll.width && this.positionX >= coll.x && this.nextPositionY <= coll.y + coll.height && this.positionY >= coll.y)*/){
					//console.log("this vector: "+this.vector+"    ...   colvec:"+coll.vector);
					if(this.vector.x > 0 && coll.vector.x > 0){
						if(this.vector.x > coll.vector.x){
							this.vector.x *=-1;
						}
					}else if(this.vector.x < 0 && coll.vector.x < 0){
						if(this.vector.x < coll.vector.x){
							this.vector.x *=-1;
						}
					}else if(this.vector.x > 0 && coll.vector.x < 0 || this.vectorx < 0 && coll.vector.x > 0){
						this.vector.x *=-1;
					}
					this.vector.y *=-1;
					 /*if(this.vector.y > 0 && coll.vector.y > 0){
						if(this.vector.y > coll.vector.y){
							this.vector.y *=-1;
						}
					}else if(this.vector.y < 0 && coll.vector.y < 0){
						if(this.vector.y < coll.vector.y){
							this.vector.y *=-1;
						}
					}else if(this.vector.y > 0 && coll.vector.y < 0 || this.vectory < 0 && coll.vector.y > 0){
						this.vector.y *=-1;
					}*/
					 
					/*else
						this.vector.x *=-1;
						this.vector.y *=-1;
					}*/
				}
				/*let a = 1;
				a++;
				while(a<15){
					a++;
				}*/
			},this);
		if(this.positionX>=width-10 || this.positionX <=10){
			this.vector.x*=-1;
		}
		if(this.positionY>=height-10 || this.positionY <=10){
			this.vector.y*=-1;
		}
		/*if(testing){
			console.log(collisionPointsArray);
			console.log(Math.floor(this.positionX*1000)+" "+Math.floor(this.positionY*1000));
		}*/
		/*let foundCollisions = collisionPointsArray.filter(
			function(val,thisArg){
				return val.x == Math.floor(this.positionX*100) && val.y == Math.floor(this.positionY*100);
			}.bind(this)
		);*/
		//if(this.debugId == 1){
			//console.log( get(mouseX, mouseY));
		//	console.log(get(50,50,10,10));
			//console.log(collisionPointsArray);
		//	console.log(foundCollisions.length);
		//	console.log("XFront: "+Math.floor(this.positionX*100)+"      YFront: "+Math.floor(this.positionY*100));
		//}
		/*if(foundCollisions.length>1){
			this.strokecol=50;
			console.log("collisionDetected");
		}*/
		//testing = false;
	}
	draw(){
		if(this.strokecol == 50){
			stroke(255,0,0);
		}else{
			stroke(this.strokecol,this.strokecol,this.strokecol);
		}
		rect(this.positionX,this.positionY,this.width,this.height);
		//line(toInt(this.positionX),toInt(this.positionY),toInt(this.nextPositionX),toInt(this.nextPositionY));
	}
}

function draw() {
	collisionPointsArray = []
	agents.forEach(function(agent1){
		agent1.calculateCollision();
	});
	background(255,255,255,255);
	agents.forEach(function(agent1){
		agent1.update();
		agent1.draw();
	});
}
/*
function calculateBetweenPointsIntoArray(xOld, yOld, xNew, yNew, vector){
	//arr.push(1);
	let found = false;
	let normalizedVector = vector.normalize();
	let directionXPositiv = vector.x>0?true:false;
	let directionYPositiv = vector.y>0?true:false;
	while(!found){
		collisionPointsArray.push({x:Math.floor(xOld*100),y:Math.floor(yOld*100)});
		xOld=normalizedVector.x+xOld;
		yOld=normalizedVector.y+yOld;
		if((xOld>xNew && directionXPositiv) ||
			(xOld<xNew && !directionXPositiv) ||
			(yOld>yNew && directionYPositiv) ||
			(yOld<yNew && !directionYPositiv)){
			found = true;
			collisionPointsArray.push({x:Math.floor(xOld*100),y:Math.floor(yOld*100)});
			//test if newPoint is reached
			if(Math.floor(xOld*100) == Math.floor(xNew*100)){
				console.log("same");
			}
		}
	}
}
*/
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