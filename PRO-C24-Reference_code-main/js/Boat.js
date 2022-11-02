class Boat{
    constructor(x, y, w, h, boatPos){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, w, h, options)
        this.w = w
        this.h = h
        this.image = loadImage("./assets/boat.png")
        this.boatPosition = boatPos
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y)
        imageMode(CENTER)
        image(this.image, 0, this.boatPosition, this.w, this.h)
        pop();
        
        
    }
}