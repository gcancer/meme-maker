const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용하는 변수. Ready for Drawing

// canvas의 size
canvas.width = 800;
canvas.height = 800;

// Rectangle
ctx.fillRect(50, 50, 100, 200);