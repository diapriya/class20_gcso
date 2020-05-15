var car, wall;
var speed, weight;
var movingRact;
var score;

function setup(){

  createCanvas(1200,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1100,200,60,height/2);
 
}

function draw() {
  
  background(80,80,80);  

  car.velocityX = speed;

  document.getElementById("project").innerHTML = "Project by Dia Priyadarshi";

  document.getElementById("weight").innerHTML = "<b>Weight : </b>" +  weight;
  
  document.getElementById("speed").innerHTML = "<b>Score : </b>" +  car.velocityX;
  
  if( ( wall.x - car.x)  < ( car.width + wall.width )/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;

    document.getElementById("deformation").innerHTML = "<b>Deformation : </b>" + deformation;

      if( deformation >= 180)
      {
        car.velocityX = 0;
        car.shapeColor = color(255,0,0);
      }

      if( deformation < 180 && deformation >= 100)
      {
        car.velocityX = 0;
        car.shapeColor = color(230,230,0);
      }

      if( deformation < 100)
      {
        car.velocityX = 0;
        car.shapeColor = color(0,255,0);
      }

  }

  drawSprites();

}