const canvas = document.getElementById("canvas");
const offset = 250;
const ctx = canvas.getContext("2d");

let centerX = 150;
let centerY = 250;
let radius = 100;
let time = 0;
let x;
let y;
let point = [];


function createCanvas(){
    ctx.clearRect(0,0,500,500); 
}

function drawEllipse(x,y,radius){
    ctx.beginPath();
    ctx.ellipse(x, y, radius, radius, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
}


function draw(){

   ctx.clearRect(0,0,1000,500);
    
    x = centerX + Math.sin(time) * radius;
    y = centerY + Math.cos(time) * radius;
    drawEllipse(centerX, centerY, radius);
    
    
    let s = drawEllipse(x,y,5);
    ctx.fill();
    time += 0.01;
    if( time >= 360){
        time += 0;
    }

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(500,y);
    ctx.stroke();

    drawEllipse(500,y,5);
    ctx.fill();
    


    window.requestAnimationFrame(draw);
}



window.requestAnimationFrame(draw);


