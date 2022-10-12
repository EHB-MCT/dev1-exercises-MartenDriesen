"use strict";

drawLine();

function drawLine() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 2;
    let width = context.canvas.width;
    let height = context.canvas.height;

    let margin = 500;
    let spacing = 50;



    //M
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(margin, spacing);
    context.lineTo(width - margin, spacing);
    context.lineTo(margin, spacing * 2);
    context.lineTo(width - margin, spacing * 2);
    context.lineTo(margin, spacing * 3);
    context.lineTo(width - margin, spacing * 3);
    context.lineTo(margin, spacing * 4);
    context.lineTo(width - margin, spacing * 4);
    context.lineTo(margin, spacing * 5);
    context.lineTo(width - margin, spacing * 5);
    context.lineTo(margin, spacing);

    context.stroke();


}

