"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.fillRect(50, 50, 600, 300);
    drawLines();
}





function drawLines() {

    for (let i = 0; i <= 60; i++) {
        Utils.drawLine(50 + (600 / 60) * i, 50, 650 - (600 / 60 * i), 350);
    }

    for (let j = 0; j <= 30; j++) {
        Utils.drawLine(50, 50 + (600 / 60) * j, 650, 350 - (600 / 60) * j);
    }

}