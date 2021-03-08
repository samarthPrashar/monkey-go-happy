
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground 
var Survival_time = 0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
 

  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("running" , monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  
  
}


function draw() {
  
  background("white")

  if(ground.x > 0){
    ground.x = ground.width/2
  }  
  
  if(keyDown("space")){
    monkey.y = monkey.y - 12
  }
   
  monkey.velocityY = monkey.velocityY + 0.3;
  
  monkey.collide(ground);
  
  fruits();
  
  spown_obstacle();
  
  drawSprites();
  
  stroke("white")
  textSize(20);
  fill("white")
  
  
  stroke("black")
  textSize(20)
  fill("black")
  Survival_time = Math.ceil(frameCount/frameRate())
  text("Survival_time: " + Survival_time,100,50 );
  
}

function fruits (){
  var X = Math.round(random(120,200))
  
  if(World.frameCount % 80 === 0){
    banana = createSprite(600,X)
    banana.addImage(bananaImage)
    banana.velocityX = -3
    banana.lifeTime = 200
    banana.scale = 0.1
  }
}

function spown_obstacle(){
  if(World.frameCount % 300 === 0){
      obstacle = createSprite(600,315)
      obstacle.addImage("obs",obstacleImage)
      obstacle.velocityX = -3
      obstacle.lifeTime = 200
      obstacle.scale = 0.2
    
    
  }
  
}






