import type { QuizResultItem, QuizScore } from "../../types";
import { Brand } from "@/shared/components/Brand";
import {
  ArrowRightIcon,
  HomeIcon,
  RotateIcon,
  TrophyIcon,
} from "@/shared/components/Icons";
import { BlockBreakdown } from "./BlockBreakdown";
import { ReviewList } from "./ReviewList";
import { ScoreRing } from "./ScoreRing";

type ResultsScreenProps = {
  results: QuizResultItem[];
  score: QuizScore;
  sessionLabel: string;
  bestScore: number | null;
  onRestart: () => void;
  onPracticeWrong: () => void;
  onExit: () => void;
};

function getMessage(percent: number) {
  if (percent >= 90) {
    return {
      title: "Excelente. Estás listo.",
      subtitle: "Dominas los puntos clave de la norma. Repasa solo los detalles.",
    };
  }

  if (percent >= 75) {
    return {
      title: "Muy buen resultado.",
      subtitle: "Tienes una base sólida. Refuerza las preguntas que fallaste.",
    };
  }

  if (percent >= 60) {
    return {
      title: "Vas por buen camino.",
      subtitle: "Ya identificas varias cláusulas. Practica las que fallaste.",
    };
  }

  return {
    title: "Toca repasar.",
    subtitle: "Empieza por las preguntas falladas y vuelve a intentarlo.",
  };
}

export function ResultsScreen({
  results,
  score,
  sessionLabel,
  bestScore,
  onRestart,
  onPracticeWrong,
  onExit,
}: ResultsScreenProps) {
  const message = getMessage(score.percent);
  const wrong = score.incorrect;

  return (
    <div>
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5">
        <Brand compact />
        <button
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/70 px-3 py-2 text-xs font-medium text-muted transition hover:border-ink/20 hover:text-ink"
          onClick={onExit}
          type="button"
        >
          <HomeIcon className="size-3.5" />
          Inicio
        </button>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-2 sm:px-6 sm:pt-4">
        <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="animate-fade-up rounded-[2rem] border border-line bg-white p-6 text-center shadow-[0_24px_70px_-50px_rgba(16,24,40,0.45)] sm:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
              {sessionLabel}
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-[1.7rem]">
              {message.title}
            </h1>
            <p className="mx-auto mt-1.5 max-w-sm text-sm leading-6 text-muted">
              {message.subtitle}
            </p>

            <div className="mt-6">
              <ScoreRing correct={score.correct} percent={score.percent} total={score.total} />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              <MiniStat label="Aciertos" tone="emerald" value={score.correct} />
              <MiniStat label="Fallos" tone="rose" value={score.incorrect} />
              <MiniStat label="Preguntas" tone="neutral" value={score.total} />
            </div>
          </div>

          <div className="animate-fade-up rounded-[2rem] border border-line bg-white p-6 shadow-[0_24px_70px_-50px_rgba(16,24,40,0.45)] [animation-delay:80ms] sm:p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                  Resumen
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-ink">
                  Desempeño por bloque
                </h2>
              </div>

              {bestScore !== null ? (
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1.5 text-[11px] font-semibold text-amber-800 ring-1 ring-amber-100">
                  <TrophyIcon className="size-3.5" />
                  Mejor {bestScore}%
                </span>
              ) : null}
            </div>

            <div className="mt-5">
              <BlockBreakdown results={results} />
            </div>

            <div className="mt-7 grid gap-2">
              {wrong > 0 ? (
                <button
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
                  onClick={onPracticeWrong}
                  type="button"
                >
                  Practicar las {wrong} falladas
                  <ArrowRightIcon className="size-4" />
                </button>
              ) : null}

              <div className="grid gap-2 sm:grid-cols-2">
                <button
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-line bg-white px-4 text-xs font-semibold text-ink transition hover:border-brand/30 hover:bg-brand/5"
                  onClick={onRestart}
                  type="button"
                >
                  <RotateIcon className="size-3.5" />
                  Repetir sesión
                </button>
                <button
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full px-4 text-xs font-semibold text-muted transition hover:bg-black/[0.04] hover:text-ink"
                  onClick={onExit}
                  type="button"
                >
                  <HomeIcon className="size-3.5" />
                  Volver al inicio
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fade-up mt-4 rounded-[2rem] border border-line bg-white p-5 shadow-[0_24px_70px_-50px_rgba(16,24,40,0.45)] [animation-delay:140ms] sm:p-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                Revisión
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-ink">
                Repasa tus respuestas
              </h2>
            </div>
            <p className="text-[11px] text-muted">
              Abre cada caso para ver la explicación completa.
            </p>
          </div>

          <ReviewList results={results} />
        </section>
      </main>
    </div>
  );
}

function MiniStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "emerald" | "rose" | "neutral";
}) {
  const tones = {
    emerald: "bg-emerald-50 text-emerald-800",
    rose: "bg-rose-50 text-rose-800",
    neutral: "bg-paper text-ink",
  };

  return (
    <div className={`rounded-xl px-2 py-2.5 ${tones[tone]}`}>
      <p className="text-xl font-semibold leading-none tracking-[-0.03em]">{value}</p>
      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] opacity-60">
        {label}
      </p>
    </div>
  );
}
