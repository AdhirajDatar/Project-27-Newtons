class ROPE {

    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : body1,
            bodyB : body2,
           pointB:{x:offsetX,y:offsetY}
        }
        this.chain = Matter.Constraint.create (options);
        World.add(world,this.chain);
    }

    display (){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;   
    strokeWeight(2); 
    var Anchor1x = pointA.x;   
    var Anchor1y = pointA.y;

    var Anchor2x = pointB.x+this.offsetX;
    var Anchor2y = pointB.y+this.offsetY;
    line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);    
    }
}

