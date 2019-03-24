function setup()
{
	createCanvas(window.innerWidth, window.innerHeight);
	background(51);
}

function draw()
{
	stroke(255, 0, 200);
	strokeWeight(10);

	if (mouseIsPressed === true) 
	{
   		line(mouseX, mouseY, pmouseX, pmouseY);
  	}
}
