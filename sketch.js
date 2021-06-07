var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

var particles=[]
var plinkos =[]
var divisions

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

     //create 1st row of plinko objects
     for(var j = 20; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,75));
    }
  
      //create 2nd row of plinko objects
    for(var j = 30; j <=width-50; j=j+50){
      plinkos.push(new Plinko(j,185));
    }
  
      //create 3rd row of plinko objects
    for(var j = 20; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,295));
    }
  
      //create 4th row of plinko objects
    for(var j = 30; j <=width-50; j=j+50){
      plinkos.push(new Plinko(j,395));
    }
  
  //create particle objects
  ground = new Ground(400,800,800,10)
    
}
 


function draw() {
  background("DarkSeaGreen ");
  textSize(30)
  fill("ForestGreen")
  text("Press any key to start the particals falling",110,40)
  fill("PaleGreen ")
  text("10",25,500)
  fill("LightGreen ")
  text("20",110,500)
  fill("MediumSeaGreen ")
  text("30",195,500)
  fill("SeaGreen ")
  text("40",275,500)
  fill("ForestGreen ")
  text("50",354,500)
  fill("Green ")
  text("50",430,500)
  fill("DarkGreen ")
  text("40",510,500)
  fill("DarkOliveGreen ")
  text("30",590,500)
  fill("OliveDrab ")
  text("20",665,500)
  fill("YellowGreen ")
  text("10",754,500)


  Engine.update(engine);
  ground.display();
  
  if(frameCount%90===0){
    particles.push(new Particles(random(width/2-650,width/2+650),10,10))
  }

  //displaying divisions
  for(var k = 0;k < divisions.length; k++){
    divisions[k].display();
  }

  // displaying plinkos
  for(var j = 0;j < plinkos.length; j++){
    plinkos[j].display();
  }

  //displaying particles
  for(var j = 0;j < particles.length; j++){
    particles[j].display();
  }

  ground.display();
}
