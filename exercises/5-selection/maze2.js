"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let spacing = 10;

drawmaze();

function drawmaze() {
    context.lineWidth = 5;
    context.lineCap = "square";
    let horizontalamount = width / spacing;
    let verticalamount = height / spacing;
    context.fillStyle = "black";
    context.rect(0, 0, width, height);
    context.fill();

    for (let j = 0; j < verticalamount; j++) {
        for (let i = 0; i < horizontalamount; i++) {
            let color = Math.floor(Math.random() * 200);
            let random = Math.floor(Math.random() * 2);
            context.strokeStyle = Utils.hsl(color, 50, 50);
            if (random == 1) {
                Utils.drawLine(i * spacing, j * spacing, spacing + i * spacing, spacing + j * spacing);
            }
            else {
                Utils.drawLine(spacing + i * spacing, j * spacing, i * spacing, spacing + j * spacing);
            }


        }

    }


}