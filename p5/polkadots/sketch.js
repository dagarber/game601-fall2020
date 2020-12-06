// Hello! This is my code (David Garber)

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(150);

	frameRate(10); // slow down the framerate for the mouse tracking

	// The 'floor' of the triangle
	y1=height-200;

	// Create a full-width rectangle
	fill(0,255,0);
	rect(0,height - 200,width,100);

		// Create another full-width rectangle
	fill(0,0,255);
	rect(0,height - 100,width,100);

	// Create a big background triangle
	fill(255,255,0);
	triangle(width/2,0,0,y1,width,y1);

}


function draw() {

	// Pointer
	// mouseX, mouseY tells the code to draw the shape at the X, Y position of the mouse
	fill(0,0,255);
	stroke(0,255,0);
	strokeWeight(3);
	ellipse(mouseX, mouseY, 50, 50);

}
