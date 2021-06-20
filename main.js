function preload(){

}

function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.size(600,400);
    camera.hide();
}

function draw(){
    image(camera,85,85,445,235);
    fill("#4287f5");
    stroke("#4287f5");
    circle(50,50,70);
    circle(550,50,70);
    circle(50,350,70);
    circle(550,350,70);
    fill("#e100ff");
    stroke("#e100ff");
    rect(85,30,430,40);
    rect(85,335,430,40);
    rect(30,83,40,235);
    rect(533,83,40,235);
}

function take_snapshot(){
    save('frame.png');
}