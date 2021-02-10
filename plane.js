class Plane{
    constructor(x, y, w, h){
        
        var options = {
           isStatic: true
        }

        this.body = Bodies.rectangle(x, y, w, h, options)
        this.width = w;
        this.height = h;

        World.add(world, this.body)
    }
    display(){

        var position = this.body.position
       
        fill ("brown");
        rectMode(CENTER)
        rect(position.x, position.y, this.width, this.height)
    
    }
}