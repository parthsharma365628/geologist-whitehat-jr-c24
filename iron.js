class iron{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':100,
            'density':100
            
        }
        this.iro = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.iro);
      }
      display(){
        var pos =this.iro.position;
        
        push();
        translate(pos.x, pos.y);
        rotate(this.iro.angle);
       
        
        fill("red")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}