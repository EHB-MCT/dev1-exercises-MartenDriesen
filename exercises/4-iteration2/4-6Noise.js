"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scripts/noise.js";




drawNoice();


function drawNoice() {

    context.lineWidth = 2;
    context.strokeRect(50, 50, 400, 400);

    for (let i = 0; i < 400; i++) {
        let x = 50 + i;
        let y = 150 + Noise.perlinNoise(i / 100) * 20;
        context.strokeRect(x, y, 1, 1);
    }

}

