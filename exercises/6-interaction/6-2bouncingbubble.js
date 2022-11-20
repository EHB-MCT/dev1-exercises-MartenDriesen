"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
let x = 0;
let moveright = true;
let movedown = true;
let y = 0;



ball();

function ball() {
    if (moveright) {
        x += 10;
    }
    else {
        x -= 10;
    }

    if (x >= width - 100) {
        moveright = false;
    }
    else if (x <= 0) {
        moveright = true;
    }

    if (movedown) {
        y += 10;
    }
    else {
        y -= 10;
    }

    if (y >= height - 100) {
        movedown = false;
    }
    else if (y <= 0) {
        movedown = true;
    }


    context.fillStyle = "white";
    context.beginPath();
    context.rect(0, 0, width, height);
    context.fill();

    context.fillStyle = "blue";
    Utils.fillCircle(50 + x, 50 + y, 50);
    requestAnimationFrame(ball);
}

