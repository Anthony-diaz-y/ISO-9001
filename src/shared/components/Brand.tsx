import { CheckIcon } from "@/shared/components/Icons";
import { cn } from "@/shared/lib/cn";

type BrandProps = {
  compact?: boolean;
  className?: string;
};

export function Brand({ compact = false, className }: BrandProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "grid place-items-center rounded-2xl bg-ink text-white shadow-[0_8px_20px_-10px_rgba(16,24,40,0.65)]",
          compact ? "size-9" : "size-11",
        )}
      >
        <CheckIcon className={compact ? "size-4" : "size-5"} />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-semibold tracking-tight text-ink">ISO 9001:2015</p>
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
          Banco de casos
        </p>
      </div>
    </div>
  );
}
