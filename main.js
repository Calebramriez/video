img="";
status="";
objects=[];
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
video=createCapture(VIDEO);
video.size(640,420);
video.hide();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting object";
}
function draw(){
image(video,0,0,640,420);
r=random(255);
g=random(255);
b=random(255);
if(status!=""){
objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="status:objects Detected";
document.getElementById("number_of_objects").innerHTML="number of objects detected:"+objects.lenght;
fill(r,g,b);
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}
function modelLoaded(){
console.log("modelLoaded");
status=true;

}
function gotResult(error,results){
if(error){
console.log(error);
}
console.log(results);
objects=results;
}