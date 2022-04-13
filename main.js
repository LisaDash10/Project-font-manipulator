difference = 0;
leftWristX = 0;
rightWristX = 0;

function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 300);

    canvas = createCanvas(500, 500);
    canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotPoses(results) {
    if(results.length >0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);

    }
}

function draw() {
    background('#add8e6');
    document.getElementById("font_size").innerHTML = difference;
    textSize(difference);
    fill('#ffc0cb');
    text('Lisa', 200, 200);   
}
