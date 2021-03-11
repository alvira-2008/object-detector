img = "";
status = '';

function preload(){
    img = loadImage('Bedroom.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("blue");
    noFill();
    stroke("blue");
    text("Bed", 5, 65);
    rect(0, 50, 550, 300);
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