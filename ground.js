class grounds{
    constructor(x,y,width,height){
        this.ground = Bodies.rectangle(x,y,width,height, { isStatic:true })
        this.w = width
        this.h = height
        World.add(world,this.ground)
    }
    display(){
        rectMode(CENTER) 
        rect(this.ground.position.x, this.ground.position.y,this.w,this.h)
        
    }
    
    
    }