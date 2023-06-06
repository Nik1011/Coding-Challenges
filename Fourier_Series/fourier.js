class Point{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

}

const canvas = document.getElementById("canvas");
const offset = 500;
const ctx = canvas.getContext("2d");

let centerX = 150;
let centerY = 250;
let radius = 100;
let time = 0;
let x;
let y;
let wave = [];



function createCanvas(){
    ctx.clearRect(0,0,500,500); 
}

function drawEllipse(x,y,radius){
    ctx.beginPath();
    ctx.ellipse(x, y, radius, radius, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
}


function draw(){

    let n = 1;
    ctx.clearRect(0,0,1000,500);
    
    
    x = centerX + Math.sin(time)* radius;
    y = centerY + Math.cos(time)* radius;
    drawEllipse(centerX, centerY, radius);
    
    
    let s = drawEllipse(x,y,3);
    ctx.fill();
    time += 0.01;
    if( time >= 360){
        time = 0;
    }

    // line to function
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(500,y);
    ctx.stroke();


    // radiusline 
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.lineTo(x,y);
    ctx.stroke();

    drawEllipse(x,y, 15);
    

    wave.unshift(new Point(x,y));

    for(let i = 0; i < wave.length; i++){
        drawEllipse(i + offset, wave[i].y, 1);
        ctx.fill();
    }

    if(wave.length > 400){
        wave.pop();
    }

    window.requestAnimationFrame(draw);
}



window.requestAnimationFrame(draw);


