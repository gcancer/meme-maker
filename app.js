const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용하는 변수. Ready for Drawing

// canvas의 size
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 15, 100);
ctx.fillRect(365, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(290, 130, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(270, 110, 8, Math.PI, 2 * Math.PI);
ctx.arc(310, 110, 8, Math.PI, 2 * Math.PI);
ctx.fill();