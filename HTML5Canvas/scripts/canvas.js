        
var canvas = document.getElementById('html_canvas');
var context = canvas.getContext('2d');
        
function rectangle() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, 600, 400);
    
    document.getElementById('canvas_title').innerHTML = "Rectangle";
    document.getElementById('html_canvas').innerHTML = "Rectangle Example";
    
    context.clearRect(0, 0, 600, 400);
    context.strokeStyle = '#2200dd';
    context.lineWidth = '2'
    context.fillStyle = '#ff2255';
    context.fillRect(100,100,100,250);
}

function triangle() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, 600, 400);
    
    document.getElementById('canvas_title').innerHTML = "Triangle";
    document.getElementById('html_canvas').innerHTML = "Triangle Example";
    
    context.strokeStyle = 'Pink';
    context.lineWidth = '1';
    
    context.beginPath();
    context.moveTo(250,50);
    context.lineTo(50,250);
    context.lineTo(450,250);
    context.closePath();
    context.fillStyle = 'red';

    context.lineJoin = 'round';

    context.fill();
    context.stroke();
}

function circle() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, 600, 400);
    
    document.getElementById('canvas_title').innerHTML = "Circle";
    document.getElementById('html_canvas').innerHTML = "Circle Example";
    context.beginPath();
    context.fillStyle = '#004400';
    context.arc(280,240,120,0,Math.PI, false);
    context.arc(280,240,120,0,Math.PI, true);
    context.closePath();
    context.fill();
}

function text() {
    
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, 600, 400);
    
    document.getElementById('canvas_title').innerHTML = "Text";
    document.getElementById('html_canvas').innerHTML = "Text Example";
    
    //filled Text
    context.fillStyle = 'purple'
    context.font = '16px "Comic Sans"'
    context.fillText('Canvas!!!',110,50);


    //Outlined Text
    context.strokeStyle = 'fuschia';
    context.font = '24px "Papyrus"'
    context.lineWidth = '1';
    context.strokeText('Is fun!!',140,100);
}

function diamond_half() {
    
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, 600, 400);

    document.getElementById('canvas_title').innerHTML = "Diamond Half";
    document.getElementById('html_canvas').innerHTML = "Diamond Half Example";
    
    context.strokeStyle = 'Pink';
    context.lineWidth = '1';
    
    context.beginPath();
    context.moveTo(250,0);
    context.lineTo(50,200);
    context.lineTo(450,200);
    //context.closePath();
    
    //context.beginPath();
    context.moveTo(50,200);
    context.lineTo(250,0);
    context.lineTo(450,200);
    context.lineTo(250,400);
    //
    context.closePath();
    
    context.fillStyle = 'red';
    context.lineJoin = 'round';

    context.fill();
    context.stroke()
}