img = "";
status = "";

function preload(){
    img = loadImage("house.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    object = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Counch", 45, 150);
    noFill();
    stroke("red");
    rect(30, 120, 450, 200 );

    fill("red");
    text("TV", 320, 120);
    noFill();
    stroke("red")
    rect(300, 90, 270, 200 );
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    object.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}