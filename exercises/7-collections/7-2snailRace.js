"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let x = [50, 50, 50, 50, 50];
let xwin = width;
let ywin = 100;
let isplaying = true;
let number = 0;
let remember = 0;


setup();
draw();





function draw() {
    if (isplaying) {
        Path();
        let space = height / 5;

        for (let i = 0; i < 5; i++) {
            let xspeed = Math.floor(Math.random() * 20);
            drawSnail(x[i] += xspeed, 50 + space * i, space, i + 1);

            if (Utils.calculateDistance(x[i], 100, xwin, ywin) < 150) {
                isplaying = false;
                context.fillStyle = "green";
                context.font = "normal 50pt Arial";
                context.fillText("Snail " + (i + 1) + " has won", width / 2, height / 2 + 40);
            }
            remember = i;
        }
        requestAnimationFrame(draw);

    }
    console.log(x, xwin);
}

function Path() {
    context.fillStyle = "gray";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "lightgray";
    context.fillRect(0, height / 5 * 1, width, height / 5);
    context.fillRect(0, height / 5 * 3, width, height / 5);
}

function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
}



function drawSnail(x, y, sizeY, number) {

    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();


    }

    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);


}

