let cats = [];
let numCats = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	for(let i = 0; i < numCats; i++) {
		let startPosX = width * (i / numCats);
		let startPosY = height * (i / numCats);
		let color = 255 * (i / numCats);
		cats[i] = new Caterpillar(startPosX, startPosY, color);
	}

}

function draw() {
	//ellipse(mouseX, mouseY, 20, 20);
	background(255);

	for(let i = 0; i < numCats; i++) {
		cats[i].draw();
	}

}

class Caterpillar {
	constructor(startPosX, startPosY, color) {
		this.size = 20;
		this.w1 = this.size;
		this.h1 = this.size*2;
		this.w2 = this.size;
		this.h2 = this.size;
		this.w3 = this.size/2;
		this.h3 = this.size/2;
		this.w4 = this.size/2;
		this.h4 = this.size/2;
		this.color = color;
		this.positionX = startPosX;
		this.positionY = startPosY;
		this.velocityX = random(-10, 10);
		this.velocityY = random(-10, 10);
		this.thickness = 3;
	}

	draw() {

		this.positionX = this.positionX + this.velocityX; // update the position
		this.positionY = this.positionY + this.velocityY;

		if (this.positionX > width || this.positionX < 0) { // reset box position in width
			this.velocityX = this.velocityX * -1;
		}

		if (this.positionY > height || this.positionY < 0) { // reset box position in height
			this.velocityY = this.velocityY * -1;
		}

		// Draw Caterpillar
		colorMode(HSB, 255);
		fill(this.color, 255, 255);
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
