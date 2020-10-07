class Trigger{
    constructor(x,y){
        var op={
            isStatic:false,
            friction:0.4,
            restitutution:1,
            density:0.4,
        }
        this.body=Bodies.circle(x,y,40,op);
        this.radius=40;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}