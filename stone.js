class Stone{
    constructor(x, y, w, h){
        
        var options = {
            density: 12,
            friction: 1,
            restitution: 0.7
        }

        this.body = Bodies.rectangle(x, y, w, h, options)
        this.width = w;
        this.height = h;

        World.add(world, this.body)
    }
    display(){

        var position = this.body.position

        var angle = this.body.angle
        push() 
        translate(position.x, position.y)
        rotate(angle)
        strokeWeight (3);
        stroke("black");
        fill ("black");
        rectMode(CENTER)
        rect(0,0, this.width, this.height)
        pop()
    }
}