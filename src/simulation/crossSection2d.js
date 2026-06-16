import { crossSectionGeometry, formatNumber, normalizeState } from "./formulas.js";

export function drawCrossSection(canvas, state) {
  const context = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.max(320, Math.floor(rect.width * scale));
  canvas.height = Math.floor(380 * scale);
  context.scale(scale, scale);

  const width = canvas.width / scale;
  const height = canvas.height / scale;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#fbfaf7";
  context.fillRect(0, 0, width, height);

  const normalized = normalizeState(state);

  context.strokeStyle = "#25313f";
  context.lineWidth = 1;
  context.strokeRect(18, 18, width - 36, height - 36);

  if (!normalized.valid) {
    context.fillStyle = "#8a241f";
    context.font = "16px system-ui, sans-serif";
    wrapCanvasText(
      context,
      `Invalid parameter range. ${normalized.errors.join(" ")}`,
      36,
      60,
      width - 72,
      22
    );
    return;
  }

  const geometry = crossSectionGeometry(state);
  const viewport = getViewport(geometry, width, height);
  drawGrid(context, viewport, width, height);
  drawAxes(context, viewport, width, height);
  drawStripOne(context, geometry, viewport);
  drawStripTwo(context, geometry, viewport);

  context.fillStyle = "rgba(56, 121, 113, 0.18)";
  context.strokeStyle = "#2f6f67";
  context.lineWidth = 2;
  context.beginPath();
  const points = geometry.vertices.map((point) => toCanvas(point, viewport));
  context.moveTo(points[0].x, points[0].y);
  for (const point of points.slice(1)) {
    context.lineTo(point.x, point.y);
  }
  context.closePath();
  context.fill();
  context.stroke();

  context.fillStyle = "#25313f";
  context.font = "14px system-ui, sans-serif";
  context.fillText(`A(x) = ${formatNumber(geometry.area)}`, 34, 44);
  context.fillText(`a(x) = ${formatNumber(geometry.halfOne)}, b(x) = ${formatNumber(geometry.halfTwo)}`, 34, 66);
  context.fillText(`valid interval: ${formatNumber(-geometry.a)} <= x <= ${formatNumber(geometry.a)}`, 34, 88);
  context.fillText(`beta = ${formatNumber(geometry.betaDeg)} degrees`, 34, 110);
}

function getViewport(geometry, width, height) {
  const yValues = geometry.vertices.map((point) => point.y);
  const zValues = geometry.vertices.map((point) => point.z);
  const ySpan = Math.max(...yValues) - Math.min(...yValues) || 1;
  const zSpan = Math.max(...zValues) - Math.min(...zValues) || 1;
  const padding = Math.max(ySpan, zSpan) * 0.2 + 0.25;
  const yMin = Math.min(...yValues, -geometry.halfTwo) - padding;
  const yMax = Math.max(...yValues, geometry.halfTwo) + padding;
  const zMin = Math.min(...zValues, -geometry.halfTwo) - padding;
  const zMax = Math.max(...zValues, geometry.halfTwo) + padding;
  const plot = {
    left: 52,
    right: width - 28,
    top: 128,
    bottom: height - 42
  };

  return { yMin, yMax, zMin, zMax, plot };
}

function toCanvas(point, viewport) {
  const { plot, yMin, yMax, zMin, zMax } = viewport;
  const x = plot.left + ((point.y - yMin) / (yMax - yMin)) * (plot.right - plot.left);
  const y = plot.bottom - ((point.z - zMin) / (zMax - zMin)) * (plot.bottom - plot.top);
  return { x, y };
}

function drawGrid(context, viewport, width, height) {
  const { plot } = viewport;
  context.save();
  context.strokeStyle = "rgba(101, 113, 127, 0.18)";
  context.lineWidth = 1;
  for (let i = 0; i <= 4; i += 1) {
    const x = plot.left + ((plot.right - plot.left) * i) / 4;
    const y = plot.top + ((plot.bottom - plot.top) * i) / 4;
    context.beginPath();
    context.moveTo(x, plot.top);
    context.lineTo(x, plot.bottom);
    context.moveTo(plot.left, y);
    context.lineTo(plot.right, y);
    context.stroke();
  }
  context.strokeStyle = "#d7cfc1";
  context.strokeRect(plot.left, plot.top, plot.right - plot.left, plot.bottom - plot.top);
  context.restore();
}

function drawAxes(context, viewport) {
  const { plot, yMin, yMax, zMin, zMax } = viewport;
  context.save();
  context.strokeStyle = "#65717f";
  context.fillStyle = "#25313f";
  context.lineWidth = 1.2;
  context.font = "13px system-ui, sans-serif";

  if (yMin <= 0 && yMax >= 0) {
    const axis = toCanvas({ y: 0, z: 0 }, viewport).x;
    context.beginPath();
    context.moveTo(axis, plot.top);
    context.lineTo(axis, plot.bottom);
    context.stroke();
    context.fillText("z", axis + 6, plot.top + 16);
  }

  if (zMin <= 0 && zMax >= 0) {
    const axis = toCanvas({ y: 0, z: 0 }, viewport).y;
    context.beginPath();
    context.moveTo(plot.left, axis);
    context.lineTo(plot.right, axis);
    context.stroke();
    context.fillText("y", plot.right - 14, axis - 8);
  }

  context.fillText(formatNumber(yMin, 2), plot.left, plot.bottom + 22);
  context.fillText(formatNumber(yMax, 2), plot.right - 42, plot.bottom + 22);
  context.fillText(formatNumber(zMax, 2), 10, plot.top + 4);
  context.fillText(formatNumber(zMin, 2), 10, plot.bottom);
  context.restore();
}

function drawStripOne(context, geometry, viewport) {
  const { plot, zMin, zMax } = viewport;
  context.save();
  context.strokeStyle = "#b45d36";
  context.lineWidth = 1.8;
  context.setLineDash([6, 5]);

  for (const y of [-geometry.halfOne, geometry.halfOne]) {
    const start = toCanvas({ y, z: zMin }, viewport);
    const end = toCanvas({ y, z: zMax }, viewport);
    context.beginPath();
    context.moveTo(start.x, plot.bottom);
    context.lineTo(end.x, plot.top);
    context.stroke();
  }

  context.setLineDash([]);
  context.fillStyle = "#8a521d";
  context.font = "13px system-ui, sans-serif";
  const label = toCanvas({ y: geometry.halfOne, z: zMax }, viewport);
  context.fillText("|y| <= a(x)", Math.min(label.x + 6, plot.right - 92), plot.top + 18);
  context.restore();
}

function drawStripTwo(context, geometry, viewport) {
  const { plot, yMin, yMax } = viewport;
  context.save();
  context.strokeStyle = "#315f86";
  context.lineWidth = 1.8;
  context.setLineDash([8, 5]);

  for (const signedWidth of [-geometry.halfTwo, geometry.halfTwo]) {
    const start = stripTwoPoint(yMin, signedWidth, geometry);
    const end = stripTwoPoint(yMax, signedWidth, geometry);
    const canvasStart = toCanvas(start, viewport);
    const canvasEnd = toCanvas(end, viewport);
    context.beginPath();
    context.moveTo(canvasStart.x, canvasStart.y);
    context.lineTo(canvasEnd.x, canvasEnd.y);
    context.stroke();
  }

  context.setLineDash([]);
  context.fillStyle = "#315f86";
  context.font = "13px system-ui, sans-serif";
  context.fillText("|y cos beta - z sin beta| <= b(x)", plot.left + 10, plot.bottom - 12);
  context.restore();
}

function stripTwoPoint(y, signedWidth, geometry) {
  return {
    y,
    z: (y * geometry.cosBeta - signedWidth) / geometry.sinBeta
  };
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(/\s+/);
  let line = "";
  let currentY = y;
  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    if (context.measureText(testLine).width > maxWidth && line) {
      context.fillText(line, x, currentY);
      line = word;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line) {
    context.fillText(line, x, currentY);
  }
}
