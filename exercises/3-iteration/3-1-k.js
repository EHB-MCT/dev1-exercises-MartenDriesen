"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawSunBeams();
}

function drawSunBeams() {
    let step = 10;
    let i = 0;
    let amount = 300 / step;
    while (i <= amount) {
        Utils.drawLine(50, 50, 350, 50 + (i * 10));
        Utils.drawLine(50, 50, 50 + (i * 10), 350);

        i++;
    }
}