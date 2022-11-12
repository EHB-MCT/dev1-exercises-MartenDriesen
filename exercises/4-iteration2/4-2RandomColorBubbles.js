"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let x = 0;
let y = 0;

drawDots();

function drawDots() {

    for (let i = 0; i < 60; i++) {
        x = Math.random() * width;
        y = Math.random() * height;

        while (x < 200 || x > width - 200) {
            x = Math.random() * width;
        }

        while (y < 200 || y > height - 200) {
            y = Math.random() * height;

        }



        let size = Math.random() * 100;
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;


        context.fillStyle = Utils.rgba(r, g, b, 50);

        Utils.fillCircle(x, y, size);

    }
}