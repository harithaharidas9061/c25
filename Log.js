class Log extends BaseClass {
    constructor(x, y, height, angle) {
      super(x,y,height,10,angle)
      this.image=loadImage("sprites/wood2.png")
      //World.add(world, this.body);

      Matter.Body.setAngle(this.body,angle)
    
  }
}
  