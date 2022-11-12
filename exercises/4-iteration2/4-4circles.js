"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";




drawcircle();


function drawcircle() {
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            context.fillStyle = "lightblue";
            Utils.fillCircle(0 + (50 * i), 0 + (50 * j), 25);
        }
    }

}


