const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var div1,div2,div3,div4,div5,div6,div7;
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  

  

  ground = new Ground(240,height,480,20);

  div1=new Divisions(5,700,10,300);
  div2=new Divisions(75,700,10,300);
  div3=new Divisions(150,700,10,300);
  div4=new Divisions(230,700,10,300);
  div5=new Divisions(310,700,10,300);
  div6=new Divisions(390,700,10,300);
  div7=new Divisions(475,700,10,300);

  

  
 
}

function draw() {
  background(0);  
  ground.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();

  for(var j=40; j <=width; j=j+50){
     plinkos.push(new Plinko(j,75));
   }

   for (var j=20; j < plinkos.length; j++){ 
     plinkos[j].display(); 
    }

  
  drawSprites();
}