const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand,s2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17;
var b18,b19,b20,b21,b22,b23;
var b24,b25,b26,b27;
var b28,b29,b30;
var trigger;
var sling;
var score=0;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
    world = engine.world;

    stand=new Ground(550,300,340,20);
    s2=new Ground(850,150,200,20);
  //boxes of s2
    b1=new Box(770,115);
    b2=new Box(810,115);
    b3=new Box(850,115);
    b4=new Box(890,115);
    b5=new Box(930,115);
    b6=new Box(810,80);
    b7=new Box(850,80);
    b8=new Box(890,80);
    b9=new Box(850,50);

    //boxs of stand
    b10=new Box(400,270);
    b11=new Box(440,270);
    b12=new Box(480,270);
    b13=new Box(520,270);
    b14=new Box(560,270);
    b15=new Box(600,270);
    b16=new Box(640,270);
    b17=new Box(680,270);
   // second row
   b18=new Box(440,235);
   b19=new Box(480,235);
   b20=new Box(520,235);
   b21=new Box(560,235);
   b22=new Box(600,235);
   b23=new Box(640,235);
  
   //third row
   b24=new Box(480,200);
   b25=new Box(520,200);
   b26=new Box(560,200);
   b27=new Box(600,200);
   //forth row
   b28=new Box(520,170);
   b29=new Box(560,170);
   b30=new Box(545,135);
   trigger=new Trigger(200,200);
  sling=new SlingShot(trigger.body,{x:200,y:200});
}


function draw() {
 background("white");
  
  Engine.update(engine); 
  stand.display();
  s2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  async();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  fill("red");
  text("score:"+score,100,100);
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  trigger.display();
  sling.display();
  fill("red");
  text("press space to play again",200,100);

backGround();
  drawSprites();
}function mouseDragged(){
  Matter.Body.setPosition(trigger.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
   sling.attach(trigger.body);
    Matter.Body.setPosition(trigger.body,{x:200,y:200});
  }
}
async function backGround(){
  var pause= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  
  var pauseJson= await pause.json();
  var datetime=pauseJson.datetime;
  var hour=datetime.slice(11,13);

  if(hour=>6&&hour<=15){
    backGround("yellow");
  }else{
    background("blue");
  }



  
}