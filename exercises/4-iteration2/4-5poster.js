"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

drawRandomcontext();
drawCenteredtext();
drawRandomText();
drawMask();

function drawRandomcontext() {
    for (let i = 0; i < 250; i++) {
        context.lineWidth = 10 + Math.random() * 15;
        let gray = Math.floor(Math.random() * 255);
        context.strokeStyle = Utils.rgba(gray, gray, gray, 20);
        let y1 = Math.random() * height;
        let y2 = Math.random() * height;
        Utils.drawLine(0, y1, width, y2);
    }
}

function drawRandomText() {

    for (let i = 0; i < 50; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        let gray = Math.floor(Math.random() * 255);
        context.fillStyle = Utils.rgba(gray, gray, gray, 20);
        context.font = "normal 30pt Arial";
        context.fillText("MCT", x, y);
    }
}

function drawCenteredtext() {
    context.textAlign = 'center';
    context.fillStyle = 'black';
    context.font = "150px Arial";
    context.fillText("MCT", width / 2, height / 2);
    context.fillStyle = 'red';
    context.font = "100px Arial";
    context.fillText("ehb", width / 2, (height / 2) - 150);
    context.fillStyle = 'white';
    context.font = "100px Arial";
    context.fillText("is da shit", width / 2, (height / 2) + 100);
}


function drawMask() {
    let x = width / 2;
    let y = height / 2;
    context.lineWidth = 5;
    Utils.drawLine(x + (width / 4), 0, width, y);
    Utils.drawLine(width, y, x + width / 4, height);
    Utils.drawLine(x + (width / 4), 0, width, y);
    Utils.drawLine(x + (width / 4), 0, width - width, y);
}
