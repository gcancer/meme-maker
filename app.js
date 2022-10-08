const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용하는 변수. Ready for Drawing

// canvas의 size
canvas.width = 800;
canvas.height = 800;

// Rectangle, 
// fillRect는 shorcutFunction, 따라서 선을 그리고 채우는 작업을 해야 함.
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

// 2. 새 경로의 생성
ctx.beginPath(); 
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);

// 1. 같은 경로로 이어져 있어서 모든 ctx에 적용 됨.
// setTimeout(() => ctx.fill(), 5000);
ctx.fillStyle = "red"; 
ctx.fill();

