"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawConcentricCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawConcentricCircles() {
    let i = 0;

    while (i < 6) {
        context.strokeStyle = "black";
        context.fillStyle = Utils.rgb(150, 150, 150);
        Utils.fillAndStrokeCircle(200, 200, 150 - (i * 25));
        i++;
    }
}

