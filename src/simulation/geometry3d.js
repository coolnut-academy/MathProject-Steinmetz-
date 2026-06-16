import { crossSectionGeometry, formatNumber, normalizeState } from "./formulas.js";

export const THREE_MODULE_URL = "https://esm.sh/three@0.165.0";
export const ORBIT_CONTROLS_URL =
  "https://esm.sh/three@0.165.0/examples/jsm/controls/OrbitControls.js";

const defaultVisibility = {
  cylinderOne: true,
  cylinderTwo: true,
  axes: true,
  plane: true,
  intersection: true
};

let cachedThreeModules = null;

export function axisVectors(state) {
  const normalized = normalizeState(state);
  const beta = normalized.valid ? normalized.beta : Math.PI / 3;
  return {
    cylinderOne: { x: 0, y: 0, z: 1 },
    cylinderTwo: { x: 0, y: Math.sin(beta), z: Math.cos(beta) }
  };
}

export function axisAngleDegrees(state) {
  const axes = axisVectors(state);
  const dot =
    axes.cylinderOne.x * axes.cylinderTwo.x +
    axes.cylinderOne.y * axes.cylinderTwo.y +
    axes.cylinderOne.z * axes.cylinderTwo.z;
  return (Math.acos(clamp(dot, -1, 1)) * 180) / Math.PI;
}

export function sampleIntersectionPoints(state, resolution = 22) {
  const normalized = normalizeState(state);
  if (!normalized.valid) {
    return [];
  }

  const steps = clamp(Math.round(Number(resolution) || 22), 10, 42);
  const { r1, r2, a, b, beta } = normalized;
  const sinBeta = Math.sin(beta);
  const cosBeta = Math.cos(beta);
  const maxZ = (b + a * Math.abs(cosBeta)) / sinBeta;
  const points = [];
  const maxPoints = 5200;

  for (let ix = 0; ix < steps; ix += 1) {
    const x = lerp(-a, a, ix / (steps - 1));
    for (let iy = 0; iy < steps; iy += 1) {
      const y = lerp(-r1, r1, iy / (steps - 1));
      if (x * x + y * y > r1 * r1) {
        continue;
      }
      for (let iz = 0; iz < steps; iz += 1) {
        const z = lerp(-maxZ, maxZ, iz / (steps - 1));
        const secondDistance = y * cosBeta - z * sinBeta;
        if (x * x + secondDistance * secondDistance <= r2 * r2) {
          points.push({ x, y, z });
          if (points.length >= maxPoints) {
            return points;
          }
        }
      }
    }
  }

  return points;
}

export async function initGeometry3d(root, initialState, options = {}) {
  if (!root) {
    return null;
  }

  const { THREE, OrbitControls } = await loadThreeModules();
  if (!webglAvailable(root.ownerDocument)) {
    throw new Error("WebGL is not available in this browser context.");
  }

  root.replaceChildren();
  const mount = root.ownerDocument.createElement("div");
  mount.className = "simulation-3d-canvas";
  root.append(mount);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xfbfaf7);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.01, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  mount.append(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;

  const group = new THREE.Group();
  scene.add(group);

  const ambient = new THREE.HemisphereLight(0xffffff, 0xc8c0b2, 1.8);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(4, 7, 6);
  scene.add(key);

  let objects = {};
  let lastState = null;
  let lastResolution = null;
  let animationFrame = 0;
  let disposed = false;
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(mount);

  function update(state) {
    if (disposed) {
      return;
    }
    const normalized = normalizeState(state);
    options.onStatus?.(statusText(normalized, state));
    if (!normalized.valid) {
      clearGroup(group);
      objects = {};
      renderOnce();
      return;
    }

    const resolution = clamp(Math.round(Number(state.resolution) || 22), 10, 42);
    const structuralChange =
      !lastState ||
      lastState.r1 !== normalized.r1 ||
      lastState.r2 !== normalized.r2 ||
      lastState.betaDeg !== normalized.betaDeg ||
      lastState.x !== normalized.x ||
      lastResolution !== resolution;

    if (structuralChange) {
      clearGroup(group);
      objects = buildObjects(THREE, normalized, state, resolution);
      group.add(
        objects.cylinderOne,
        objects.cylinderTwo,
        objects.axes,
        objects.plane,
        objects.intersection,
        objects.centerMarker
      );
      fitCamera(normalized);
      lastState = { ...normalized };
      lastResolution = resolution;
    }

    applyVisibility(state);
    renderOnce();
  }

  function resetView() {
    if (!lastState) {
      fitCamera(normalizeState(initialState));
    } else {
      fitCamera(lastState);
    }
    renderOnce();
  }

  function applyVisibility(state) {
    const visibility = { ...defaultVisibility, ...state.visibility };
    if (objects.cylinderOne) objects.cylinderOne.visible = visibility.cylinderOne;
    if (objects.cylinderTwo) objects.cylinderTwo.visible = visibility.cylinderTwo;
    if (objects.axes) objects.axes.visible = visibility.axes;
    if (objects.plane) objects.plane.visible = visibility.plane;
    if (objects.intersection) objects.intersection.visible = visibility.intersection;
  }

  function fitCamera(normalized) {
    const span = sceneSpan(normalized);
    camera.near = Math.max(0.01, span / 120);
    camera.far = span * 14;
    camera.position.set(span * 1.7, -span * 1.9, span * 1.35);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    controls.target.set(0, 0, 0);
    controls.update();
  }

  function resize() {
    const rect = mount.getBoundingClientRect();
    const width = Math.max(320, Math.floor(rect.width));
    const height = Math.max(320, Math.floor(rect.height || 380));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderOnce();
  }

  function renderOnce() {
    if (disposed) {
      return;
    }
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(() => {
      controls.update();
      renderer.render(scene, camera);
    });
  }

  function dispose() {
    disposed = true;
    resizeObserver.disconnect();
    cancelAnimationFrame(animationFrame);
    controls.dispose();
    clearGroup(group);
    renderer.dispose();
    renderer.domElement.remove();
  }

  resize();
  update(initialState);

  return { update, resetView, dispose };
}

function buildObjects(THREE, normalized, state, resolution) {
  const length = sceneSpan(normalized) * 1.4;
  const cylSegments = 48;
  const cylinderOne = createCylinder(
    THREE,
    normalized.r1,
    length,
    axisVectors(normalized).cylinderOne,
    0x2f6f67,
    0.27,
    cylSegments
  );
  const cylinderTwo = createCylinder(
    THREE,
    normalized.r2,
    length,
    axisVectors(normalized).cylinderTwo,
    0x315f86,
    0.22,
    cylSegments
  );
  const axes = createAxes(THREE, normalized, length);
  const plane = createCrossSectionPlane(THREE, normalized);
  const intersection = createIntersectionCloud(THREE, normalized, resolution);
  const centerMarker = createCenterMarker(THREE);

  cylinderOne.name = "Cylinder r1";
  cylinderTwo.name = "Cylinder r2";
  plane.name = "Current x-plane parallelogram";
  intersection.name = "Sampled intersection approximation";

  return { cylinderOne, cylinderTwo, axes, plane, intersection, centerMarker };
}

function createCylinder(THREE, radius, length, axis, color, opacity, segments) {
  const geometry = new THREE.CylinderGeometry(radius, radius, length, segments, 1, true);
  const material = new THREE.MeshStandardMaterial({
    color,
    transparent: true,
    opacity,
    side: THREE.DoubleSide,
    depthWrite: false,
    roughness: 0.75
  });
  const mesh = new THREE.Mesh(geometry, material);
  rotateFromYAxis(THREE, mesh, axis);
  return mesh;
}

function createAxes(THREE, normalized, length) {
  const axes = axisVectors(normalized);
  const group = new THREE.Group();
  group.add(createLine(THREE, scaleVector(axes.cylinderOne, -length / 2), scaleVector(axes.cylinderOne, length / 2), 0x244f4b));
  group.add(createLine(THREE, scaleVector(axes.cylinderTwo, -length / 2), scaleVector(axes.cylinderTwo, length / 2), 0x25313f));
  return group;
}

function createCrossSectionPlane(THREE, normalized) {
  const geometry = crossSectionGeometry(normalized);
  const vertices = geometry.vertices.flatMap((point) => [geometry.x, point.y, point.z]);
  const buffer = new THREE.BufferGeometry();
  buffer.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  buffer.setIndex([0, 1, 2, 0, 2, 3]);
  buffer.computeVertexNormals();
  const material = new THREE.MeshStandardMaterial({
    color: 0xb45d36,
    transparent: true,
    opacity: 0.48,
    side: THREE.DoubleSide,
    roughness: 0.65
  });
  const mesh = new THREE.Mesh(buffer, material);
  const outline = new THREE.LineLoop(
    new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3)),
    new THREE.LineBasicMaterial({ color: 0x8a241f })
  );
  const group = new THREE.Group();
  group.add(mesh, outline);
  return group;
}

function createIntersectionCloud(THREE, normalized, resolution) {
  const points = sampleIntersectionPoints(normalized, resolution);
  const vertices = points.flatMap((point) => [point.x, point.y, point.z]);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  const material = new THREE.PointsMaterial({
    color: 0x2f6f67,
    size: sceneSpan(normalized) / 90,
    transparent: true,
    opacity: 0.68,
    depthWrite: false
  });
  return new THREE.Points(geometry, material);
}

function createCenterMarker(THREE) {
  const geometry = new THREE.SphereGeometry(0.035, 16, 8);
  const material = new THREE.MeshStandardMaterial({ color: 0x25313f });
  return new THREE.Mesh(geometry, material);
}

function createLine(THREE, start, end, color) {
  const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(start.x, start.y, start.z),
    new THREE.Vector3(end.x, end.y, end.z)
  ]);
  return new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, linewidth: 2 }));
}

function rotateFromYAxis(THREE, object, axis) {
  const from = new THREE.Vector3(0, 1, 0);
  const to = new THREE.Vector3(axis.x, axis.y, axis.z).normalize();
  object.quaternion.setFromUnitVectors(from, to);
}

function statusText(normalized, state) {
  if (!normalized.valid) {
    return `3D view paused: ${normalized.errors.join(" ")}`;
  }
  return `3D view loaded. Axes meet at ${formatNumber(axisAngleDegrees(state), 3)} degrees. Intersection is a sampled visual approximation.`;
}

function sceneSpan(normalized) {
  const state = normalized.valid ? normalized : normalizeState(normalized);
  if (!state.valid) {
    return 6;
  }
  const zSpan = (state.b + state.a * Math.abs(Math.cos(state.beta))) / Math.sin(state.beta);
  return Math.max(3, state.b * 2.4, zSpan * 1.35);
}

function scaleVector(vector, scale) {
  return {
    x: vector.x * scale,
    y: vector.y * scale,
    z: vector.z * scale
  };
}

function clearGroup(group) {
  while (group.children.length) {
    const child = group.children.pop();
    disposeObject(child);
  }
}

function disposeObject(object) {
  object.traverse?.((child) => {
    child.geometry?.dispose?.();
    if (Array.isArray(child.material)) {
      child.material.forEach((material) => material.dispose?.());
    } else {
      child.material?.dispose?.();
    }
  });
}

async function loadThreeModules() {
  if (!cachedThreeModules) {
    cachedThreeModules = Promise.all([
      import(THREE_MODULE_URL),
      import(ORBIT_CONTROLS_URL)
    ]).then(([THREE, controlsModule]) => ({
      THREE,
      OrbitControls: controlsModule.OrbitControls
    }));
  }
  return cachedThreeModules;
}

function webglAvailable(document) {
  const canvas = document.createElement("canvas");
  return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
}

function lerp(start, end, t) {
  return start + (end - start) * t;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
