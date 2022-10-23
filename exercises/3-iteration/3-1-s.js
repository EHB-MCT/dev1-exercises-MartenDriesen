"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawShrinkingBars();
}

function drawShrinkingBars() {
    let i = 0;
    while (i <= 14) {
        let gray = 255 - (i * 300 / 14);
        context.fillStyle = Utils.rgb(gray, gray, gray);
        context.fillRect(50 + (i * 25), 50 + (i * 150 / 14), 15, 300 - (i * 300 / 14));
        i++;
    }
}