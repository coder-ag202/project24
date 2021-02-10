class Rubber{
    constructor(x, y, r){
        
        var options = {
            density: 1,
            friction: 5,
            restitution: 0.3
        }
        
        this.r = r;
        this.body = Bodies.circle(x, y, (this.r - 20)/ 2, options)

        World.add(world, this.body)
    }
    display(){

        var position = this.body.position
       
        push() 
        translate(position.x, position.y)
        strokeWeight (4);
        stroke("black");
        fill ("darkblue");
        rectMode(CENTER)
        rect(0,0, this.r, this.r)
        pop()
    }
}