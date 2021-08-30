class Roof{
    constructor(x,y,width,height){
        var options = {isStatic: true};
        this.roof = Bodies.rectangle(x,y,height,width,options);
        World.add(world,this.roof);
    }
    display(){
        rectMode(CENTER);
        fill("blue");
        rect(this.roof.position.x, this.roof.position.y, 650,50);
    }
}