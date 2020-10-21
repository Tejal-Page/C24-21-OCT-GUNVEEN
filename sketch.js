//calling engine, world and bodies from matter.js and renaming them
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//declaring the variable globally
var engine, world, box1, box2, pig1, log1, bird1;
var ground;
var box3, box4, log2, pig2;

function setup() {
  createCanvas(1200,800);
  //creating engine
  engine=Engine.create();
  //attaching world to the engine
  world=engine.world;
  
  ground = new Ground(200, 790, 1200, 20);
  
  box1 = new Box(200, 500, 50, 50);
  box2 = new Box(400, 500, 50, 50);
  box3 = new Box(200, 350, 50, 50);
  box4 = new Box(400, 350, 50, 50);

  pig1 = new Pig(300, 500);
  pig2 = new Pig(300, 350);

  log1 = new Log(300, 420, 300, PI/2);
  log2 = new Log(300, 300, 300, PI/2);

  bird1 = new Bird(100, 200);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  bird1.display();

  ground.display();
}