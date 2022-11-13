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

        if (x > 300 && x < width - 300 && y > 200 && y < height - 200) {
            context.fillStyle = "white";
        }
        else {
            context.fillStyle = "blue";
        }




        Utils.fillCircle(x, y, 5);

    }
}