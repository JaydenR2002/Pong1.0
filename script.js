const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let ball = new Circle(200,200,50,255,1,255,1);
let ball2 = new Circle(220,220,50,1,255,255,0.5);
let ball3 = new Circle(150,150,50,1,255,255,0.5);
let v_y = 3;


function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  ball.draw(context);
  ball.y += v_y;
  ball2.draw(context);
  ball3.draw(context);
}
function random_color() {

  var letter = "0123456789ABCDEF".split("");
  var color = "#";
  for(var i = 0; i < 6; i++){
    color += letter[Math.round(Math.random()*15)];
  }
  return color;
}
animate()
