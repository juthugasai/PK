class Plinko {

    constructor(x, y,r) {

        var options = {
            isStatic:true,
            restitution:0.3,
            //friction:0.5,
            //density:1.2


        }
        this.r=r
        this.body = Bodies.circle(x, y,r, options);
        //this.radius= radius;
        World.add(world, this.body);

    }
        display() {
            var pos = this.body.position;
            var angle = this.body.angle;
            
          stroke(255);
         fill(255);
         push();
         translate(this.body.position.x,this.body.position.y);

         
         ellipseMode(RADIUS);
         ellipse(0, 0, this.r, this.r);
          
            
            
            pop();            
           
        }
}