class Point{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

}

const canvas = document.getElementById("canvas");
const offset = 500;
const ctx = canvas.getContext("2d");


let time = 0;
let x;
let y;
let wave = [];



function drawEllipse(x,y,radius){
    ctx.beginPath();
    ctx.ellipse(x, y, radius, radius, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke();
}


function draw(){
    
    ctx.clearRect(0,0,1000,500);
    
    let radius = 100;
    let centerX = 150;
    let centerY = 250;
    
    for(i = 1; i < 5; i++){
        
        let n = i * 2 + 1;
        x = centerX + Math.sin(n * time) * radius;
        y = centerY + Math.cos(n * time) * radius;
        // 1st circle
        drawEllipse(centerX, centerY, radius);
        
        // nth Circle
        drawEllipse(x,y,3);
        ctx.fill();
        
        centerX = x;
        centerY = y;
        radius = radius / 2;
        
        time += 0.001;
        if( time >= 360){
            time = 0;
        }
        
        
        // radiusline 
        ctx.beginPath();
        ctx.moveTo(centerX,centerY);
        ctx.lineTo(x,y);
        ctx.stroke();
        
    }
    wave.unshift(new Point(x,y));
    
    // line to function
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(500,y);
    ctx.stroke();
        
    // draw function
    for(let i = 0; i < wave.length; i++){
        drawEllipse(i + offset, wave[i].y, 1);
        ctx.fill();
    }
    
    if(wave.length > 350){
        wave.pop();
    }


    window.requestAnimationFrame(draw);
}



window.requestAnimationFrame(draw);


