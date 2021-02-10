class Hammer{
    constructor(x, y){
        
        var options = {
            density: 2,
            friction: 1,
            restitution: 0.5
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options)
        this.width = 150;
        this.height = 40;

        World.add(world, this.body)
    }
    display(){

        var position = this.body.position
        position.x = mouseX;
        position.y = mouseY;

        var angle = this.body.angle
        push() 
        translate(position.x, position.y)
        rotate(angle)
        strokeWeight (3);
        stroke("white");
        fill ("orange");
        rectMode(CENTER)
        rect(0,0, this.width, this.height)
        pop()
    }
}