nosex=0;
nosey=0;
difference=0;
rightWristX = 0;
leftWristX=0;

function setup(){
    canvas= createCanvas(550,550);
        canvas.position(560,150);
        video=createCapture(VIDEO);
        video.size(550,550);
        poseNet=ml5.poseNet(video,modelloaded);
        poseNet.on('pose', gotPoses); 
}
function modelloaded(){
    console.log('posenet is initialized');

}
function gotPoses(results){
    if (results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey =results[0].pose.nose.y;
        console.log("noseX =" + nosex +"noseY =" + nosey)

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX =results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWristX);

        console.log("leftWristX" + leftWristX + "rightWristX =" + rightWristX + "difference =" + difference);
    }
}
function draw(){

    background("blue");

    document.getElementById("square_side").innerHTML = "Width and Height of a square will be =" + difference + "px";
    square(nosex,nosey,difference);
}