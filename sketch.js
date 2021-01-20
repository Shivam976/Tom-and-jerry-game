var ground,groundImage;
var tom,tomImage,tom_Animation,tom_Stop;
var jerry,jerryImage,jerry_Animation,jerry_Stop;
function preload() {
    //load the images here
  groundImage=loadImage("garden.png") 
  tomImage=loadImage("tomOne.png")
  jerryImage=loadImage("jerryOne.png")
  jerry_Animation=loadAnimation("jerryTwo.png","jerryThree.png")
  tom_Animation=loadAnimation("tomTwo.png","tomThree.png")
  tom_Stop=loadAnimation("tomFour.png")
  jerry_Stop=loadAnimation("jerryFour.png")
  
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    ground=createSprite(width/2,350,50,50)
    ground.addImage(groundImage)
    tom=createSprite(width-350,500)
    tom.addImage(tomImage)
    tom.scale=0.1
    jerry=createSprite(width-900,500)
    jerry.addImage(jerryImage)
    jerry.scale=0.1;
    //create tom and jerry sprites here

}

function draw() {
    
    background(0);

    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
tom.addAnimation("tomStop",tom_Stop)
tom.changeAnimation("tomStop")
jerry.addAnimation("jerryStop",jerry_Stop)
jerry.changeAnimation("jerryStop")
jerry.x=jerry.x-50
tom.velocityX=0;
jerry.velocityX=0;

}
    drawSprites();
    
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    jerry.addAnimation("teasing",jerry_Animation)
    jerry.changeAnimation("teasing")
    tom.velocityX=-5;
    tom.addAnimation("cat_running",tom_Animation)
    tom.changeAnimation("cat_running")
    tom.scale=0.1
}
  //For moving and changing animation write code here


}
