class Circle
{
constructor(x,y,radius,r,g,b,a)
  {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.r = r || 255;
    this.g = g || 255;
    this.b = b || 0;
    this.a = a || 0.4;
  }

colorChange(r,g,b,a)
  {
  this.r = r || 255;
  this.g = g || 255;
  this.b = b || 0;
  this.a = a || 1;
  }
radiusChange(radius)
    {
  this.radius = radius;
    }

get color()
      {
    return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
      }

draw(context)
    {
  context.beginPath();
  context.strokeStyle = "Red"
  context.fillStyle = this.color
  context.lineWidth = "4";
    context.arc(this.x,this.y,this.radius,0,Math.PI*2);
    context.closePath();
    context.stroke();
    context.fill();
    }
}
myCircle.draw();
