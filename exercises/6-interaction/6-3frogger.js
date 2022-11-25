"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let width = context.canvas.width;
let height = context.canvas.height;
let yturtle = 0;
let xturtle = width / 2;
let x = 0;
let x2 = width - 270;
let xspeed = 10;
let xspeed2 = 10;
let isplaying = true;
let winX = width / 2;
let winY = 75;





setup();

function setup() {
    if (isplaying) {
        land();
        frog(xturtle, yturtle);
        car1();
        car2();
        winpos();
        requestAnimationFrame(setup);
    }
    if (Utils.calculateDistance(winX, height - winY, xturtle, yturtle) < 20) {
        isplaying = false;
        context.fillStyle = "green";
        context.font = "normal 100pt Arial";
        context.fillText("You Won", 500, 450);
    }
    console.log(x2, 250, xturtle, yturtle);

    if (Utils.calculateDistance(x + 125, height - 300, xturtle, yturtle) < 100) {
        isplaying = false;
        context.fillStyle = "red";
        context.font = "normal 100pt Arial";
        context.fillText("You Lose", 500, 450);
    }

    if (Utils.calculateDistance(x2 + 125, height - 600, xturtle, yturtle) < 100) {
        isplaying = false;
        context.fillStyle = "red";
        context.font = "normal 100pt Arial";
        context.fillText("You Lose", 500, 450);
    }

}




function winpos(winX, winY) {

    context.fillStyle = "blue";
    Utils.fillCircle(winX, winY, 25);
}

function car1() {
    x += xspeed;
    if (x >= width - 250 || x < 0) {
        xspeed *= -1;
    }


    context.fillStyle = "red";
    context.beginPath();
    context.rect(x + 0, 175, 250, 125);
    context.fill();
    context.fillStyle = "lightblue";
    context.beginPath();
    context.rect(x + 20, 190, 40, 100);
    context.rect(x + 160, 190, 80, 100);
    context.fill();
}

function car2() {
    x2 += xspeed2;
    if (x2 >= width - 250 || x2 < 0) {
        xspeed2 *= -1;
    }


    context.fillStyle = "red";
    context.beginPath();
    context.rect(x2, 475, 250, 125);
    context.fill();
    context.fillStyle = "lightblue";
    context.beginPath();
    context.rect(x2 + 20, 490, 40, 100);
    context.rect(x2 + 160, 490, 80, 100);
    context.fill();
}



function land() {
    context.fillStyle = "lightgreen";
    context.beginPath();
    context.rect(0, 0, width, height);
    context.fill();

    context.fillStyle = "gray";
    context.beginPath();
    context.rect(0, height / 6 * 1.25, width, 450);
    context.fill();

    context.fillStyle = "lightgray";
    context.beginPath();
    context.rect(0, height / 6 * 2.5, width, 150);
    context.fill();
}

/**
 * 
 * @param {KeyboardEvent} eventData 
 */
function down(eventData) {
    if (eventData.code == "ArrowUp") {

        yturtle += 10;
    }

}


function frog(xturtle, yturtle) {



    window.onkeydown = down;
    context.fillStyle = "#006400";
    Utils.fillCircle(xturtle, 700 - yturtle, 40);
    Utils.fillCircle(xturtle + 40, 700 + 40 - yturtle, 20);
    Utils.fillCircle(xturtle + 40, 700 - 40 - yturtle, 20);
    Utils.fillCircle(xturtle - 40, 700 + 40 - yturtle, 20);
    Utils.fillCircle(xturtle - 40, 700 - 40 - yturtle, 20);
    Utils.fillCircle(xturtle, 700 - 60 - yturtle, 20);

}
