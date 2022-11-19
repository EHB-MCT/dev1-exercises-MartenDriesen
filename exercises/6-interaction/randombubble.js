"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
let framecount = 0;

window.onmousemove = changecode;
drawbubbletwee();



function drawbubbletwee() {
    if (framecount % 144 == 0) {


        let x = Utils.randomNumber(0, width);
        let y = Utils.randomNumber(0, height);
        let radius = Utils.randomNumber(5, 100);
        let hue = Utils.randomNumber(100, 200);
        drawbubble(x, y, radius, hue);
    }
    framecount++;
    requestAnimationFrame(drawbubbletwee);



}

function drawbubble(x, y, radius, hue) {
    context.fillStyle = Utils.hsl(hue, 50, 50);
    Utils.fillCircle(x, y, radius);
    context.fillStyle = Utils.hsl(100, 50, 75);
    Utils.fillCircle(x + radius / 3, y - radius / 3, radius / 4);


}

function changecode() {
    /*

    */

}

