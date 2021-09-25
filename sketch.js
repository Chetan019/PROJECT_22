
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, leftSide, rightSide;
var radius = 40;


	function setup() {
		createCanvas(1600, 700);
		
		engine = Engine.create();
	     world = engine.world;

        var ball_options = {
			isStatic:false,
			restituion:0.3,
			friction:0,
			density:1.2
		}

         ball=new Ball(10,10,20,20)
	     ground = new Ground(width/2, 670, width, 20);
		 leftSide = new Ground(900, 600, 20, 120);
	     rightSide = new Ground(1000, 600, 20, 120);
		
		Engine.run(engine);
		}
   
	
	



function draw() {
  rectMode(CENTER);
  background("BLACK");



  leftSide.display();
  rightSide.display();
  ball.display();
  ground.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
            //Matter.Body.applyForce(ball.body, ball.body.position,{x:15, y:-15})
		     Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85})
	}
}


