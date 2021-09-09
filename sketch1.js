var gamestate="wait"
var level=0;
var count=0;

function preload(){

    waitimg=loadImage("movingbackground.gif")

    boyknifeimg = loadAnimation(
        "knife.png",
        "KNIFE2.png",
        "KNIFE3.png",
        "KNIFE4.png",
        "KNIFE6.png"
      );
    
    img=loadImage("video.gif")
    leftbuttonimg=loadImage("dancingleftarrow.gif")
    rightbuttonimg=loadImage("dancingrightarrow.gif")

    startimg= loadImage("start.gif")

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
}

function setup(){
createCanvas(windowWidth,windowHeight)

wait= createSprite(windowWidth/2,windowHeight/2)
wait.addImage(img)
wait.visible=false
wait.scale=3

leftbutton=createSprite(100,100,50,50)
leftbutton.addImage(leftbuttonimg)
leftbutton.scale=0.5
leftbutton.visible=false

rightbutton=createSprite(windowWidth-100,100,50,50)
rightbutton.addImage(rightbuttonimg)
rightbutton.scale=0.5


start=createSprite(windowWidth/2,windowHeight-windowHeight/4,50,50)
start.addImage(startimg)
start.scale=0.5
start.visible=false

boy = createSprite(windowWidth / 8, 100);
  endSprite = createSprite(windowWidth/1.15, 100,20, 20)
  endSprite.visible=false
  boy.addAnimation("running", boyimg);
  boy.addAnimation("boyjetpack", boyjetpackimg);
  boy.addAnimation("boyknife", boyknifeimg);
  boy.addAnimation("boygun", boygunimg);
  boy.setCollider("circle", 0, 0, 30);
  boy.visible=false
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
  startButton.visible=false
  playAgainButton = createSprite(windowWidth/2, windowHeight/2, 100, 50)
  playAgainButton.visible=false

}

function draw(){

if (gamestate==="wait"){
   wait.visible=true
     rightbutton.visible=true
     leftbutton.visible=false
     start.visible=false
     boy.visible=false
     reactionTimeButton1.visible=false
     reactionTimeButton2.visible=false
     reactionTimeButton3.visible=false
     startButton.visible=false
    
}

if (mousePressedOver(rightbutton)){
    gamestate="next"
    
}

if (mousePressedOver(leftbutton)){
    gamestate="wait"
    
}


if (mousePressedOver(start)){
    gamestate="play"
    boy.visible=false
     reactionTimeButton1.visible=false
     reactionTimeButton2.visible=false
     reactionTimeButton3.visible=false
     startButton.visible=false
}


if (gamestate==="next"){
    background("pink")
    
    leftbutton.visible=true
    wait.visible=false
    start.visible=true
    textSize(50)
    fill(0)
    text("How to Play the Game", windowWidth/2-200,100)
    
}

if (gamestate==="play"){
    background("yellow")
    
    //leftbutton.visible=false
    rightbutton.visible=false

    wait.visible=false
    start.visible=false
boy.visible=true

    //add playcodes from Yuvraj's sketch file here
    boy.changeAnimation("running", boyimg)
    reactionTimeButton1.addImage(gunimg)
    reactionTimeButton2.addImage(knifeimg)
    reactionTimeButton3.addImage(jetpackimg)
    reactionTimeButton1.visible=true
reactionTimeButton2.visible=false
reactionTimeButton3.visible=false
  
      boy.velocityX = 10
      count=count+1
      //counter=counter-1;
      level=1
    
    if(mousePressedOver(reactionTimeButton1)){
      boy.changeAnimation("boygun", boygunimg)
      level=2
      count=count+1
      
  
    }
    if(level===2){
      reactionTimeButton1.visible=false;
      reactionTimeButton2.visible=true
      reactionTimeButton3.visible=false;
      boy.changeAnimation("boygun", boygunimg)
  boy.velocityX=12
      count=count+1
      //counter=counter-1;
  
    }
    if(mousePressedOver(reactionTimeButton2)){
      boy.changeAnimation("boyknife", boyknifeimg)
      level=3
      count=count+1
      //counter=counter-1;
  
    }
    if(level===3){
      reactionTimeButton1.visible=false;
      reactionTimeButton2.visible=false;
      reactionTimeButton3.visible=true
      count=count+1
      boy.velocityX=13
      boy.changeAnimation("boyknife", boyknifeimg)
  
      //counter=counter-1;
  
    }
    if(mousePressedOver(reactionTimeButton3)){
      boy.changeAnimation("boyjetpack", boyjetpackimg)
      reactionTimeButton1.visible=false;
      reactionTimeButton2.visible=false;
      reactionTimeButton3.visible=false
      level=4
      count=count+1
      //counter=counter-1;
    }
 
   if(level===4){
      jetpackimg.visible=false;
      boy.changeAnimation("boyjetpack", boyjetpackimg)
  
  if(level===4 && boy.isTouching(endSprite)){
    text("REACTION TIME IN FRAMECOUNT: " + count/3, windowWidth/2, windowHeight/2)
    boy.changeAnimation("boyjetpack", boyjetpackimg)
  endSprite.visible=false
    text("YOU WIN", windowWidth/2, windowHeight/3)
  boy.velocityX=0
  }
    } else if(boy.isTouching(endSprite)){
      boy.velocityX=0
      textSize(50)
      fill("red")
      text("YOU LOSE", windowWidth/2, windowHeight/3)
      playAgainButton.visible=true
    }
    if(mousePressedOver(playAgainButton)){
      level=1   
    }
    
  }


drawSprites()

}