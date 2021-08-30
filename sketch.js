const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var rope1, rope2, rope3, rope4, rope5;

	function setup() {
		createCanvas(800, 600);
		engine = Engine.create();
		world = engine.world;

		bobObject1 = new PendulumBob(320,375);
		bobObject2 = new PendulumBob(360,375);
		bobObject3 = new PendulumBob(400,375);
		bobObject4 = new PendulumBob(440,375);
		bobObject5 = new PendulumBob(480,375);

		roofObject = new Roof(400,50,650,50);

		rope1 = new Rope(bobObject1.body, roofObject.roof, -160,0);
		rope2 = new Rope(bobObject2.body, roofObject.roof, -80,0);
		rope3 = new Rope(bobObject3.body, roofObject.roof, 0, 0);
		rope4 = new Rope(bobObject4.body, roofObject.roof, 80,0);
		rope5 = new Rope(bobObject5.body, roofObject.roof, 160,0);
		Engine.run(engine);
	
	}

	function draw() {
		rectMode(CENTER);
		background("green");
		roofObject.display();

		bobObject1.display();
		bobObject2.display();
		bobObject3.display();
		bobObject4.display();
		bobObject5.display();

		rope1.display();
		rope2.display();
		rope3.display();
		rope4.display();
		rope5.display();
	}
	function keyPressed(){
		if(keyCode === UP_ARROW)
			Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -100, y: -100});
	}