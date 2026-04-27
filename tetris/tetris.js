const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");
const nextCanvas = document.getElementById("next-canvas");
const nctx = nextCanvas.getContext("2d");

const COLS = 12,
  ROWS = 24,
  BLOCK = 20;
const COLORS = [
  "",
  "#4fc3f7",
  "#ffc107",
  "#7c3aed",
  "#f44336",
  "#4caf50",
  "#ff9800",
  "#e91e63",
];
const SHAPES = [
  [],
  [[1, 1, 1, 1]],
  [
    [2, 2],
    [2, 2],
  ],
  [
    [0, 3, 0],
    [3, 3, 3],
  ],
  [
    [4, 0],
    [4, 0],
    [4, 4],
  ],
  [
    [0, 5],
    [0, 5],
    [5, 5],
  ],
  [
    [6, 6, 0],
    [0, 6, 6],
  ],
  [
    [0, 7, 7],
    [7, 7, 0],
  ],
];

let board,
  score,
  level,
  lines,
  current,
  next,
  gameRunning,
  paused,
  dropInterval,
  dropCounter,
  lastTime;

function emptyBoard() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
}

function randomPiece() {
  const type = Math.floor(Math.random() * 7) + 1;
  return {
    shape: SHAPES[type].map((r) => [...r]),
    type,
    x: Math.floor(COLS / 2) - 1,
    y: 0,
  };
}

function drawBlock(context, x, y, type, size = BLOCK) {
  context.fillStyle = COLORS[type];
  context.fillRect(x * size + 1, y * size + 1, size - 2, size - 2);
  context.fillStyle = "rgba(255,255,255,0.15)";
  context.fillRect(x * size + 1, y * size + 1, size - 2, 3);
}

function drawBoard() {
  ctx.fillStyle = "#0d0820";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      if (board[r][c]) drawBlock(ctx, c, r, board[r][c]);
}

function drawPiece(p) {
  p.shape.forEach((row, r) =>
    row.forEach((v, c) => {
      if (v) drawBlock(ctx, p.x + c, p.y + r, p.type);
    }),
  );
}

function drawGhost() {
  let g = { ...current, shape: current.shape.map((r) => [...r]) };
  while (!collides(g, 0, 1)) g.y++;
  g.shape.forEach((row, r) =>
    row.forEach((v, c) => {
      if (v) {
        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.fillRect(
          (g.x + c) * BLOCK + 1,
          (g.y + r) * BLOCK + 1,
          BLOCK - 2,
          BLOCK - 2,
        );
      }
    }),
  );
}

function drawNext() {
  nctx.fillStyle = "#0d0820";
  nctx.fillRect(0, 0, 80, 80);
  const s = 16,
    ox = Math.floor((4 - next.shape[0].length) / 2),
    oy = Math.floor((4 - next.shape.length) / 2);
  next.shape.forEach((row, r) =>
    row.forEach((v, c) => {
      if (v) drawBlock(nctx, ox + c, oy + r, next.type, s);
    }),
  );
}

function collides(p, dx = 0, dy = 0, shape = null) {
  const s = shape || p.shape;
  return s.some((row, r) =>
    row.some((v, c) => {
      if (!v) return false;
      const nx = p.x + c + dx,
        ny = p.y + r + dy;
      return nx < 0 || nx >= COLS || ny >= ROWS || (ny >= 0 && board[ny][nx]);
    }),
  );
}

function place() {
  current.shape.forEach((row, r) =>
    row.forEach((v, c) => {
      if (v) board[current.y + r][current.x + c] = current.type;
    }),
  );
  clearLines();
  current = next;
  next = randomPiece();
  if (collides(current)) endGame();
}

function clearLines() {
  let cleared = 0;
  for (let r = ROWS - 1; r >= 0; r--) {
    if (board[r].every((v) => v)) {
      board.splice(r, 1);
      board.unshift(Array(COLS).fill(0));
      cleared++;
      r++;
    }
  }
  if (cleared) {
    score += ([0, 100, 300, 500, 800][cleared] || 800) * level;
    lines += cleared;
    level = Math.floor(lines / 10) + 1;
    dropInterval = Math.max(100, 800 - (level - 1) * 70);
    document.getElementById("score-val").textContent = score;
    document.getElementById("level-val").textContent = level;
    document.getElementById("lines-val").textContent = lines;
  }
}

function rotate(p) {
  const s = p.shape[0].map((_, i) => p.shape.map((r) => r[i]).reverse());
  if (!collides(p, 0, 0, s)) p.shape = s;
  else if (!collides(p, 1, 0, s)) {
    p.shape = s;
    p.x++;
  } else if (!collides(p, -1, 0, s)) {
    p.shape = s;
    p.x--;
  }
}

function hardDrop() {
  while (!collides(current, 0, 1)) current.y++;
  place();
}

function update(time = 0) {
  if (!gameRunning || paused) return;
  dropCounter += time - lastTime;
  lastTime = time;
  if (dropCounter > dropInterval) {
    if (!collides(current, 0, 1)) current.y++;
    else place();
    dropCounter = 0;
  }
  drawBoard();
  drawGhost();
  drawPiece(current);
  drawNext();
  requestAnimationFrame(update);
}

function startGame() {
  board = emptyBoard();
  score = 0;
  level = 1;
  lines = 0;
  dropInterval = 800;
  dropCounter = 0;
  lastTime = 0;
  gameRunning = true;
  paused = false;
  document.getElementById("score-val").textContent = 0;
  document.getElementById("level-val").textContent = 1;
  document.getElementById("lines-val").textContent = 0;
  document.getElementById("game-over").style.display = "none";
  document.getElementById("pause-btn").textContent = "Пауз";
  current = randomPiece();
  next = randomPiece();
  requestAnimationFrame(update);
}

function endGame() {
  gameRunning = false;
  document.getElementById("final-score").textContent = "Оноо: " + score;
  document.getElementById("game-over").style.display = "flex";
}

function togglePause() {
  if (!gameRunning) return;
  paused = !paused;
  document.getElementById("pause-btn").textContent = paused
    ? "Үргэлжлүүлэх"
    : "Пауз";
  if (!paused) {
    lastTime = performance.now();
    requestAnimationFrame(update);
  }
}

document.addEventListener("keydown", (e) => {
  if (!gameRunning || paused) return;
  if (e.key === "ArrowLeft" && !collides(current, -1, 0)) current.x--;
  if (e.key === "ArrowRight" && !collides(current, 1, 0)) current.x++;
  if (e.key === "ArrowDown") {
    if (!collides(current, 0, 1)) current.y++;
    else place();
  }
  if (e.key === "ArrowUp") rotate(current);
  if (e.key === " ") {
    e.preventDefault();
    hardDrop();
  }
});

drawBoard();
