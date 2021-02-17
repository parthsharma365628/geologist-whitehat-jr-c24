
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new grounds (400,680,800,30)
hammer1=new hammer(200,200,100,30)
rubber1=new rubber(200,200,20)
stone1=new stone(300,100,100,100)
iron1=new iron(500,10,130,130)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  ground1.display()
  hammer1.display()
  rubber1.display()
stone1.display()
iron1.display()
  

  drawSprites();
 
}



