"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
let framecount = 0;


/** 
* @param{MouseEvent} eventData
*/

window.onmousemove = crosshairlines;

function crosshairlines(eventData) {
    context.fillStyle = "white";
    context.beginPath();
    context.rect(0, 0, width, height);
    context.fill();
    let x = eventData.pageX;
    let y = eventData.pageY;
    let maxx = width - x;
    let maxy = height - y;
    context.lineWidth = 3;
    context.strokeStyle = "red";
    Utils.drawLine(x - x, y, x + maxx, y);
    Utils.drawLine(x, y - y, x, y + maxy);
}

