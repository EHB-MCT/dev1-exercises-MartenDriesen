"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let xpos = [];
let ypos = [];
let size = [];
let yspeed = [];
setup();

function setup() {
    let bubbleamount = 1;
    for (let i = 0; i < bubbleamount; i++) {
        xpos[i] = width / 2;
        ypos[i] = height - 50;
        size[i] = 30 + Math.random * 20;
        yspeed[i] = 5 + Math.random * 20;

    }

    update();
}

function update() {

    context.fillStyle = "white";
    context.rect(0, 0, width, height);
    for (let i = 0; i < bubbleamount; i++) {
        ypos[i] = ypos - 19;
        xpos[i] =

            drawbubble(xpos, xpos, size, 100);
    }
    requestAnimationFrame(update);

}

function drawbubble(x, y, size, hue) {
    context.fillStyle = Utils.hsl(hue, 50, 50);

    Utils.fillCircle(x, y, size);
}