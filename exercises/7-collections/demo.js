"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
let xpos = [];
let ypos = [];



setup();


function setup() {
    for (let i = 0; i < 20; i++) {
        xpos[i] = Utils.randomNumber(0, width);
        ypos[i] = Utils.randomNumber(0, height);
    }
}

circle();


function circle() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 20; i++) {

        xpos[i] += Utils.randomNumber(-5, 5);
        ypos[i] += Utils.randomNumber(-5, 5);
        context.fillStyle = "red";
        Utils.fillCircle(xpos[i], ypos[i], 50);
    }



    requestAnimationFrame(circle);
}

