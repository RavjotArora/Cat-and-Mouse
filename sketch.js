var cat, catImg;
var catImg2,catImg3;
var catImg4;
var mouse, mouseImg;
var mouseImg2, mouseImg3;
var mouseImg4;
var garden, gardenImg;

function preload() {
    //load the images here
    catImg = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg4 = loadAnimation("images/mouse4.png");
    gardenImg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500,400,20,20);
    garden.addImage(gardenImg);

    mouse = createSprite(200,600,20,20);
    mouse.addAnimation("standing",mouseImg);
    mouse.scale=0.15;
    
    cat = createSprite(800,600,20);
    cat.addAnimation("still", catImg);
    cat.scale=0.2;

    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.velocityX = 0;
       cat.addAnimation("arrived",catImg4);
       cat.changeAnimation("arrived");

       mouse.addAnimation("seenCat", mouseImg2);
       mouse.changeAnimation("seenCat");
    }

    drawSprites();

}
  

function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
    
    mouse.addAnimation("mouseTeasing", mouseImg4);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    
}

 if(keyCode === LEFT_ARROW){
    cat.velocityX=-3;

    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning"); 

}

  


}
