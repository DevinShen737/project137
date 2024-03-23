img = "";
status1 = "";
object = [];

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){

}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 420);

    if(status1 !="")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for (i = 0; i < object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_object").innerHTML = "Number of objects detected are : "+ object.length;

            fill(r,g,b);
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

function modelLoaded() {
    console.log("Model Loaded!")
    status1 = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

