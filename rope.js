class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            'bodyA': body1,
            'bodyB': body2,
            'pointB': {x: this.offsetX, y: this.offsetY}
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        strokeWeight(2); 
      //  var Anchor1X = this.rope.bodyA.position.x;
     //   var Anchor1Y = this.rope.bodyB.position.y;

        //var Anchor2X = this.rope.pointB.x+this.offsetX;
        //var Anchor2Y = this.rope.pointB.y+this.offsetY;
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.offsetX,this.rope.bodyB.position.y+this.offsetY);
        //line(Anchor1X-100, Anchor1Y, Anchor2X, Anchor2Y);
    }
}