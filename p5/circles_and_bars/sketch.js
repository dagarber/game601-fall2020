let posX;
let poxY;
let w;
let h;
let counter;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	w = width/80;
	h = height/80;
	counter = 101;
	//frameRate(10);
}

function draw() {
	//ellipse(mouseX, mouseY, 20, 20);

	posX = 0;
	posY = height - h;

	if(counter > 100) {
		w = width/random(20, 100);
		h = w;
		colorMode(RGB, 255);

		for(posY = height - h; posY > -h; posY = posY -h) {
			fill(random(100, 255), random(100, 255), random(255));

			while(posX < width) {
				rect(posX, posY, w, h);
				posX = posX + w;
			}

			posX = 0;
		}

		counter = 0;
	}

	colorMode(HSB, 100);
	fill(random(100), random(100), 100);
	ellipse(random(width), random(height), random(10, 70), random(10, 70))

	counter++;
}
