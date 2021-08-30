class PendulumBob{
    constructor(x,y){
        var options = {isStatic: false, restitution: 0.2, friction: 0.3, density: 0.8};
	    this.body = Bodies.circle(x,y,40,options);
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);// translate helps rotate bodies around themselves
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0, 0, 40, 40);    
        pop(); 
    }
}