img = "";
status = '';

function preload(){
    img = loadImage('Balcony.jpg');
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
    text("Plant", 5, 200);
    rect(5, 200, 150, 150);

    fill("black");
    noFill();
    stroke("black");
    text("Shoe Rack", 310, 20);
    rect(300, 0, 280, 400);
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