class rubber{
    constructor(x,y,r){

        var opt={
            restitution:0.3,
            density:1,
            friction:5

        }
        this.rub=Bodies.circle(x,y,r,opt)
        this.x=x
        this.y=y
        this.r=r

        World.add(world,this.rub)
     }

    display() {
        push()
        translate(this.rub.position.x, this.rub.position.y)
        rotate(this.rub.angle)

        fill("red")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)

        
        
        pop()
    }
    
}