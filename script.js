/* Johan Ahlqvist */

const canvas = document.getElementById("etchASketchCanvas");
const ctx = canvas.getContext("2d");
canvas.height = canvas.width;
let xMax = canvas.width;
let yMax = canvas.height;
var xCoords;
var yCoords;
const coordJump = 3;
resetCoordinates();

function resetCoordinates() {
    // Reset x and y coordinates
    drawPoint = 0;
    let x = xMax / 2;
    let y = yMax / 2;
    xCoords = new Array();
    yCoords = new Array();
    xCoords[drawPoint] = x;
    yCoords[drawPoint] = y;
    // Clear the canvas
    ctx.clearRect(0, 0, xMax, yMax);
    drawSketch();
}

function horizontalMoveLeft() {
    drawPoint++;
    // Check if inside of canvas bounds
    if ((xCoords[drawPoint - 1] - coordJump) > 0) {
        xCoords[drawPoint] = xCoords[drawPoint - 1] - coordJump;
        yCoords[drawPoint] = yCoords[drawPoint - 1]
        drawSketch();
    } else {
        drawPoint--;
    }
}

function horizontalMoveRight() {
    drawPoint++;
    // Check if inside of canvas bounds
    if ((xCoords[drawPoint - 1] + coordJump) < xMax) {
        xCoords[drawPoint] = xCoords[drawPoint - 1] + coordJump;
        yCoords[drawPoint] = yCoords[drawPoint - 1]
        drawSketch();
    } else {
        drawPoint--;
    }
}

function verticalMoveUp() {
    drawPoint++;
    // Check if inside of canvas bounds
    if ((yCoords[drawPoint - 1] - coordJump) > 0) {
        yCoords[drawPoint] = yCoords[drawPoint - 1] - coordJump;
        xCoords[drawPoint] = xCoords[drawPoint - 1]
        drawSketch();
    } else {
        drawPoint--;
    }
}

function verticalMoveDown() {
    drawPoint++;
    // Check if inside of canvas bounds
    if ((yCoords[drawPoint - 1] + coordJump) < yMax) {
            yCoords[drawPoint] = yCoords[drawPoint - 1] + coordJump;
            xCoords[drawPoint] = xCoords[drawPoint - 1]
            drawSketch();
    } else {
        drawPoint--;
    }
}

function drawSketch() {
    let x = xCoords[0];
    let y = yCoords[0];
    // Draw all the point coordinates
    for (let i = 0; i < xCoords.length; i++) {
        ctx.fillStyle = "grey";
        x = xCoords[i];
        y = yCoords[i];
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    // Show where the drawing point is
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
}