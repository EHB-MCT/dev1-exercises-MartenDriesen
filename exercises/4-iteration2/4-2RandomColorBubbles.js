"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {

    for (let i = 0; i < 60; i++) {
        let x = Math.random() * width - 200;
        let y = Math.random() * height - 200;
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;

        context.fillStyle = Utils.rgba(r, g, b, 50);
        Utils.fillCircle(x, y, 100);

    }
}