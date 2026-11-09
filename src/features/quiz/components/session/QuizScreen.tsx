import type { Question } from "../../types";
import { Brand } from "@/shared/components/Brand";
import {
  ArrowRightIcon,
  CheckIcon,
  XIcon,
} from "@/shared/components/Icons";
import { FeedbackPanel } from "./FeedbackPanel";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";

type QuizScreenProps = {
  question: Question;
  currentIndex: number;
  total: number;
  selectedOptionId: string | null;
  checked: boolean;
  isLast: boolean;
  liveCorrect: number;
  liveIncorrect: number;
  onSelect: (optionId: string) => void;
  onCheck: () => void;
  onNext: () => void;
  onExit: () => void;
};

export function QuizScreen({
  question,
  currentIndex,
  total,
  selectedOptionId,
  checked,
  isLast,
  liveCorrect,
  liveIncorrect,
  onSelect,
  onCheck,
  onNext,
  onExit,
}: QuizScreenProps) {
  const correctOption =
    question.options.find((option) => option.id === question.correctOptionId) ??
    question.options[0];
  const isCorrect = selectedOptionId === question.correctOptionId;
  const progressPercent = total > 0 ? Math.round(((currentIndex + 1) / total) * 100) : 0;

  const handleExit = () => {
    const shouldExit = window.confirm(
      "¿Quieres salir de esta práctica? Perderás el avance de la sesión.",
    );
    if (shouldExit) onExit();
  };

  return (
    <div>
      <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-4xl items-center gap-4 px-4 py-3 sm:px-6">
          <Brand compact />

          <div className="hidden h-8 w-px bg-line sm:block" />

          <div className="min-w-0 flex-1">
            <div className="mb-1.5 flex items-center justify-between text-[11px] font-medium text-muted">
              <span>
                Pregunta {currentIndex + 1} de {total}
              </span>
              <span>{progressPercent}%</span>
            </div>
            <ProgressBar max={total} value={currentIndex + 1} />
          </div>

          <div className="hidden items-center gap-1.5 sm:flex">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
              <CheckIcon className="size-3.5" />
              {liveCorrect}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-rose-700">
              <XIcon className="size-3.5" />
              {liveIncorrect}
            </span>
          </div>

          <button
            className="rounded-full border border-line bg-white/70 px-3 py-2 text-xs font-medium text-muted transition hover:border-ink/20 hover:text-ink"
            onClick={handleExit}
            type="button"
          >
            Salir
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 pb-16 pt-5 sm:px-6 sm:pt-9">
        <div className="mb-3 flex items-center justify-end gap-1.5 sm:hidden">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
            <CheckIcon className="size-3.5" />
            {liveCorrect}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-rose-700">
            <XIcon className="size-3.5" />
            {liveIncorrect}
          </span>
        </div>

        <article className="animate-fade-up rounded-[2rem] border border-line bg-white p-5 shadow-[0_24px_70px_-45px_rgba(16,24,40,0.45)] sm:p-8">
          <QuestionCard
            checked={checked}
            onSelect={onSelect}
            question={question}
            selectedOptionId={selectedOptionId}
          />

          {checked ? (
            <FeedbackPanel
              answer={question.answer}
              correctOption={correctOption}
              isCorrect={isCorrect}
              reference={question.reference}
              simple={question.simple}
            />
          ) : null}

          <div className="mt-7 flex flex-col-reverse gap-3 border-t border-line/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-muted">
              {checked
                ? isCorrect
                  ? "Buen trabajo. Revisa la justificación y continúa."
                  : "Revisa la respuesta correcta y su referencia antes de continuar."
                : selectedOptionId
                  ? "Listo. Comprueba tu respuesta para ver el feedback."
                  : "Selecciona una opción para poder comprobar."}
            </p>

            {checked ? (
              <button
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                onClick={onNext}
                type="button"
              >
                {isLast ? "Ver resultados" : "Siguiente pregunta"}
                <ArrowRightIcon className="size-4" />
              </button>
            ) : (
              <button
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:bg-slate-300"
                disabled={!selectedOptionId}
                onClick={onCheck}
                type="button"
              >
                <CheckIcon className="size-4" />
                Comprobar respuesta
              </button>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}
