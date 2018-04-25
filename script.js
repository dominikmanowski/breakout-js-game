const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 100, 50);
ctx.fillStyle = "#459";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 50, 0, Math.PI*2, false);
ctx.fillStyle = "magenta";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 55, 100, 100);
ctx.strokeStyle = "rgba(0, 66, 255, .5)";
ctx.stroke();
ctx.closePath();