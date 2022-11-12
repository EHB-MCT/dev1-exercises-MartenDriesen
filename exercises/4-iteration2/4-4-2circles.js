"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";




drawcircle();


function drawcircle() {

    for (let j = 0; j < 10; j++) {

        for (let i = 0; i < 10; i++) {
            let size = Math.random() * 40;
            context.fillStyle = Utils.rgba(173, 216, 230, 50);
            Utils.fillCircle(0 + (50 * i), 0 + (50 * j), size);
        }
    }

}

