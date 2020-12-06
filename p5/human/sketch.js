let x = 0; // drawing location reference x
let y = 0; // drawing location reference y
let counter = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(80);
}

function draw() {
	background(80) // redraw background color
	human()
	x=x+10 // movement speed
	if(x>1600) { // loop to reset movement back to left side of screen
		x = 0
		y = y + 200 // move human down
		counter = counter + 1
	}
	print(counter) // print loop counter to window console
	if(counter>3) { // loop to reset movement back to top
		counter=0;
		y=0;
	}
}

function human() {
	fill(255,255,255)
	ellipse(x-70,y+100,100) // head
	fill(0,255,255)
	quad(x+40,y,x+60,y,x-20,y+200,x-40,y+200) // arm
	quad(x-200,y,x-180,y,x-100,y+200,x-120,y+200) // arm
	fill(255,255,0)
	rect(x-80, y+150, 20, 500) // body
}
