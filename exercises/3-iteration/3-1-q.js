"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradientCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawGradientCircles() {
    let i = 0;
    while (i < 6) {
        context.fillStyle = Utils.rgb(0 + (i * 255 / 6), 0 + (i * 255 / 6), 0 + (i * 255 / 6));
        Utils.fillAndStrokeCircle(200, 200, 150 - (i * 25));
        i++;
    }
}
