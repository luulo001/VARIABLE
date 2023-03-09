var paragraph;

function setup() {
    paragraph = createP("I CREATE SYMPHONIES <br>IN SECONDS.");

}

function draw() {

    // Serif
    var valX = map(mouseX, 0, innerWidth, 0, 100);

    // Weight
    var valY = map(mouseY, 0, innerHeight, 300, 700);

    paragraph.elt.style[
        "font-variation-settings"
        ] = `"SERI" ${valX}, "WGHT" ${valY}`;
    paragraph.position(0, 0, 0, 0);
}