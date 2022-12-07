"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let playerX = width / 2;
let score1 = 0;
let score2 = 0;



let bubbles = [];
window.onmousemove = movePaddle;
setup();

update();

function setup() {
    for (let i = 0; i < 10; i++) {
        let bubble = {
            x: Math.random() * width,
            y: Math.random() * height,
            size: 10,
            xspeed: Utils.randomNumber(-5, 5),
            yspeed: 5,


        };
        bubbles[i] = bubble;
    }
    console.log(bubbles);
}

function update() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "white";
    let n = width / 100;
    for (let i = 0; i < n; i++) {
        context.fillRect(0 + i * 100, height / 2, 50, 25);

    }


    for (let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];
        bubble.x += bubble.xspeed;
        bubble.y += bubble.yspeed;

        if (bubble.y >= height) {
            score2++;
            bubble.x = width / 2;
            bubble.y = height / 2;
            bubble.xspeed = Utils.randomNumber(-5, 5);
            bubble.yspeed = 5;
        }

        if (bubble.y <= 0) {
            score1++;
            bubble.x = width / 2;
            bubble.y = height / 2;
            bubble.xspeed = Utils.randomNumber(-5, 5);
            bubble.yspeed = 5;

        }

        if (bubble.x >= width || bubble.x <= 0) {
            bubble.xspeed = bubble.xspeed * -1;
        }

        context.font = "normal 50pt Arial";
        context.fillText(score2, 50, height / 2 - 50);
        context.fillText(score1, 50, height / 2 + 100);
        drawBubble(bubble);


        if (bubble.y >= height - 100 && bubble.y <= height - 90) {
            if (bubble.x > playerX - 85 && bubble.x < playerX + 85) {
                bubble.yspeed = -5;
            }
        }
    }
    context.fillRect(playerX - 75, height - 100, 150, 25);
    context.fillRect(width / 2 - 75, 75, 150, 25);
    requestAnimationFrame(update);
}

function drawBubble(bubble) {
    context.fillStyle = 'white';
    Utils.fillCircle(bubble.x, bubble.y, bubble.size);




}

/**
 * 
 * @param {MouseEvent} eventData 
 */
function movePaddle(eventData) {

    playerX = eventData.pageX;
}