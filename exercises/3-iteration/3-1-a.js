"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i = 0;
    let spacing = 25;
    while (i < 11) {
        console.log("Loop!");

        Utils.drawLine(75, 75 + (spacing * i), 325, 75 + (spacing * i));
        i++;
    }
}