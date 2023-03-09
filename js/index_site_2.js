var paragraph;

function setup() {
    paragraph = createP("I PAINT BETTER THAN YOUR FAVORITE ARTIST.");

}

function draw() {

    // Slant
    var valX = map(mouseX, 0, innerWidth, 1, 24);

    // Pattern
    var valY = map(mouseY, 0, innerHeight, 1, 50);

    paragraph.elt.style[
        "font-variation-settings"
        ] = `"SLNT" ${valX}, "PATT" ${valY}`;
    paragraph.position(0, 0, 0, 0);
}



