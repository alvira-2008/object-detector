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

    for(i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML = "Status: Objects Detected";
        document.getElementById("number_objects").innerHTML = "Number of Objects Detected are: " + objects.length;          
        fill("blue");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("blue");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
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