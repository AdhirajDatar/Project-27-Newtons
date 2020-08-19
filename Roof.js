class  ROOF {
    constructor(x,y){
        var options = {isStatic:true}
        this.body = Bodies.rectangle(x, y,1200,20,options);
        this.width= 800;
        this.height= 40; 
        World.add(world,this.body);   
    }
    display (){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x, pos.y,this.width,this.height);
    }
}