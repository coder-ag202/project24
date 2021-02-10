
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(600, height, 1200, 20)
	stone = new Stone(700, 330, 100, 100);
	iron = new Iron(300, 350)
	hammer = new Hammer(10, 100);
	rubber = new Rubber(900, 450, 70);
	sand1 = new Sand(505, 450, 12);
	sand2 = new Sand(510, 450, 12);
	sand3 = new Sand(515, 450, 12);
	sand4 = new Sand(520, 450, 12);
	sand5 = new Sand(525, 450, 12);
	sand6 = new Sand(530, 450, 12);7
	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  stone.display();
  hammer.display();
  iron.display();
  rubber.display();
  plane.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  
  drawSprites();
 
}



