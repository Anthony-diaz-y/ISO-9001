import type { BlockId } from "../types";

type BlockStyle = {
  chip: string;
  dot: string;
  bar: string;
  soft: string;
  text: string;
};

export const BLOCK_STYLES: Record<BlockId, BlockStyle> = {
  A: {
    chip: "bg-emerald-100 text-emerald-800",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
    soft: "bg-emerald-50",
    text: "text-emerald-700",
  },
  B: {
    chip: "bg-sky-100 text-sky-800",
    dot: "bg-sky-500",
    bar: "bg-sky-500",
    soft: "bg-sky-50",
    text: "text-sky-700",
  },
  C: {
    chip: "bg-amber-100 text-amber-800",
    dot: "bg-amber-500",
    bar: "bg-amber-500",
    soft: "bg-amber-50",
    text: "text-amber-700",
  },
  D: {
    chip: "bg-violet-100 text-violet-800",
    dot: "bg-violet-500",
    bar: "bg-violet-500",
    soft: "bg-violet-50",
    text: "text-violet-700",
  },
};
