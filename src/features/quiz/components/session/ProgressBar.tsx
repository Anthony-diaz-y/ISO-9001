import { cn } from "@/shared/lib/cn";

type ProgressBarProps = {
  value: number;
  max: number;
  className?: string;
};

export function ProgressBar({ value, max, className }: ProgressBarProps) {
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

  return (
    <div
      aria-valuemax={max}
      aria-valuemin={0}
      aria-valuenow={value}
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-black/[0.07]", className)}
      role="progressbar"
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand to-emerald-400 transition-[width] duration-500 ease-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
