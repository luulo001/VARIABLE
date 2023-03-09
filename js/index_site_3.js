var paragraph;

function setup() {
    paragraph = createP("I RECOGNIZE DISEASES FASTER THAN A DOCTOR.");

}

function draw() {
    // Width
    var valX = map(mouseX, 0, innerWidth, 1, -200);

    // Contrast
    var valY = map(mouseY, 0, innerHeight, 1, 50);

    paragraph.elt.style[
        "font-variation-settings"
        ] = `"WDTH" ${valX}, "CNTR" ${valY}`;
    paragraph.position(0, 0, 0, 0);
}
