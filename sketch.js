
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint
var engine, world;




var b1,b2,b3,b4,b5
var r1,r2,r3,r4,r5,roof
function preload()
{
	
}

function setup() {
	
createCanvas(1600, 600);
 engine = Engine.create();
  world = engine.world;
   b1 = new Ball(315, 450, 85);
    b2 = new Ball(400, 450, 85);
     b3 = new Ball(485, 450, 85); 
     b4 = new Ball(570, 450, 85);
      b5 = new Ball(655, 450, 85);
      roof = new R(685, 0, 1000, 50);
        r1 = new Ro(b1.body, roof.body, -175, 0);
         r2 = new Ro(b2.body, roof.body, -90, 0); 
         r3 = new Ro(b3.body, roof.body, -5, 0);
          r4 = new Ro(b4.body, roof.body, 80, 0); 
          r5 = new Ro(b5.body, roof.body, 165, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
 

  //roof.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  r1.display()
  r2.display()
  r3.display()
  r4.display()
  r5.display()
 

  
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(b5.body,b5.body.position,{x:50,y:-50});
	}
}

