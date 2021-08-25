var bg , bgImg
var snow, snowImg,snowImg2
snow=[];

function preload(){
  bgImg = loadImage("snow3.jpg")
  snowImg =  loadImage("snow4.webp")
  snowImg2 = loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bgImg);  
  drawSprites();
  Snow();
  //if(frameCount% 60 === 0){
 // snow.push(new Snow(random(width/2 - 100 , width/ 2 + 100), 10 , 10))
//}
 
}

function Snow(){
   if(frameCount % 10 === 0) {
      var snow = createSprite(width + 200, height - 400, 40, 10); 
      snow.x = Math.round(random(25, 790)); 
      //var snowtypes = snowtypes[snowImg,snowImg2];
       //snow.addImage(random(snowtypes)); 
       snow.addImage(snowImg);
        snow.velocityY = 10; 
        snow.scale=0.15;
       } 
      }