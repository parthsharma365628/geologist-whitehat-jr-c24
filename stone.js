class stone{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.6,
            'friction':10,
            'density':2
            
        }
        this.sto = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.sto);
      }
      display(){
        var pos =this.sto.position;
        
        push();
        translate(pos.x, pos.y);
        rotate(this.sto.angle);
       
        fill("black")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}