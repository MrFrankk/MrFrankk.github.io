function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES)
}

function draw() {
    background(255, 255, 250);
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    text(h, 30, 90);
    text(m, 60, 90);
    text(s, 90, 90);

    fill(255, 255, 255);
    circle(200, 200, 150);
    
    fill(0, 0, 255);
    arc(200, 200, 150, 150, s*6-90, s*6-89);

    fill(0, 255, 0);
    arc(200, 200, 140, 140, m*6-90, m*6-89);

    fill(255, 0, 0);
    arc(200, 200, 130, 130, h*30-90, h*30-89);
}