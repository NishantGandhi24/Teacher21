const Engine = Matter.Engine;
const World = Matter. World;
const Bodies = Matter. Bodies;

var ball,ground;
var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300,590,600,20);
  
}

function draw() {
  background("white"); 

  rectMode(CENTRE);
  Engine.update(engine);

  ground.display();

  drawSprites();
}