"use client";

import { useEffect, useState } from "react";
import { cn } from "@/shared/lib/cn";

type ScoreRingProps = {
  percent: number;
  correct: number;
  total: number;
};

const RADIUS = 70;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScoreRing({ percent, correct, total }: ScoreRingProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setProgress(percent), 120);
    return () => window.clearTimeout(timer);
  }, [percent]);

  const tone =
    percent >= 80
      ? { stroke: "text-emerald-500", label: "Excelente" }
      : percent >= 60
        ? { stroke: "text-amber-500", label: "En camino" }
        : { stroke: "text-rose-500", label: "A reforzar" };

  return (
    <div className="relative mx-auto size-44">
      <svg className="size-full -rotate-90" viewBox="0 0 180 180">
        <circle
          className="text-black/[0.06]"
          cx="90"
          cy="90"
          fill="none"
          r={RADIUS}
          stroke="currentColor"
          strokeWidth="11"
        />
        <circle
          className={cn("transition-all duration-700 ease-out", tone.stroke)}
          cx="90"
          cy="90"
          fill="none"
          r={RADIUS}
          stroke="currentColor"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE}
          strokeLinecap="round"
          strokeWidth="11"
        />
      </svg>

      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <p className="text-4xl font-semibold tracking-[-0.05em] text-ink">{percent}%</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
            {tone.label}
          </p>
          <p className="mt-1 text-[11px] text-muted">
            {correct} de {total}
          </p>
        </div>
      </div>
    </div>
  );
}
