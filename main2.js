function take_snapshot(){
    save('Sunglasses_Me_Img.png');
}
function back(){
    window.location="index.html";
}
mustache_x=0;
mustache_y=0;
cap_x=0;
cap_y=0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    cap = loadImage('https://i.postimg.cc/QN0VyCFM/cap-removebg-preview-1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,mustache_x,mustache_y,50,35);
    image(cap, cap_x, cap_y, 80, 60);
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        mustache_x = results[0].pose.nose.x-25;
        console.log("nose y: "+results[0].pose.nose.y);
        mustache_y = results[0].pose.nose.y;
        cap_x=results[0].pose.head
    };
    if(results.length > 0){
        console.log(results);
        console.log("nose x: "+results[0].pose.leftEar.x);
        cap_x = results[0].pose.nose.x-40;
        console.log("nose y: "+results[0].pose.leftEar.y);
        cap_y = results[0].pose.nose.y-90;
    };
}