"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalLines();
}

function drawDiagonalLines() {
    let i = 0;
    let spacing = 175 / 7;
    let offset = 75;
    while (i < 7) {
        console.log("Loop!");

        Utils.drawLine(50 + (spacing * i), 200 + (spacing * i), 200 + (spacing * i), 50 + (spacing * i));


        i++;
    }
}