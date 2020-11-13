class Slingshot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.sling = Constraint.create(options)
        World.add(World,this.sling)
    }
    display(){
        var pointA = this.sling.bodyA.position
        var pointB = this.sling.bodyB.position
        strokeWeight(50)
        line(pointA.x,pointA.y,pointB.x,pointB.x,pointB.y)
    }
}