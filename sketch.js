 var runningrect,fixedrect;
 function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  runningrect= createSprite(400,200,100,50);
  runningrect.shapeColor="red";
  
}

function draw() {
  background(0); 
  runningrect.x = mouseX;
  runningrect.y = mouseY;
   
  if(fixedrect.y-runningrect.y<fixedrect.height/2+runningrect.height/2
    && fixedrect.x-runningrect.x<fixedrect.width/2+runningrect.width/2
    && runningrect.y-fixedrect.y<runningrect.height/2+fixedrect.height/2
    && runningrect.x-fixedrect.x<fixedrect.width/2+runningrect.width/2) {
    fixedrect.shapeColor="red";
    runningrect.shapeColor="green";
  }else{
    runningrect.shapeColor="red";
    fixedrect.shapeColor="green";
  }
  

  drawSprites();

}