"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let x = width / 2;
let y = height / 2;
let xspeed = 5;
let yspeed = 5;
let playerX = width / 2;

let score1 = 0;
let score2 = 0;
window.onmousemove = movePaddle;
update();


function update() {
    x += xspeed;
    y += yspeed;
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "white";

    context.fillRect(playerX, height - 100, 150, 25);
    context.fillRect(width / 2 - 75, 75, 150, 25);
    Utils.fillCircle(x, y, 10);

    let n = width / 100;

    for (let i = 0; i < n; i++) {
        context.fillRect(0 + i * 100, height / 2, 50, 25);

    }


    if (y >= height - 100 && y <= height - 90) {
        if (x > playerX - 10 && x < playerX + 160) {
            yspeed = -5;
        }
    }

    if (y <= 0) {
        score2++;
        x = width / 2;
        y = height / 2;
        xspeed = 5;
        yspeed = 5;
    }
    if (y >= height) {
        score2++;
        x = width / 2;
        y = height / 2;
        xspeed = 5;
    }
    if (x >= width || x <= 0) {
        xspeed = xspeed * -1;
    }
    context.font = "normal 50pt Arial";
    context.fillText(score2, 50, height / 2 - 50);
    context.fillText(score1, 50, height / 2 + 100);
    requestAnimationFrame(update);
}


/**
 * 
 * @param {MouseEvent} eventData 
 */
function movePaddle(eventData) {

    playerX = eventData.pageX;
}