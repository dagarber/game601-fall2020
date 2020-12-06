// Variables
let w; // ball diameter

let posX; // ball position
let posY; // ball position

let velX; // ball velocity
let velY; // ball velocity

let gravity = 0.4; // ball acceleration in Y

let hue; // ball color

let score; // running tally of score

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	w = random(50,150); // randomize ball diameter

	posX = random(0, width); // starting position
	posY = 0;
	prevPosX = posX;
	prevPosY = posY;

	velX = 3; // initial x velocity
	velY = 0;

	hue = random(0, 255); // random starting color

	score = 0;

	colorMode(HSB, 255);
	strokeWeight(5);

	textAlign(CENTER, CENTER);
	textSize(width/20);
}

function draw() {
	background(255);

	colorMode(HSB, 255);
	fill(hue, 200, 300); // ball color
	ellipse(posX, posY, w, w); // draw the ball

	posX = posX + velX; // update the position
	posY = posY + velY;

	hue++; // update the color
	if (hue > 255) {
		hue = 0;
	}

	if (posX > width || posX < 0) { // reset ball position in width
		velX = velX * -1;
	}

	if (posY > height) { // reset ball position in height
		velY = velY * -1;
		posY = height + velY/2;
	}

	velY = velY + gravity;

	colorMode(RGB, 255);
	fill(0);
	text('Score:', width/2, height/20);
	text(score, width/2, height/8);
}

function mousePressed() { // reset ball position when user clicks on ball
	let d = dist(mouseX, mouseY, posX, posY);

	if (d < w) {
		posX = random(0, width); // randomize ball position on restart
		posY = random(0, height/2); // randomize ball position on restart
		velX = random(-6, 6); // randomize x velocity on restart
		velY = 0;
		w = random(50,150); // randomize ball width on restart
		score = score + 1; // update the score
	}
}
