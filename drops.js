class createDrops{
constructor(x,y){
    var options={
        restitution=0.1,
        friction= 0.001
        
    }
    this.rain=Bodies.circle(x,y,5,options)
    this.radius=5
    World.add(world,this.rain)
}
displayDrops (){
ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)

}

}