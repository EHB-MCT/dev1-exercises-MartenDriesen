"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawmaze();

function drawmaze() {
    for (let i = 0; i < 3; i++) {
        let r = Math.floor(Math.random() * 2);
        context.lineWidth = 5;
        console.log(r);
        if (r == 0) {
            Utils.drawLine(0 + i * 100, 0, 100, 100);
        }
        else {
            Utils.drawLine(0, 100, 100, 0);
        }
    }
}