
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bar,bar1
var ball
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 var ball_options={
	 isStatic:false,
	 restitution:0,
	 friction:0,
	 density:1.2
 }
 ground1= new Bar(550,600,10,100)
	ground2 =new Bar(750,600,10,100)
	ball=Bodies.circle(200,200,20,ball_options)
	World.add(world,ball)
	ground =new Ground(200,650,8000,20)
	
	
 rectMode(CENTER);
 ellipseMode(RADIUS)
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
ellipse(ball.position.x-100,ball.position.y,20)

ground.show()
ground1.show()
ground2.show()
drawSprites()
if (keyDown("up")) {
	keyPressed()
}
Engine.update(engine)
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:200,y:200},{x:10,y:-15});
	}
}
