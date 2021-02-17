class hammer {
    constructor(x,y,width,height){
    var opt={
    restitution:0.5,
    density:10,
    friction:1
    }
    this.ham=Bodies.rectangle(x,y,width,height,opt)
    this.width=width
    this.height=height
    World.add(world,this.ham)
    
    }
    display(){
    var pos = this.ham.position
    pos.x = mouseX;
    pos.y = mouseY
    push()
    translate(pos.x , pos.y)
    rotate(this.ham.angle)
    fill("orange")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
    }
    }