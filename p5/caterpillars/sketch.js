function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

	for(let i = 0; i < 100; i++) {
		let size = random(20, 200);
		let colorR = random(255);
		let colorG = random(255);
		let colorB = random(255);
		let positionX = random(width);
		let positionY = random(height);
		let thickness = random(2, 20);
		creature(size, colorR, colorG, colorB, positionX, positionY, thickness);
	}

}

function draw() {
	//ellipse(mouseX, mouseY, 20, 20);
}

// Draw creature /////////////////////////////////////////
function creature(size, colorR, colorG, colorB, positionX, positionY, thickness) {
	fill(colorR, colorG, colorB); //yellow
	strokeWeight(thickness/2);
	w1 = size;
	h1 = size*2;
	w2 = size;
	h2 = size;
	w3 = size/2;
	h3 = size/2;
	w4 = size/2;
	h4 = size/2;
	ellipse(positionX, positionY, w1, h1);
	ellipse(positionX, positionY - h1/2 - h2/2, w2, h2);
	ellipse(positionX - w1/2 - w3/2, positionY - h1/3, w3, h3);
	ellipse(positionX + w1/2 + w3/2, positionY - h1/3, w3, h3);
	ellipse(positionX - w1/2 - w3/2, positionY + h1/3, w3, h3);
	ellipse(positionX + w1/2 + w3/2, positionY + h1/3, w3, h3);
	strokeWeight(thickness);
	line(positionX + w2/2, positionY - h1/2 - h2, positionX + w2, positionY - h1/2 - h2*1.5)
	line(positionX - w2/2, positionY - h1/2 - h2, positionX - w2, positionY - h1/2 - h2*1.5)
}
