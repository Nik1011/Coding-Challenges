class Point{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

}

const canvas = document.getElementById("canvas");
const offset = 500;
const ctx = canvas.getContext("2d");

var slider = document.getElementById("sliderN");
var output = document.getElementById("out");

output.innerHTML = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = slider.value;
}

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
    let centerX = 150;
    let centerY = 250;
    
    for(i = 0; i < slider.value; i++){
        
        let n = i * 2 + 1;
        let radius = 75 * (4 / (n * Math.PI))
        x = centerX + Math.cos(n * time) * radius;
        y = centerY - Math.sin(n * time) * radius;
        // 1st circle
        drawEllipse(centerX, centerY, radius);
        
        // nth Circle
        drawEllipse(x,y,2);
        ctx.fill();
        
        centerX = x;
        centerY = y; 

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
    
    time += 0.03;
    if( time >= 360){
        time = 0;
    }

    if(wave.length > 350){
        wave.pop();
    }


    window.requestAnimationFrame(draw);
}



window.requestAnimationFrame(draw);


