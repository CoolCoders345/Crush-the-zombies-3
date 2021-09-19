class Stone {
    constructor (x, y,r, r){
        this.x = x 
        this.y = y 
       this.r = r
        this.body = Bodies.circle(x, y, r)
        World.add(world, this.body)
    }
    show(){
        rect(x, y, this.r, this.r)
    }
}