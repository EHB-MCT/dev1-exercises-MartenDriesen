"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let margin = 5;
let brickwidth = 100;
let brickheight = 50;
let offset = 50;
let getal = 50;
let primeNumber = 0;

drawbrick();


function drawbrick() {
    context.fillStyle = 'darkred';

    for (let j = 0; j < 6; j++) {
        if (j % 2 == 0) {
            primeNumber = 0;
        } else {
            primeNumber = offset;
        }
        for (let i = 0; i < 6; i++) {
            context.fillRect(primeNumber + 50 + ((brickwidth + margin) * i), 50 + (brickheight + margin) * j, 100, 50);
        }
    }
}