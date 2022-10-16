var seaImg, sea, shipImg1, ship;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(0,0,400,400);
  sea.addImage(seaImg);
  sea.scale = 2.5


  ship = createSprite(200,200,50,50);
  ship.addAnimation(shipImg1);
  ship.scale=0.8;


}

function draw() {
  background("blue");
 if (sea.x <0) {
  sea.x = sea.width/2;
 }
}