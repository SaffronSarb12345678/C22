const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myengine,myworld,ground,ball;


function setup() {
  createCanvas(800,400);

  myengine=Engine.create();
  myworld=myengine.world;

  var options={

    isStatic:true
  }

  ground=Bodies.rectangle(400,390,800,10,options);
  World.add(myworld,ground);

  var b_option={

    restitution:1.5

  }

  ball=Bodies.circle(400,100,10,b_option)
  World.add(myworld,ball);
 // console.log(ground.position.y);
  
}

function draw() {
  background(0);
  Engine.update(myengine)
  rectMode(CENTER)  
  rect(ground.position.x,ground.position.y,800,10)

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10)

  ground.position.x=mouseX
} 