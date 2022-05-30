function take_snapshot(){
    save('Summer_Me_Img.png');
}
function next(){
    window.location="index2.html";
}
noseX=0;
noseY=0;
lip_x=0;
lip_y=0;

function preload(){
    specks_disguise=loadImage('https://i.postimg.cc/9Qd7SrWD/summer-sunglasses-removebg-preview.png');
    lips_disguise=loadImage('https://i.postimg.cc/m2N6QxkC/lips-transparent-bg.png');
}
function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(specks_disguise, noseX, noseY, 80, 50);
}
function modelLoaded(){
   console.log("PoseNet is initialized");
}
function gotPoses(results){
   if(results.length>0){
       console.log(results);
       noseX=results[0].pose.rightEye.x-24;
       noseY=results[0].pose.rightEye.y-15;
       console.log("Nose x= "+noseX);
       console.log("Nose y= "+noseY);
   }
}
function take_snapshot(){
    save('Summer_Me_Img.png');
}
function next(){
    window.location="index2.html";
}