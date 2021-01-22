var bird,birdupdown;
var cloud,cloudImage;
var num;
var cloudsGroup;
var score=0;
var obstacle1,obstacle1im;
var obstacle2,obstacle2im;
var obstacleGroup2;
var PLAY=1;
var END=0;
var gameState=PLAY;
var gameOver;
var invisible;
var obstacleGroup1;
function preload(){
  birdupdown=loadAnimation("wingdown.png","wingup.png");
  cloudImage=loadImage("clouds.png");
  obstacle1im=loadImage("obstacle.png");
  obstacle2im=loadImage("obstacle2.png");
  gameOver=loadAnimation("gameOver.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  bird=createSprite(windowWidth/2,windowHeight/2,20,20);
  bird.addAnimation("bird",birdupdown);
  bird.scale=windowWidth/850;
  cloudsGroup=createGroup();
  obstacleGroup1=createGroup();
  obstacleGroup2=createGroup();
  
  invisible=createSprite(0,bird.y+100,windowHeight*7,3)
  invisible.visible=false;
}

function draw() {
  background("white");
  num=Math.round(random(1,2));
  if(gameState==PLAY){
    if(frameCount%120==0){
    switch(num){
      case 1:
        ob1()
        
        break;
      case 2:
        ob2()
        
      
    }
    }
    if(obstacleGroup1.isTouching(invisible)){
      score+=1;
      obstacleGroup1.destroyEach();
    } 
    if(obstacleGroup2.isTouching(invisible)){
      score+=1;
      obstacleGroup2.destroyEach();
    } 
    
    if(keyDown("right")||touches.length>windowWidth/2){
      bird.x=bird.x+10;
    }
    if(keyDown("left")||touches.length<windowWidth/2){
      bird.x=bird.x-10;
    }
    
    
    text("Score: "+score,windowWidth/2.5,30);
  }
  if(bird.isTouching(obstacleGroup1)||bird.isTouching(obstacleGroup2)||bird.x<25||bird.x>windowWidth-35){
    bird.addAnimation("bird",gameOver);
    bird.x=windowWidth/2;
    bird.y=windowHeight/2;
    gameState=END;
  }
  if(gameState==END){
    obstacleGroup1.destroyEach();
    obstacleGroup2.destroyEach();
  }
  textSize(30);
  
  drawSprites();
  
}

function ob1(){
  obstacle1=createSprite(120,0,40,40);
      obstacle1.x=Math.round(random(0,windowWidth));
      obstacle1.velocityY=2;
      obstacle1.lifetime=5008;
      obstacle1.addImage("obstacle1",obstacle1im);
      obstacle1.scale=windowWidth/700;
      obstacleGroup1.add(obstacle1);
      
  
}
function ob2(){
    obstacle2=createSprite(120,0,100,40);
      obstacle2.x=Math.round(random(0,windowWidth));
      obstacle2.velocityY=2;
      obstacle2.lifetime=5008;
      obstacle2.addImage("obstacle2",obstacle2im);
      obstacle2.scale=windowWidth/650;  
      obstacleGroup2.add(obstacle2)
  
}