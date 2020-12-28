class Pendulum {
    constructor(x, y) {
      var options = {
          restitution:1.3,
          friction:1,
          inertia:Infinity,
          frictionAir:0.01 
      }
      this.body = Bodies.rectangle(x, y,40,40,options);
      this.x=x;
      this.y=y;
     
      World.add(world, this.body);
    }
    display(){
      var angle=this.body.angle;   
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      rotate(angle);

      
      strokeWeight(0.7);
        stroke("white")
      fill(0);
      ellipse(0, 0,60,60);
      pop();
    }
  }