"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";




drawcircle();


function drawcircle() {

    for (let j = 0; j < 10; j++) {
        if (j % 2 == 0) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "blue";
        }
        for (let i = 0; i < 10; i++) {


            Utils.fillCircle(0 + (50 * i), 0 + (50 * j), 25);
        }
    }

}
