const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops;
var dropsArr = [];
var dropCount;


function preload(){

    boyA = loadAnimation("walking_8.png","walking_7.png",
    "walking_6.png","walking_5.png","walking_4.png","walking_3.png",
    "walking_2.png","walking_1.png");

    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    
}

function setup(){

    
    createCanvas(300,600);
    
    engine = Engine.create();
    world = engine.world;

    umbrella = new Boy(155,447);
    
    boy = createSprite(150,494);
    boy.addAnimation("walking",boyA);
    boy.scale = 0.3;

    for(var i = 0;i < 180; i++){
    
    dropCount = new Drops(random(0,300),random(0,600));
    dropsArr.push(dropCount);
      
    }
   
    
              
 }
    

function draw(){

    background(0);
    Engine.update(engine);

    umbrella.display();
    
    for(var i = 0;i<180;i++){
    dropsArr[i].display(); 
    dropsArr[i].update_pos();

    }

    

    
drawSprites();
Thunder();
    
    
} 

function Thunder(){

    var rand = Math.round(random(1,4));
    if(frameCount % 60 === 0){

        var light = createSprite(random(30,370),random(10,30));
        light.lifetime = 19;
        light.scale = random(0.45,0.8);
        
        switch(rand){
    
            case 1: light.addImage(thunder1);
                    break;
            case 2: light.addImage(thunder2);
                    break;
            case 3: light.addImage(thunder3);
                    break;
            case 4: light.addImage(thunder4);
                    break;
            default: break;         
    
        }
    
    }
    

}

