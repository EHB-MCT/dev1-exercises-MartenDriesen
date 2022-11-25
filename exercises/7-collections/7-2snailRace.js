"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let x = [50, 50, 50, 50, 50];

Path();
setup();
draw();

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

function draw() {
    let space = height / 5;
    for (let i = 0; i < 5; i++) {
        drawSnail(x[i], space * i, space, 1);
    }
}

function move() {


}

let numbers = [];
for (let i = 0; i < 1000; i++) {
    numbers[i] = Utils.randomNumber(0, 100);
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