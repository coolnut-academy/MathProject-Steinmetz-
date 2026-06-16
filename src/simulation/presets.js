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
    id: "one-three-forty-five",
    label: "r1=1, r2=3, beta=45",
    state: { r1: 1, r2: 3, betaDeg: 45, x: 0.5 }
  },
  {
    id: "nearly-equal",
    label: "Nearly equal radii",
    state: { r1: 1.9, r2: 2, betaDeg: 70, x: 0.75 }
  },
  {
    id: "small-ratio",
    label: "Small radius ratio",
    state: { r1: 0.5, r2: 3, betaDeg: 65, x: 0.2 }
  },
  {
    id: "small-angle",
    label: "Small positive angle",
    state: { r1: 1, r2: 3, betaDeg: 12, x: 0 }
  }
];
