"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;

let x;
let xspeed = 10;
let yspeed = 10;
let y;
let isplaying = true;
setup();

function setup() {
    x = width / 2;
    y = height / 2;

    update();
}

window.onmousedown = click;




function update() {
    if (isplaying) {
        context.fillStyle = "white";
        context.fillRect(0, 0, width, height);

        y += yspeed;
        x += xspeed;

        if (x >= width - 50 || x <= 50) {
            xspeed *= -1;
        }

        if (y >= height - 50 || y <= 50) {
            yspeed *= -1;
        }

        context.fillStyle = "blue";
        Utils.fillCircle(x, y, 50);


        requestAnimationFrame(update);
    }

}

/** 
* @param {MouseEvent} eventData
*/

function click(eventData) {

    let mouseX = eventData.pageX;
    let mouseY = eventData.pageY;


    if (Utils.calculateDistance(x, y, mouseX, mouseY) < 50) {
        context.fillStyle = "red";
        Utils.fillCircle(mouseX, mouseY, 25);
        isplaying = false;
    }


}
