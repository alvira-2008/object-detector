img = "";
status = '';

function preload(){
    img = loadImage('Toys.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640, 420);

    fill("teal");
    noFill();
    stroke("teal");
    text("Emoji Pillow", 5, 120);
    rect(0, 100, 350, 200);

    fill("green");
    noFill();
    stroke("blue");
    text("Panda", 360, 120);
    rect(330, 100, 300, 200);
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