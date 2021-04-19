class Drop{
    constructor(x,y){
        var options = {
            'isStatic': false,
            'restitution':0.01,
            'friction':0.1,
            'density':1.0
        }
     
        this.r = 5;
        this.rain = Bodies.circle(x,y,5,options)
        World.add(world,this.rain)
        
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
    showDrop(){ 
        var pos = this.rain.position
        strokeWeight(0.2)
        stroke("white")
        fill("blue")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r,this.r);
       
    }

    
}