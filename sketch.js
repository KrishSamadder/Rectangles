var fixedRect,movingRect;
var object1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect= createSprite(400, 200, 80, 30);
object1=createSprite(500, 300, 50, 50);
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

isTouching(movingRect, object1);

drawSprites();
}