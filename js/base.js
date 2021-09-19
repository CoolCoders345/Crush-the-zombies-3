class Base{
    constructor(x, y, w, h, options){
        this.x = x
        this.y = y 
        this.w = w 
        this.h = h 
        options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, this.w, this.h, options)
        World.add(world, this.body)
    }
    show(){
        rectMode (CENTER)
        rect(this.body.position.x, this.body.position.y, this.w, this.h)
      
    }
}