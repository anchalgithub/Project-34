//Create variables here
var dog, happyDog;
var foodS, foodStock, database;


function preload(){
//load images here
dog = loadImage("images/dogImg.png");
dog2 = loadImage("images/dogImg1.png")
  
}

function setup() {

database=firebase.database();

createCanvas(500,500);

dog = createSprite(250,300,150,150);
dog.addImage(dog);
dog.sclae=0.15

foodStock=database.ref('Food');
foodStock.on("value", readStock);
textSize(20);


  
}


function draw() {  
background(46,139,87);

if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog2);
}
  drawSprites();
  //add styles here
  fill (255,255,254)
  stroke ("black");
  text("Press the up arrow key to feed Jupiter milk!", 130,10,300,20);
  text("Food Left :" +foodS,170,200);
  textsize(13);
 
}


function readStock(data){
foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}
database.ref('/').update({

})
}

