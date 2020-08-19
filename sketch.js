
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	keyPressed();

	var bobDiameter = 100;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new ROOF(600,30);
	
	bob1 = new BOB(400,500);
	bob2 = new BOB(500,500);
	bob3 = new BOB(600,500);
	bob4 = new BOB(700,500);
	bob5 = new BOB(800,500);

	rope1 = new ROPE(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new ROPE(bob2.body,roof.body,-bobDiameter,0);
	rope3 = new ROPE(bob3.body,roof.body,0,0);
	rope4 = new ROPE(bob4.body,roof.body,bobDiameter,0);
	rope5 = new ROPE(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
 
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display(); 	
  bob4.display(); 		
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	Body.applyForce(bob1.body,bob1.body.position,{x:-800,y:800})
	}
}



