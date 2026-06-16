import { crossSectionArea, normalizeState, formatNumber } from "./formulas.js";

export function drawCrossSection(canvas, state) {
  const context = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.max(320, Math.floor(rect.width * scale));
  canvas.height = Math.floor(300 * scale);
  context.scale(scale, scale);

  const width = canvas.width / scale;
  const height = canvas.height / scale;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#fbfaf7";
  context.fillRect(0, 0, width, height);

  const normalized = normalizeState(state);
  const area = crossSectionArea(state);

  context.strokeStyle = "#25313f";
  context.lineWidth = 1;
  context.strokeRect(20, 20, width - 40, height - 40);

  if (!normalized.valid) {
    context.fillStyle = "#8a241f";
    context.font = "16px system-ui";
    context.fillText("Invalid parameter range for current cross-section.", 36, 60);
    return;
  }

  const halfOne = Math.sqrt(normalized.r1 ** 2 - normalized.x ** 2);
  const halfTwo = Math.sqrt(normalized.r2 ** 2 - normalized.x ** 2);
  const baseScale = Math.min((width - 90) / (2 * halfTwo + 1), (height - 100) / (2 * halfTwo + 1));
  const cx = width / 2;
  const cy = height / 2 + 16;
  const beta = normalized.beta;
  const dx1 = halfOne * baseScale;
  const dy1 = 0;
  const dx2 = Math.cos(beta) * halfTwo * baseScale;
  const dy2 = Math.sin(beta) * halfTwo * baseScale;

  const points = [
    [cx - dx1 - dx2, cy - dy1 - dy2],
    [cx + dx1 - dx2, cy + dy1 - dy2],
    [cx + dx1 + dx2, cy + dy1 + dy2],
    [cx - dx1 + dx2, cy - dy1 + dy2]
  ];

  context.fillStyle = "rgba(56, 121, 113, 0.18)";
  context.strokeStyle = "#2f6f67";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(points[0][0], points[0][1]);
  for (const point of points.slice(1)) {
    context.lineTo(point[0], point[1]);
  }
  context.closePath();
  context.fill();
  context.stroke();

  context.strokeStyle = "#b45d36";
  context.setLineDash([6, 5]);
  context.beginPath();
  context.moveTo(cx - dx1, 34);
  context.lineTo(cx - dx1, height - 34);
  context.moveTo(cx + dx1, 34);
  context.lineTo(cx + dx1, height - 34);
  context.stroke();
  context.setLineDash([]);

  context.fillStyle = "#25313f";
  context.font = "14px system-ui";
  context.fillText(`A(x) = ${formatNumber(area)}`, 34, 46);
  context.fillText(`|x| <= ${formatNumber(normalized.a)}`, 34, 68);
}
