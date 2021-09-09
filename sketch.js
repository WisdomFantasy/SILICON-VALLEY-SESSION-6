var boyimg, boy;
//var gameState = "wait";
//var counter=90;
var count=0
var gameState=0
//var counter=100
//var timeDelay=0;
//var randTime=0;
var count = 0;
function preload() {

  //waitimg=loadImage("level1.gif")
  boyknifeimg = loadAnimation(
    "knife.png",
    "KNIFE2.png",
    "KNIFE3.png",
    "KNIFE4.png",
    "KNIFE6.png"
  );



  boyjetpackimg = loadAnimation("JETPACK1.png", "JETPACK2.png", "JETPACK3.png");
  boygunimg = loadAnimation("GUN1.png", "GUN2.png", "GUN3.png");
  jetpackimg = loadImage("JETPACKICON.png");
  knifeimg = loadImage("KNIFEICON.png");
  gunimg = loadImage("GUNICON.png");
  boyimg = loadAnimation(
    "RUNNING1.png",
    "RUNNING2.png",
    "RUNNING3.png",
    "RUNNING4.png",
    "RUNNING5.png",
    "RUNNING6.png",
    "RUNNING7.png"
  );
  bg = loadImage("bg3.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  boy = createSprite(windowWidth / 8, 100);
  endSprite = createSprite(windowWidth/1.15, 100,20, 20)
  boy.addAnimation("running", boyimg);
  boy.addAnimation("boyjetpack", boyjetpackimg);
  boy.addAnimation("boyknife", boyknifeimg);
  boy.addAnimation("boygun", boygunimg);
  boy.setCollider("circle", 0, 0, 30);
  randomPositionX = Math.round(50, windowWidth-50)
  randomPositionY = Math.round(50, windowHeight-50)
  randomPositionX2 = Math.round(100, windowWidth-100)
  randomPositionY2 = Math.round(100, windowHeight-100)
  randomPositionX3 = Math.round(200, windowWidth-200)
  randomPositionY3 = Math.round(200, windowHeight-200)
  reactionTimeButton1 = createSprite(randomPositionX3, randomPositionY3, 20, 20)
  reactionTimeButton1.visible=false;
  reactionTimeButton2 = createSprite(600,600, 20, 20)
  reactionTimeButton2.visible=false;
  reactionTimeButton3 = createSprite(Math.round(100, windowWidth-100), Math.round(100, windowHeight-100), 20, 20)
  reactionTimeButton3.visible=false;
  startButton = createSprite(windowWidth/2, windowHeight/2, 100, 50)
  playAgainButton = createSprite(windowWidth/2, windowHeight/2, 100, 50)
  playAgainButton.visible=false
}
//boy.visible=false

  //jetpack = createSprite(windowWidth/1.2, 100);
  //jetpack.addImage(jetpackimg);
  //jetpack.setCollider("circle", 0, 0, 40);
//jetpack.visible=false

  /*knife = createSprite(windowWidth/2, 100);
  knife.addImage(knifeimg);
  knife.setCollider("circle", 0, 0, 40);
//knife.visible=false

  gun = createSprite(windowWidth/6, 100);
  gun.addImage(gunimg);
  gun.setCollider("circle", 0, 0, 40);
//gun.visible=false

  //about = createSprite(100, 100, 50, 50);
  //story = createSprite(100, 200, 50, 50);
  forward = createSprite(windowWidth - 100, 100, 50, 50);
  backward = createSprite(windowWidth - 100, 200, 50, 50);
  startButton = createSprite(windowWidth / 2, windowHeight / 2, 50, 20);
  startButton.shapeColor = "white";
  //randPosX = Math.round(random( 100, windowWidth - 100));
  //randPosY = Math.round(random(100, windowHeight - 100));
  //randPosX2 = Math.round(random(100, windowWidth - 100));
  //randPosY2 = Math.round(random(100, windowHeight - 100));



  //reactionTimeButton = createSprite(randPosX, randPosY, 50, 50);
  //reactionTimeButton2 = createSprite(randPosX2, randPosY2, 50, 50);
  //reactionTimeButton2.visible=false;
}

*/function draw() {
  background("black");
  boy.changeAnimation("running", boyimg)
  reactionTimeButton1.addImage(gunimg)
  reactionTimeButton2.addImage(knifeimg)
  reactionTimeButton3.addImage(jetpackimg)

  if(mousePressedOver(startButton)){
    startButton.visible=false;
    boy.velocityX = 10
    reactionTimeButton1.visible=true;
    count=count+1
    //counter=counter-1;
    gameState=1
  }
  if(mousePressedOver(reactionTimeButton1)){
    boy.changeAnimation("boygun", boygunimg)
    gameState=2
    count=count+1

  }
  if(gameState==2){
    reactionTimeButton1.visible=false;
    reactionTimeButton2.visible=true
    boy.changeAnimation("boygun", boygunimg)
boy.velocityX=12
    count=count+1
    //counter=counter-1;

  }
  if(mousePressedOver(reactionTimeButton2)){
    boy.changeAnimation("boyknife", boyknifeimg)
    gameState=3
    count=count+1
    //counter=counter-1;

  }
  if(gameState==3){
    reactionTimeButton2.visible=false;
    reactionTimeButton3.visible=true
    count=count+1
    boy.velocityX=13
    boy.changeAnimation("boyknife", boyknifeimg)

    //counter=counter-1;

  }
  if(mousePressedOver(reactionTimeButton3)){
    boy.changeAnimation("boyjetpack", boyjetpackimg)
    reactionTimeButton3.visible=false
    gameState=4
    count=count+1
    //counter=counter-1;
  }
  if(gameState==4){
    jetpackimg.visible=false;
    boy.changeAnimation("boyjetpack", boyjetpackimg)

if(gameState==4 && boy.isTouching(endSprite)){
  text("REACTION TIME IN FRAMECOUNT: " + count/3, windowWidth/2, windowHeight/2)
  boy.changeAnimation("boyjetpack", boyjetpackimg)
endSprite.visible=false
  text("YOU WIN", windowWidth/2, windowHeight/3)
boy.velocityX=0
}
  } else if(boy.isTouching(endSprite)){
    boy.velocityX=0
    text("YOU LOSE", windowWidth/2, windowHeight/3)
    playAgainButton.visible=true
  }
  if(mousePressedOver(playAgainButton)){
    gameState=1   
  }
//text("kwfhkwfjhwfkjhf" + counter, 200, 200)
  
 /*if(gameState==="wait"){
   background("pink")
   boy.visible=true
   gun.visible=true
   knife.visible=true
   jetpack.visible=true
  //  gun.addImage(gunimg)
  }*/


  /*if (boy.isTouching(knife)&&reactionTimeButton.visible===false) {
    boy.changeAnimation("boyknife", boyknifeimg);
    boyimg.velocityX = 10
    reactionTimeButton2.visible=true
  } else if(boy.isTouching(knife)&&reactionTimeButton.visible===true){
    boyimg.velocityX=0
    text("YOU LOSE", windowWidth/2, windowHeight/2)

  }
  if (boy.isTouching(jetpack)&&reactionTimeButton2.visible===false) {
    text("LEVEL 1 COMPLETE", windowWidth/2, windowHeight/2)
    boyimg.velocityX=0

  } else if(boy.isTouching(jetpack)&&reactionTimeButton2.visible===true){
    boyimg.velocityX=0
    text("YOU LOSE", windowWidth/2, windowHeight/2)

  }

  if (boy.isTouching(gun)) {
    boy.changeAnimation("boygun", boygunimg);
  }
  if (mousePressedOver(startButton)) {
    startButton.visible = false;
    reactionTimeButton.visible = true;
    boy.velocityX = 8;
count=count-1
console.log(count)
text("")
  }
  if ((reactionTimeButton.visible = true)) {
    count = count + 1;
  }
  if ((reactionTimeButton2.visible = true)) {
    count = count + 1;
  }
  if (mousePressedOver(reactionTimeButton)) {
    reactionTimeButton.visible = false;
  }
  if (mousePressedOver(reactionTimeButton2)) {
    reactionTimeButton2.visible = false;
  }
  text("REACTION TIME IN MS: " + count/3);

//if(boy.isTouching())*/
  drawSprites();
}
