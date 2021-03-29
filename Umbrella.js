class Boy {

  constructor(x,y){

    var opt = {

       friction : 0.1,
       isStatic : true

    }

    this.body = Bodies.circle(x,y,47,opt);
    World.add(world,this.body);

    

  }

  display(){

    var pos =this.body.position;
    var angle = this.body.angle;

    /*push();
    fill(200);
    translate(pos.x, pos.y);
    rotate(angle);
    ellipse(0,0,94);
    pop(); 
    */
  }

}


