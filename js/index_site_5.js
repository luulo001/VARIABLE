var paragraph;

function setup() {
    paragraph = createP("I WILL SUPPORT YOU WHEN YOU ARE OLD.");

}

function draw() {
    // Width
    var valX = map(mouseX, 0, innerWidth, 1, 200);

    // Monospace
    var valY = map(mouseY, 0, innerHeight, 1, 50);

    paragraph.elt.style[
        "font-variation-settings"
        ] = `"SERI" ${valX}, "MONO" ${valY}`;
    paragraph.position(0, 0, 0, 0);
}
