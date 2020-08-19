class BOB {
    constructor(x,y){
        var options= {
            restitution:0.8,
            friction:1,
            density:1.2,
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.body);   
    }
    display (){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}