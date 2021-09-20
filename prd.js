var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
    
  drawSprites();
  text("Score: "+ score, 300,50);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
}

function preload(){
  //load your images here 
  backgroundImage=loadImage("background0.png");
   bowImage=loadImage("bow0.png")
   red_balloonImage=loadImage("red_balloon0.png")
   green_balloonImage=loadImage("green_balloon0.png")
   blue_balloonImage=loadImage("blue_balloon0.png")
   pink_balloonImage=loadImage("pink_balloon0.png")
   arrowImage=loadImage("arrow0.png")
 }
 
 function setup() {
   createCanvas(600, 600);
    //add code here
   background=createSprite(0,0,600,600);
   background.addImage(backgroundImage);
   background.scale=2.5
   
   bow=createSprite(480,220,20,50);
   bow.addImage(bowImage);
   bow.scale=1
   
   for(var i=60; i<390; i=i+60){
     red_balloon=createSprite(50,i,1,1);
     red_balloon.addImage(red_balloonImage);
     red_balloon.scale=0.1
     
   }
   
   for(var i= 110; i<300; i=i+60){
     green_balloon=createSprite(100,i,10,10);
     green_balloon.addImage(green_balloonImage);
     green_balloon.scale=0.1
     
   }
   
   for(var i=160; i<250; i=i+60){
     blue_balloon=createSprite(150,i,10,10);
     blue_balloon.addImage(blue_balloonImage);
     blue_balloon.scale=0.1
     
   }
   
   for(var i=200; i<250; i=i+60){
     pink_balloon=createSprite(200,i,10,10);
     pink_balloon.addImage(pink_balloonImage);
     pink_balloon.scale=1.2
     
   } 
 }
 
 function draw() {
 //add code here
 }
