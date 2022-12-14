"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let spacing = 10;

drawmaze();

function drawmaze() {
    context.lineWidth = 5;
    context.lineCap = "square";
    let horizontalamount = width / spacing;
    let verticalamount = height / spacing;

    for (let j = 0; j < verticalamount; j++) {
        for (let i = 0; i < horizontalamount; i++) {
            let random = Math.floor(Math.random() * 2);

            if (random == 1) {
                Utils.drawLine(i * spacing, j * spacing, spacing + i * spacing, spacing + j * spacing);
            }
            else {
                Utils.drawLine(spacing + i * spacing, j * spacing, i * spacing, spacing + j * spacing);
            }

            /*
                        if (random < 0.5) {
                            Utils.drawLine(j * spacing, spacing + i * spacing, spacing + j * spacing, + i * spacing);
            
                        }
                        else {
                            Utils.drawLine(spacing + i * spacing, j * spacing, i * spacing, spacing + j * spacing);
            
                        }
            */
        }

    }


}