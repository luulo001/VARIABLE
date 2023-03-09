function mapRange(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

var w = window.innerWidth;
var h = window.innerHeight;

var xAxis;
var yAxis;

var h1 = document.getElementById("headline");


document.addEventListener( 'mousemove', (e) => {
	// console.log(e);
	var mouseX = event.clientX; 
	var mouseY = event.clientY; 
	xAxis = mapRange(mouseX,0,w,0,1);
	yAxis = mapRange(mouseY,0,h,0,1);






	h1.fontSize 
});


//alt
var paragraph;

function setup() {
    paragraph = createP("I PAINT <br>BETTER THAN YOUR FAVORITE ARTIST.");
    
}

function draw() {
    // Pattern

    var valX = map(mouseX, 0, windowWidth, 0,  12);

    // Monospace
    var valY = map(mouseY, 0, windowHeight, 0, 50);

    paragraph.elt.style[
        "font-variation-settings"
        ] = `"SLNT" ${valX}, "PATT" ${valY}`;
    paragraph.position(0,0,0,0);
}