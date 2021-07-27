var backgroundimg;
var boyimg,boy;
var boximg;

function preload(){
boyimg = loadAnimation("images/Runner-1.png","images/Runner-2.png");
backgroundimg = loadImage("images/Road.jpg");
boximg = loadImage("images/box.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight-200);
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
 bg.addImage(backgroundimg)
 bg.scale = 1.8
 bg.velocityY = 2


  boy = createSprite(600,600)
  boy.addAnimation("boy",boyimg)
  boy.scale = 0.1
 // boy.velocityY = -2.1

  //edges = createEdgeSprites()

}

function draw() {
 background(255);
  if(bg.y>=displayHeight-200)  {
    bg.y = displayHeight/4 - 200
  
  }
console.log(bg.y)


  // camera.position.y = boy.y
   //camera.position.x = boy.x

  if(keyDown("left")){
    boy.x = boy.x -10
  }
  if(keyDown("right")){
    boy.x = boy.x +10
  }
 // if(keyDown("space")){
  //  boy.y = boy.y-2
//  }
  //boy.velocityY = boy.velocityY+0.8
 // boy.collide(edges[3])

  spawnbox()
 spawnvirus()
  drawSprites();

}
function spawnbox(){
  if(frameCount%100 === 0){
    box = createSprite(random(330,displayWidth-330),-10)
    box.addImage(boximg)
    box.scale = 0.3
    box.velocityY = 2
    box.lifetime = displayHeight/2
  }
}



function spawnvirus(){
  if(frameCount%80 === 0){
   virus = createSprite(random(330,displayWidth-330),displayHeight+20,20,20)
    //virus.addImage()
   // virus.scale = 0.9
    virus.velocityY = -4
    virus.lifetime = displayHeight/4
    virus.shapeColor = "red"
  }
}





