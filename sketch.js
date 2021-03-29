var mouse, cat;
var mouse1Img, mouse2Img, mouse3Img, cat1Img, cat2Img, cat3Img, BGImg;

function preload() {
    //load the images here
    mouse1Img = loadAnimation("images/mouse1.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Img = loadAnimation("images/mouse4.png");
    cat1Img = loadAnimation("images/cat1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img = loadAnimation("images/cat4.png");
    BGImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(500,400,10,10);
    mouse.addAnimation(mouse1Img);

    cat = createSprite(600,400,10,10);
    cat.addAnimation(cat1Img);
}

function draw() {

    background("images/garden.png");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.velocityX = 0;
       cat.addAnimation("catRunning",cat3Img);
       cat.changeAnimation("catRunning");
       mouse.addAnimation("mice",mouse3Img);
       mouse.changeAnimation("mice");
    }
    
    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouse2Img);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
      cat.velocityX = -5;
      cat.addAnimation("catRunning",cat2Img);
      cat.changeAnimation("catRunning");
      cat.frameDelay = 25;


  }

}
