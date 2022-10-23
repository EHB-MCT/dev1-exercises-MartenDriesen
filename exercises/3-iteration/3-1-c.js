"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    let spacing = 20;
    let offset = 75;
    while (i < 5) {
        console.log("Loop!");

        Utils.drawLine(50, 150 + (spacing * i), 350, 150 + (spacing * i));
        Utils.drawLine(150 + (spacing * i), 50, 150 + (spacing * i), 350);

        i++;
    }
}