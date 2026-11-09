import type { QuizOption } from "../../types";
import {
  CheckIcon,
  FileIcon,
  LightbulbIcon,
  XIcon,
} from "@/shared/components/Icons";
import { cn } from "@/shared/lib/cn";

type FeedbackPanelProps = {
  isCorrect: boolean;
  correctOption: QuizOption;
  answer: string;
  simple: string;
  reference: string;
};

export function FeedbackPanel({
  isCorrect,
  correctOption,
  answer,
  simple,
  reference,
}: FeedbackPanelProps) {
  return (
    <div
      className={cn(
        "animate-fade-up mt-6 rounded-2xl border p-5 sm:p-6",
        isCorrect ? "border-emerald-200 bg-emerald-50/75" : "border-rose-200 bg-rose-50/70",
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-xl text-white",
            isCorrect ? "bg-emerald-500" : "bg-rose-500",
          )}
        >
          {isCorrect ? <CheckIcon className="size-5" /> : <XIcon className="size-5" />}
        </span>
        <div>
          <p className="text-base font-semibold text-ink">
            {isCorrect ? "¡Correcto!" : "Incorrecto"}
          </p>
          <p className="mt-0.5 text-sm leading-6 text-slate-600">
            {isCorrect
              ? "Marcaste la respuesta correcta."
              : "La respuesta correcta era:"}
          </p>
          {!isCorrect ? (
            <p className="mt-1 text-sm font-semibold text-ink">
              {correctOption.tag} · {correctOption.label}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5 space-y-4 border-t border-black/[0.06] pt-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Por qué</p>
          <p className="mt-1.5 text-sm leading-6 text-slate-700">{answer}</p>
        </div>

        <div className="flex gap-3 rounded-xl bg-white/70 p-3.5">
          <LightbulbIcon className="mt-0.5 size-4 shrink-0 text-amber-500" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
              En simple
            </p>
            <p className="mt-1 text-sm italic leading-6 text-slate-600">{simple}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <FileIcon className="mt-0.5 size-4 shrink-0 text-muted" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
              Referencia
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-600">{reference}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
