const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

var groundObject;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 270;

function setup() {
  createCanvas(570,800);

  engine = Engine.create();
  world = engine.world; 

  //Bodies are being created
  groundObject = new Ground(width/2, 785, width, 10);

  for(var j = 40; j <= width; j+=50) {
    plinkos.push(new Plinko(j, 75));
  }

  for(var k = 15; k <= width-10; k+=50) {
    plinkos.push(new Plinko(k, 175));
  }

  for(var m = 40; m <= width; m+=50) {
    plinkos.push(new Plinko(m, 275));
  }

  for(var p = 15; p <= width-10; p+=50) {
    plinkos.push(new Plinko(p, 375));
  }  

  for(var i = 0; i <= width; i+=80){
    divisions.push(new Divisions(i, (height-divisionHeight/2)-10, 10, divisionHeight));
  }

  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(0); 

  groundObject.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for(var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();
  }

  for(var a = 0; a < particles.length; a++) {
    particles[a].display();
  }

  for(var i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }

  drawSprites();
}