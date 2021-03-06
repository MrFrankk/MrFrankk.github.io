function setup(){
    createCanvas(400, 400);
    mouseX=200;
    mouseY=200;
}

function draw(){
    background(220);

    
    //volto del robot 

    //faccia
    fill(150);
    square(mouseX - 25, mouseY - 20, 50);

    //occhio sinitro 
    fill(0);
    circle(mouseX - 10, mouseY - 10, 5);
    
    //occhio destro 
    circle(mouseX + 10, mouseY - 10, 5);

    //naso 
    fill(355, 0, 0);
    square(mouseX - 2, mouseY, 5);

    //bocca del robot 
    fill(200);
    rect(mouseX -15 , mouseY + 15, 30, 5);

    //antenna sinitra 
    line(mouseX - 20, mouseY - 20, mouseX - 20, mouseY - 40);
    fill(0);
    circle(mouseX - 20, mouseY - 40, 5);
    
    //antenna destra
    line(mouseX + 20, mouseY - 40, mouseX + 20, mouseY - 20);
    fill(0);
    circle(mouseX + 20, mouseY - 40, 5);

    //corpo del robot

    //busto
    fill(150);
    rect(mouseX - 29, mouseY + 30, 60, 90);

    //braccio sinitro
    rect(mouseX - 79, mouseY + 50, 50, 20);
    
    //braccio destro
    rect(mouseX + 31, mouseY + 50, 50, 20);

    //ruota sinistra
    fill(0);
    circle(mouseX - 30, mouseY + 120, 30, 70);
    //interno ruota sinitra 
    fill(192,192,192);
    circle(mouseX - 30, mouseY + 120, 15, 70);

    //ruota destra
    fill(0);
    circle(mouseX + 30, mouseY + 120, 30, 70);
    //interno ruota destra
    fill(192,192,192);
    circle(mouseX + 30, mouseY + 120, 15, 70);
}