"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
test();
function test() {
    for (let j = 0; j < 5; j++) {
        let y = 200;

        context.fillStyle = "red";
        Utils.fillCircle(100, y + (j * 200), 50);
    }
}