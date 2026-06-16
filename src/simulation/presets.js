export const presets = [
  {
    id: "equal-perpendicular",
    label: "Equal radii, perpendicular",
    state: { r1: 1, r2: 1, betaDeg: 90, x: 0 }
  },
  {
    id: "unequal-perpendicular",
    label: "Unequal radii, perpendicular",
    state: { r1: 1, r2: 2, betaDeg: 90, x: 0 }
  },
  {
    id: "one-two-sixty",
    label: "r1=1, r2=2, beta=60",
    state: { r1: 1, r2: 2, betaDeg: 60, x: 0.25 }
  },
  {
    id: "small-angle",
    label: "Small positive angle",
    state: { r1: 1, r2: 3, betaDeg: 20, x: 0 }
  }
];
