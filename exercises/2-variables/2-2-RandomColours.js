"use strict";



let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRectangles(100, 100, 400);
drawRectangles(125, 125, 350);
drawRectangles(150, 150, 300);
drawRectangles(175, 175, 250);
drawRectangles(200, 200, 200);
drawRectangles(225, 225, 150);
drawRectangles(250, 250, 100);
drawRectangles(275, 275, 50);



function drawRectangles(x, y, size) {


    let width = context.canvas.width;
    let height = context.canvas.height;

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    //links boven
    context.fillStyle = color;
    context.beginPath();
    context.rect(x, y, size, size);
    context.stroke();
    context.fill();





}
