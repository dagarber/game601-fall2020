let positionX = 100; // creature variable for creature position
let positionY = 100; // creature variable for creature position
let velocityX = 5; // rate of motion
let velocityY = 5; // rate of motion

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	strokeWeight(10);
	textSize(150);
	positionX = width/2; // center creature at start
	positionY = height/2; // center creature at start
}

function draw() {

	// Repaint background
	background(255);

	// Draw background scene
	backgroundScene();

	// Determine creature position
		if(keyIsDown(RIGHT_ARROW)) {
			positionX += velocityX;
		}
		if(keyIsDown(LEFT_ARROW)) {
			positionX -= velocityX;
		}
		if(keyIsDown(UP_ARROW)) {
			positionY -= velocityY;
		}
		if(keyIsDown(DOWN_ARROW)) {
			positionY += velocityY;
		}

	/* // Original version of determine creature position
	if(keyIsPressed) {
		if(keyCode == RIGHT_ARROW) {
			positionX += velocityX;
		}
		if(keyCode == LEFT_ARROW) {
			positionX -= velocityX;
		}
		if(keyCode == UP_ARROW) {
			positionY -= velocityY;
		}
		if(keyCode == DOWN_ARROW) {
			positionY += velocityY;
		}
	}
	*/

	// Draw creature
	creature();

	// Draw foreground scene
	foregroundScene();

}


// Jump creature to mouse position //////////////////////
function mousePressed() {
	positionX = mouseX;
	positionY = mouseY;
}


// Draw backgroun scene /////////////////////////////////
function backgroundScene() {
	fill(100);
	rect(100, 100, 100, 100);
	rect(600, 600, 100, 100);
	rect(1200, 600, 100, 100);
}


// Draw creature /////////////////////////////////////////
function creature() {
	fill(255, 255, 0); //yellow
	strokeWeight(5);
	w1 = 100;
	h1 = 200;
	w2 = 100;
	h2 = 100;
	w3 = 50;
	h3 = 50;
	w4 = 50;
	h4 = 50;
	ellipse(positionX, positionY, w1, h1);
	ellipse(positionX, positionY - h1/2 - h2/2, w2, h2);
	ellipse(positionX - w1/2 - w3/2, positionY - h1/3, w3, h3);
	ellipse(positionX + w1/2 + w3/2, positionY - h1/3, w3, h3);
	ellipse(positionX - w1/2 - w3/2, positionY + h1/3, w3, h3);
	ellipse(positionX + w1/2 + w3/2, positionY + h1/3, w3, h3);
	strokeWeight(10);
	line(positionX + w2/2, positionY - h1/2 - h2, positionX + w2, positionY - h1/2 - h2*1.5)
	line(positionX - w2/2, positionY - h1/2 - h2, positionX - w2, positionY - h1/2 - h2*1.5)
}


// Draw foreground scene ////////////////////////////////
function foregroundScene() {
	fill(148,0,211);
	strokeWeight(1);
	triangle(width/6, height/6, width/6, height - height/6, width/2, height/2);
}


/////////////////////////////////////////
// EXAMPLES FROM YOUTUBE LESSON
/////////////////////////////////////////

	// key, keyCode, keyIsPressed,
	// mouseX, mouseY, pmouseX, pmouseY, mouseIsPressed
	// mousePressed() function

	/* // keyboard inputs
	text(key,width/2,height/2);

	if(key == "p") {
		if(keyIsPressed === true) {
		ellipse(mouseX, mouseY, 100, 100);
		}
	}
	*/

	/* // drawing pad
	if (mouseIsPressed) {
	line(pmouseX, pmouseY, mouseX, mouseY);
	}
	*/

	/* // color ellipse differently on different sides of canvas
	if (mouseX > width/2) {
		fill(0, 255, 255);
	} else {
		fill(255, 0, 255);
	}
	ellipse(mouseX, mouseY, 20, 20);
	*/

	/* // bouncing ball (left to right back and forth)
	background(100);

	fill (0, 0, 0);

	ellipse(positionX, height/2, 20, 20);

	if (positionX > width) {
	velocityX = velocityX * -1;
	} else if (positionX < 0) {
		velocityX = velocityX * -1;
		}

	positionX = positionX + velocityX;
	*/

/* // drawing pad
function mousePressed() {
	ellipse(mouseX, mouseY, 50, 50);
}
*/
