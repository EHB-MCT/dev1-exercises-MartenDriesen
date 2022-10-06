"use strict";

drawRectangles();

function drawRectangles() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 3;

    //links boven
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.stroke();

    //rechts onder

    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(200, 200, 150, 150);
    context.stroke();

    //midden
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(125, 125, 150, 150);
    context.stroke();
    context.fill();
    //rechts boven klein
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(275, 75, 50, 50);
    context.stroke();

    //rechts onder klein
    context.strokeStyle = 'red';
    context.beginPath();
    context.rect(75, 275, 50, 50);
    context.stroke();

    //kleinst links onder
    context.strokeStyle = 'black';
    context.beginPath();
    context.rect(50, 325, 25, 25);
    context.stroke();
    context.fill();


    //kleinst rechts boven
    context.strokeStyle = 'black';
    context.beginPath();
    context.rect(325, 50, 25, 25);
    context.stroke();
    context.fill();
}
