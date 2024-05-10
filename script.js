let trenie=0.6;
let CubesBox= document.getElementById("CubesBox")
let WindowWidth = window.innerWidth
let WindowHeight = window.innerHeight
let Original = document.getElementById("cube")
let CubeWidth=100;
let StartCubePointX = WindowWidth/2 - CubeWidth*1,5
let StartCubePointY = WindowHeight/2 +CubeWidth*1,5
function copyCube(){
  for(let i = 0; i < 9; i++){
    copyCube = original.cloneNode(true);
    copyCube.id = "cube" + i;
    copyCube.style.left = StartCubePointX + CubeWidth*(i%3);
    copyCube.style.top = StartCubePointY + CubeWidth*parseInt(i/3);
    CubesBox.appendChild(copyCube);
  }
  original.style.display = "none"
}
    copyCube()
function MoveAllCubes(){
 for(let i = 0; i < 9; i++){
   let cube1 = document.getElementById("cube" + i)
   let speedX =  18*(1-i%3)
   let speedY = 18*(1-parseInt(i/3))
   let angle = 0;
   let angleSpeed = 3;
   let startX = cube1.offsetLeft;
   let startY = cube1.offsetTop;
   let crntX = cube1.offsetLeft;
   let crntY = cube1.offsetTop;
   move(cube1, speedX, speedY, startX, startY, crntX, crntY, angle, angleSpeed)
 } 
}

function move(cube1, speedX, speedY, startX, startY, crntX, crntY, angle, angleSpeed){
if(angleSpeed<0){
return 0;
}
cube1.style.left = crntX + "px";
crntX = crntX - speedX;
cube1.style.top = crntY + "px";
crntY = crntY - speedY;
signX = 0
signY = 0
if(speedX != 0){
signX = speedX/Math.abs(speedX)
}
if(speedY != 0){
signY = speedY/Math.abs(speedY)
}
speedX = signX * (Math.abs(speedX) - trenie);
speedY = signY * (Math.abs(speedY) - trenie);;
angle += angleSpeed;
angleSpeed -= trenie*0.17;
cube1.style.transform = "rotateX("+ angle + "deg) rotateY("+ angle + "deg) rotateZ("+ angle + "deg)"
setTimeout(function (){move(cube1, speedX, speedY, startX, startY, crntX, crntY, angle, angleSpeed)}, 20)
}