"use strict";
import context from './context.js';

/** 
*@param { Number } x1
*@param { Number } y1
*@param { Number } x2
*@param { Number } y2
*/

export function drawLine(x1, y1, x2, y2) {

    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

export function rgb(r, g, b) {
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

export function fillAndStrokeCircle(x, y, radius) {
    fillCircle(x, y, radius, 0, Math.PI * 2);
    strokeCircle(x, y, radius, 0, Math.PI * 2);

}


export function fillCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
}
export function strokeCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.stroke();
}

export function fillAndStrokeEllipse(x, y, rX, rY) {
    fillEllipse(x, y, rX, rY);
    strokeEllipse(x, y, rX, rY);


}

function fillEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.fill();
}

function strokeEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.stroke();
}

