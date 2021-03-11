img = "";
status = '';

function preload(){
    img = loadImage('Bottles.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("skyblue");
    noFill();
    stroke("skyblue");
    text("Bottle 1", 110, 20);
    rect(100, 0, 200, 400);

    fill("blue");
    noFill();
    stroke("blue");
    text("Bottle 2", 310, 20);
    rect(300, 0, 200, 400);
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);

    objects = results;
}

function back(){
    window.location = "home.html";
}