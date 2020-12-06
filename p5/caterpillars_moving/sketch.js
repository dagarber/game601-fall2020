let cat1;
let cat2;
let box1;
let box2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	// Create boxes
	box1 = new Box();
	box2 = new Box();

	// Create caterpillars
	cat1 = new Caterpillar(39, 37, 38, 40); // Control with arrow keys
	cat2 = new Caterpillar(68, 65, 87, 83); // Control with WASD
}

function draw() {

	// Repaint background
	background(255);

	// Draw boxes
	box1.draw();

	// Draw caterpillars
	cat1.draw();
	cat2.draw();

	// Draw boxes
	box2.draw();

	textSize(32);
	textAlign(CENTER, CENTER);
	text("Use Arrows and W-A-S-D to move Caterpillars", width/2, height/20);
}

class Caterpillar {
	constructor(right, left, up, down) {
		this.size = random(20, 200);
		this.w1 = this.size;
		this.h1 = this.size*2;
		this.w2 = this.size;
		this.h2 = this.size;
		this.w3 = this.size/2;
		this.h3 = this.size/2;
		this.w4 = this.size/2;
		this.h4 = this.size/2;
		this.colorR = random(255);
		this.colorG = random(255);
		this.colorB = random(255);
		this.positionX = random(width);
		this.positionY = random(height);
		this.velocityX = 2000/this.size;
		this.velocityY = 2000/this.size;
		this.thickness = random(2, 20);
		this.right = right;
		this.left = left;
		this.up = up;
		this.down = down;
	}

	draw() {

		// Determine creature position
		if(keyIsDown(this.right)) {
			this.positionX += this.velocityX;
		}
		if(keyIsDown(this.left)) {
			this.positionX -= this.velocityX;
		}
		if(keyIsDown(this.up)) {
			this.positionY -= this.velocityY;
		}
		if(keyIsDown(this.down)) {
			this.positionY += this.velocityY;
		}

		// Draw Caterpillar
		colorMode(RGB, 255);
		fill(this.colorR, this.colorG, this.colorB);
		strokeWeight(this.thickness/2);
		ellipse(this.positionX, this.positionY, this.w1, this.h1);
		ellipse(this.positionX, this.positionY - this.h1/2 - this.h2/2, this.w2, this.h2);
		ellipse(this.positionX - this.w1/2 - this.w3/2, this.positionY - this.h1/3, this.w3, this.h3);
		ellipse(this.positionX + this.w1/2 + this.w3/2, this.positionY - this.h1/3, this.w3, this.h3);
		ellipse(this.positionX - this.w1/2 - this.w3/2, this.positionY + this.h1/3, this.w3, this.h3);
		ellipse(this.positionX + this.w1/2 + this.w3/2, this.positionY + this.h1/3, this.w3, this.h3);
		strokeWeight(this.thickness);
		line(this.positionX + this.w2/2, this.positionY - this.h1/2 - this.h2, this.positionX + this.w2, this.positionY - this.h1/2 - this.h2*1.5)
		line(this.positionX - this.w2/2, this.positionY - this.h1/2 - this.h2, this.positionX - this.w2, this.positionY - this.h1/2 - this.h2*1.5)
	}

}

class Box {
	constructor() {
		this.w = random(10, 50);
		this.h = this.w;
		this.posX = random(0 + this.w, width - this.w);
		this.posY = random(0 + this.h, height - this.h);
		this.velX = random(-10, 10);
		this.velY = random(-10, 10);
		this.hue = random(0, 255);
		//print(this.hue, "construct");
		this.weight = this.w/10;
	}

	draw() {
		this.posX = this.posX + this.velX; // update the position
		this.posY = this.posY + this.velY;

		if (this.posX + this.w/2 > width || this.posX - this.w/2 < 0) { // reset box position in width
			this.velX = this.velX * -1;
		}

		if (this.posY + this.h/2 > height || this.posY - this.h/2 < 0) { // reset box position in height
			this.velY = this.velY * -1;
		}

		colorMode(HSB, 255);
		fill(this.hue, 200, 300); // box color
		//print(this.hue, "draw");
		rectMode(CENTER);
		strokeWeight(this.weight);
		rect(this.posX, this.posY, this.w, this.h); // draw the box
	}
}
