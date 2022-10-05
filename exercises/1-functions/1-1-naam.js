"use strict";

drawLine();

function drawLine() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 7;

    //M
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(100, 200);
    context.lineTo(300, 200);
    context.moveTo(100, 200);
    context.lineTo(100, 400);
    context.moveTo(200, 200);
    context.lineTo(200, 400);
    context.moveTo(300, 200);
    context.lineTo(300, 400);
    context.stroke();

    //a
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(500, 200);
    context.lineTo(400, 400);
    context.moveTo(500, 200);
    context.lineTo(600, 400);
    context.moveTo(450, 300);
    context.lineTo(550, 300);
    context.stroke();

    //r
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(700, 200);
    context.lineTo(700, 400);
    context.moveTo(700, 200);
    context.lineTo(800, 200);
    context.lineTo(800, 300);
    context.lineTo(700, 300);
    context.lineTo(800, 400);
    context.stroke();

    //t
    context.strokeStyle = 'orange';
    context.beginPath();
    context.moveTo(900, 200);
    context.lineTo(1000, 200);
    context.moveTo(950, 200);
    context.lineTo(950, 400);
    context.stroke();

    //e
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(1100, 200);
    context.lineTo(1100, 400);
    context.moveTo(1100, 200);
    context.lineTo(1200, 200);
    context.moveTo(1100, 300);
    context.lineTo(1200, 300);
    context.moveTo(1100, 400);
    context.lineTo(1200, 400);
    context.stroke();

    //n
    context.strokeStyle = 'purple';
    context.beginPath();
    context.moveTo(1300, 200);
    context.lineTo(1300, 400);
    context.moveTo(1300, 200);
    context.lineTo(1400, 400);
    context.lineTo(1400, 200);
    context.stroke();


}

