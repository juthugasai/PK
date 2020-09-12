const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//var divisions
var particles =[];
var plinkos =[];
var divisions=[];
var divitionHeight=300;
var ground,plinkos;
//var d1,d2,d3,d4,d5,d6,d7;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(240,790,480,20);
  //d1 = new Division(5,700,10,200)
  

  

}

function draw() {
  background(0);
  Engine.update(engine);
  
  

  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divitionHeight/2,10,divitionHeight ))
  }
   for(var j=40; j<=width;j=j+50){
     //plinkos.push(new Plinko(j,75))
     //plinkos=new Plinko(j,75,10)
     plinkos.push(new Plinko(j,75,5))
    //plinkos[j].display();
  }

  for(var j=15; j<=width-10; j=j+50){
     plinkos.push(new Plinko(j,175,5))
  }

 for(var j=40; j<=width;j=j+50){
  plinkos.push(new Plinko(j,275,5))
 }
for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375,5))
 
}

 for(var j = 0;j<plinkos.length; j++){
  plinkos[j].display();
}

  
  for(var k = 0;k<divisions.length; k++){
    divisions[k].display();
  }

  if(frameCount % 10===0){
    particles.push(new Particle(random(width/2-10,width/2+10),5,5))
  }
  for(var j = 0;j<particles.length; j++){
    particles[j].display();
  }



  

  //drawSprites();


  ground.display();
  //divisions.display();
  

}