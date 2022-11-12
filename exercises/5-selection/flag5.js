"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        if (x < (width / 4) * 1 && x > (width / 4) * 3 && y < (height / 4) * 1 && y > (height / 4) * 3) {
            context.fillStyle = "blue";
        }


        else { context.fillStyle = "white"; }
        Utils.fillCircle(x, y, 5);

    }
}