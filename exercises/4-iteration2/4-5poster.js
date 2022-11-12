"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

drawRandomcontext();
drawCenteredtext();
drawMask();

function drawRandomcontext() {
    for (let i = 0; i < 250; i++) {
        context.lineWidth = 10 + Math.random() * 10;
        let gray = Math.floor(Math.random() * 255);
        context.strokeStyle = Utils.rgba(gray, gray, gray, 20);
        let y1 = Math.random() * height;
        let y2 = Math.random() * height;
        Utils.drawLine(0, y1, width, y2);

        context.fillStyle = Utils.rgba(gray, gray, gray, 0.5);
        let fontsize = Math.floor(Math.random() * 80);
        context.font = "30px Arial";
        context.fillText = ("MCT", Math.random() * width, Math.random() * height);
    }
}
function drawCenteredtext() {
    context.textAlign = 'center';
    context.fillStyle = '#000';
    context.font = "200px Arial";
    context.fillText = ("MCT", width / 2, height / 2);
}
function drawMask() {

}
