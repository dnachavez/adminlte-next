export const adminlteColors = {
  aqua: "#00c0ef",
  "aqua-active": "#00a7d0",
  red: "#dd4b39",
  "red-active": "#d33724",
  green: "#00a65a",
  "green-active": "#008d4c",
  yellow: "#f39c12",
  "yellow-active": "#db8b0b",
  blue: "#0073b7",
  "blue-active": "#005384",
  "light-blue": "#3c8dbc",
  "light-blue-active": "#357ca5",
  navy: "#001f3f",
  "navy-active": "#001a35",
  teal: "#39cccc",
  "teal-active": "#30bbbb",
  olive: "#3d9970",
  "olive-active": "#368763",
  lime: "#01ff70",
  "lime-active": "#00e765",
  orange: "#ff851b",
  "orange-active": "#ff7701",
  fuchsia: "#f012be",
  "fuchsia-active": "#db0ead",
  purple: "#605ca8",
  "purple-active": "#555299",
  maroon: "#d81b60",
  "maroon-active": "#ca195a",
  black: "#111111",
  "black-active": "#000000",
  gray: "#d2d6de",
  "gray-active": "#b5bbc8",
} as const

export type AdminLTEColor =
  | "aqua"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "light-blue"
  | "navy"
  | "teal"
  | "olive"
  | "lime"
  | "orange"
  | "fuchsia"
  | "purple"
  | "maroon"
  | "black"
  | "gray"

export type BoxVariant =
  | "default"
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"

export const boxVariantColors: Record<BoxVariant, string> = {
  default: "#d2d6de",
  primary: "#3c8dbc",
  info: "#00c0ef",
  success: "#00a65a",
  warning: "#f39c12",
  danger: "#dd4b39",
}

export const bgColorMap: Record<AdminLTEColor, string> = {
  aqua: "bg-[#00c0ef] text-white",
  red: "bg-[#dd4b39] text-white",
  green: "bg-[#00a65a] text-white",
  yellow: "bg-[#f39c12] text-white",
  blue: "bg-[#0073b7] text-white",
  "light-blue": "bg-[#3c8dbc] text-white",
  navy: "bg-[#001f3f] text-white",
  teal: "bg-[#39cccc] text-white",
  olive: "bg-[#3d9970] text-white",
  lime: "bg-[#01ff70] text-[#444]",
  orange: "bg-[#ff851b] text-white",
  fuchsia: "bg-[#f012be] text-white",
  purple: "bg-[#605ca8] text-white",
  maroon: "bg-[#d81b60] text-white",
  black: "bg-[#111] text-white",
  gray: "bg-[#d2d6de] text-[#444]",
}

export const progressBarColorMap: Record<string, string> = {
  aqua: "bg-[#00c0ef]",
  red: "bg-[#dd4b39]",
  green: "bg-[#00a65a]",
  yellow: "bg-[#f39c12]",
  blue: "bg-[#3c8dbc]",
  purple: "bg-[#605ca8]",
}
