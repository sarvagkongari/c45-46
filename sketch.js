var jack,jackImg;
var beanStalk;
var bgImg,beanstalkImg;
var eggImg;
var spikes,spikesImg
var gameState="start"
function preload(){
bgImg=loadImage("bg.jpg")
beanstalkImg=loadImage("beanstalkpic.png")
eggImg=loadImage("goldegg.png")
spikesImg=loadImg("spikes.jpg")
}

function setup(){
createCanvas(800,400);
beanstalk=createSprite(400,200,50,700);
beanstalk.addImage(beanstalkImg)
beanstalk.shapeColor="green";
beanstalk.velocityY=3
jack=createSprite(365,350,20,50);
}

function draw(){
if(gameState==="start"){
background("#000066")

text("click space to begin",350,70)
textSize(30)
fill("gold")
text("JACK AND THE BEANSTALK",200,200)
text("by STAR",550,320)
if(keyCode===32){
gameState="play"
}
}
if(gameState==="play"){
background("lightblue");
image(bgImg,-100,0,1000,400)

if(beanstalk.y>250){
beanstalk.y=200
}
if(keyDown(UP_ARROW)){
jack.y-=3
}
if(keyDown(DOWN_ARROW)){
jack.y+=3
}
if(keyDown(RIGHT_ARROW)){
jack.x=440
}
if(keyDown(LEFT_ARROW)){
jack.x=365
}
branches();
goldenEgg();
camera.position.x=jack.x
text(mouseX+", "+mouseY,mouseX,mouseY)
drawSprites();
}
}

function branches(){
 if(frameCount%60===0){
    var branch=createSprite(300,0,80,10)
    var position=[350,450]
    branch.x=random(position)
    branch.velocityY=2
 }
}
function goldenEgg(){
   if(frameCount%200===0){
      var egg=createSprite(200,0,10,10)
      egg.addImage(eggImg)
      egg.velocityY=1
      egg.scale=0.05
      var position=[380,420]
      egg.x=random(position)
   }
}