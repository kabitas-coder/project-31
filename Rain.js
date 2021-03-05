class Rain 
{
constructor (x,y,width,height)
{
    var options = {
        restitution : 0.3,
        friction : 0,
        density : 0.4
    }
    this.x=x;
    this.y=y;
    this.r=r

        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add (world,this,body)
}

display () {

var rainPos=this.body.position;
push();   
this.body.positionx,this.body.positiony
fill("blue");
pop();
}
}