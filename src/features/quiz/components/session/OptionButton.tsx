import type { QuizOption } from "../../types";
import { CheckIcon, XIcon } from "@/shared/components/Icons";
import { cn } from "@/shared/lib/cn";

type OptionButtonProps = {
  option: QuizOption;
  index: number;
  isSelected: boolean;
  isCorrectOption: boolean;
  checked: boolean;
  onSelect: (optionId: string) => void;
};

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export function OptionButton({
  option,
  index,
  isSelected,
  isCorrectOption,
  checked,
  onSelect,
}: OptionButtonProps) {
  const showCorrect = checked && isCorrectOption;
  const showWrong = checked && isSelected && !isCorrectOption;
  const dimmed = checked && !isCorrectOption && !isSelected;

  return (
    <button
      aria-pressed={isSelected}
      className={cn(
        "group relative flex w-full items-start gap-3.5 rounded-2xl border p-4 text-left transition duration-200 sm:gap-4 sm:p-5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        "disabled:cursor-default",
        !checked &&
          !isSelected &&
          "border-line bg-white hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-[0_12px_28px_-18px_rgba(15,107,92,0.45)]",
        !checked && isSelected && "border-brand bg-brand/5 shadow-[0_12px_28px_-20px_rgba(15,107,92,0.55)]",
        showCorrect && "border-emerald-400 bg-emerald-50/80",
        showWrong && "border-rose-400 bg-rose-50/80",
        dimmed && "border-line bg-white/65 opacity-55",
      )}
      disabled={checked}
      onClick={() => onSelect(option.id)}
      type="button"
    >
      <span
        className={cn(
          "mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl text-xs font-bold transition",
          !checked && !isSelected && "bg-paper text-muted group-hover:bg-brand/10 group-hover:text-brand",
          !checked && isSelected && "bg-brand text-white",
          showCorrect && "bg-emerald-500 text-white",
          showWrong && "bg-rose-500 text-white",
          dimmed && "bg-paper text-muted",
        )}
      >
        {showCorrect ? (
          <CheckIcon className="size-4" />
        ) : showWrong ? (
          <XIcon className="size-4" />
        ) : (
          LETTERS[index] ?? index + 1
        )}
      </span>

      <span className="min-w-0 flex-1">
        <span className="mb-1.5 inline-flex items-center rounded-md bg-black/[0.045] px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-muted">
          {option.tag}
        </span>
        <span className="block text-[15px] font-medium leading-6 text-ink">{option.label}</span>
      </span>

      {isSelected && !checked ? (
        <span className="mt-2 size-2.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
      ) : null}
    </button>
  );
}
