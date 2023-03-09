var paragraph;

function setup() {
    paragraph = createP("I WRITE THE NEXT BESTSELLER.");

}

function draw() {
    // Width
    var valX = map(mouseX, 0, innerWidth, 1, -200);

    // Monospace
    var valY = map(mouseY, 0, innerHeight, 1, 50);

    paragraph.elt.style[
        "font-variation-settings"
        ] = `"WDTH" ${valX}, "MONO" ${valY}`;
    paragraph.position(0, 0, 0, 0);
}
