"use strict";

drawRectangles();

function drawRectangles() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 3;

    //
    context.strokeStyle = '#ADD8E6';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.stroke();


}
