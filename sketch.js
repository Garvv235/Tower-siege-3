const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21, box22, box23, box24, box25;
var ball, ballp, score;
var score = 0;
var slingshot;

function preload()
{
  ballp = loadImage("hexagon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(390, 280, 300, 20);
  ground2 = new Ground(590, height/2-50, 200, 20);

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  slingshot = new Sling(this.ball, {x: 100, y: 200});

  box1 = new Box(300, 275, 30, 40);
  box2 = new Box(330, 275, 30, 40);
  box3 = new Box(360, 275, 30, 40);
  box4 = new Box(390, 275, 30, 40);
  box5 = new Box(420, 275, 30, 40);
  box6 = new Box(450, 275, 30, 40);
  box7 = new Box(480, 275, 30, 40);

  box8 = new Box(330, 235, 30, 40);
  box9 = new Box(360, 235, 30, 40);
  box10 = new Box(390, 235, 30, 40);
  box11 = new Box(420, 235, 30, 40);
  box12 = new Box(450, 235, 30, 40);

  box13 = new Box(360, 195, 30, 40);
  box14 = new Box(390, 195, 30, 40);
  box15 = new Box(420, 195, 30, 40);

  box16 = new Box(320, 155, 30, 40);

  box17 = new Box(530, 200, 30, 40);
  box18 = new Box(560, 200, 30, 40);
  box19 = new Box(590, 200, 30, 40);
  box20 = new Box(620, 200, 30, 40);
  box21 = new Box(650, 200, 30, 40);

  box22 = new Box(560, 160, 30, 40);
  box23 = new Box(590, 160, 30, 40);
  box24 = new Box(620, 160, 30, 40);

  box25 = new Box(590, 120, 30, 40);

  
}

function draw() {
  background(57,43,44);  
  Engine.update(engine);
  stroke("white");
  text("SCORE :" + score, 650, 40);
  drawSprites();
  ground1.display();
  ground2.display();
  fill(135, 205, 235);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill(255, 190, 200);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill(65, 220, 210);
  box13.display();
  box14.display();
  box15.display();
  fill(127, 127, 127);
  box16.display();
  fill(255, 190, 200);
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill(65, 220, 210);
  box22.display();
  box23.display();
  box24.display();
  fill(127, 127, 127);
  box25.display();

 box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

  slingshot.display();

  imageMode(CENTER);
  image(ballp, ball.position.x, ball.position.y, 40, 40);

}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
    background('yellow');
  }
  else{
    background('black');
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

