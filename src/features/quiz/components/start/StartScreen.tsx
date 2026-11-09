import { BLOCKS, BLOCK_ORDER } from "../../data/blocks";
import { QUESTIONS } from "../../data/questions";
import { BLOCK_STYLES } from "../../lib/block-styles";
import { shuffle } from "../../lib/shuffle";
import type { BlockId, SessionConfig } from "../../types";
import { Brand } from "@/shared/components/Brand";
import {
  ArrowRightIcon,
  BookIcon,
  LayersIcon,
  LightbulbIcon,
  PlayIcon,
  SparklesIcon,
  TargetIcon,
  TrophyIcon,
  ZapIcon,
} from "@/shared/components/Icons";
import { cn } from "@/shared/lib/cn";

type StartScreenProps = {
  bestScore: number | null;
  onStart: (config: SessionConfig) => void;
};

const ALL_IDS = QUESTIONS.map((question) => question.id);

export function StartScreen({ bestScore, onStart }: StartScreenProps) {
  const startFull = () => {
    onStart({
      mode: "full",
      questionIds: shuffle(ALL_IDS),
      label: "Examen completo",
    });
  };

  const startQuick = () => {
    onStart({
      mode: "quick",
      questionIds: shuffle(ALL_IDS).slice(0, 20),
      label: "Ronda rápida",
    });
  };

  const startBlock = (blockId: BlockId) => {
    const ids = QUESTIONS.filter((question) => question.block === blockId).map(
      (question) => question.id,
    );

    onStart({
      mode: "block",
      questionIds: shuffle(ids),
      label: BLOCKS[blockId].name,
    });
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8">
      <header className="flex items-center justify-between gap-4">
        <Brand />
        <div className="hidden items-center gap-2 rounded-full border border-line bg-white/65 px-3.5 py-2 text-[11px] font-medium text-muted sm:flex">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Banco de práctica · 100 casos
        </div>
      </header>

      <section className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
            <SparklesIcon className="size-3.5" />
            Gestión de la Calidad · Examen
          </span>

          <h1 className="mt-5 text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl">
            Practica.
            <br />
            <span className="text-brand">Domina la ISO 9001.</span>
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base">
            100 casos reales para identificar la cláusula, el principio o el concepto
            exacto de la ISO 9001:2015. Elige la opción que corresponde, recibe feedback
            al instante y llega al examen con seguridad.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
            <StatCard icon={<BookIcon className="size-4" />} label="Casos del banco" value="100" />
            <StatCard icon={<LayersIcon className="size-4" />} label="Bloques temáticos" value="4" />
            <StatCard icon={<ZapIcon className="size-4" />} label="Feedback inmediato" value="100%" />
          </div>

          <div className="mt-10 hidden lg:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
              Cómo funciona
            </p>
            <div className="mt-4 grid gap-3">
              <Step
                description="Cada pregunta es una situación real de planta, oficina o servicio."
                icon={<BookIcon className="size-4" />}
                number="01"
                title="Lee el caso"
              />
              <Step
                description="Elige entre cuatro cláusulas, principios o conceptos de la ISO 9001:2015."
                icon={<TargetIcon className="size-4" />}
                number="02"
                title="Marca la respuesta"
              />
              <Step
                description="Descubre si acertaste, la respuesta correcta y la referencia exacta."
                icon={<SparklesIcon className="size-4" />}
                number="03"
                title="Aprende al instante"
              />
            </div>
          </div>
        </div>

        <aside className="animate-fade-up [animation-delay:120ms] lg:sticky lg:top-8">
          <div className="rounded-[2rem] border border-line bg-white p-5 shadow-[0_28px_80px_-50px_rgba(16,24,40,0.5)] sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                  Tu sesión
                </p>
                <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-ink">
                  Elige cómo practicar
                </h2>
              </div>

              <div className="shrink-0 rounded-2xl bg-amber-50 px-3 py-2 text-center ring-1 ring-amber-100">
                <TrophyIcon className="mx-auto size-4 text-amber-600" />
                <p className="mt-1 text-lg font-bold leading-none text-amber-800">
                  {bestScore === null ? "—" : `${bestScore}%`}
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-amber-700/70">
                  Mejor puntaje
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-2.5">
              <button
                className="group flex w-full items-center gap-3 rounded-2xl bg-ink p-3.5 text-left text-white transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
                onClick={startFull}
                type="button"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10">
                  <PlayIcon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">Examen completo</span>
                  <span className="mt-0.5 block text-[11px] text-white/60">
                    100 preguntas · orden aleatorio
                  </span>
                </span>
                <ArrowRightIcon className="size-4 shrink-0 text-white/70 transition group-hover:translate-x-0.5 group-hover:text-white" />
              </button>

              <button
                className="group flex w-full items-center gap-3 rounded-2xl border border-brand/25 bg-brand/5 p-3.5 text-left transition hover:border-brand/40 hover:bg-brand/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
                onClick={startQuick}
                type="button"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand text-white">
                  <ZapIcon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-ink">Ronda rápida</span>
                  <span className="mt-0.5 block text-[11px] text-muted">
                    20 preguntas · ideal si tienes poco tiempo
                  </span>
                </span>
                <ArrowRightIcon className="size-4 shrink-0 text-brand transition group-hover:translate-x-0.5" />
              </button>
            </div>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-line" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                o practica por bloque
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>

            <div className="grid gap-2">
              {BLOCK_ORDER.map((blockId) => {
                const block = BLOCKS[blockId];
                const styles = BLOCK_STYLES[blockId];

                return (
                  <button
                    className="group flex w-full items-center gap-3 rounded-xl border border-line bg-white px-3 py-2.5 text-left transition hover:border-brand/25 hover:bg-paper/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
                    key={blockId}
                    onClick={() => startBlock(blockId)}
                    type="button"
                  >
                    <span
                      className={cn(
                        "grid size-8 shrink-0 place-items-center rounded-lg text-[11px] font-bold",
                        styles.chip,
                      )}
                    >
                      {blockId}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-semibold text-ink">
                        {block.title}
                      </span>
                      <span className="mt-0.5 block text-[10px] text-muted">
                        {block.cases} · {block.count} preguntas
                      </span>
                    </span>
                    <ArrowRightIcon className="size-3.5 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-brand" />
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex gap-2.5 rounded-xl bg-paper px-3 py-3">
              <LightbulbIcon className="mt-0.5 size-4 shrink-0 text-amber-500" />
              <p className="text-[11px] leading-5 text-muted">
                Al comprobar cada respuesta verás si acertaste, la justificación y la
                referencia exacta de la norma.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-14 lg:hidden">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
          Cómo funciona
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Step
            description="Cada pregunta es una situación real de planta, oficina o servicio."
            icon={<BookIcon className="size-4" />}
            number="01"
            title="Lee el caso"
          />
          <Step
            description="Elige entre cuatro cláusulas, principios o conceptos de la ISO 9001:2015."
            icon={<TargetIcon className="size-4" />}
            number="02"
            title="Marca la respuesta"
          />
          <Step
            description="Descubre si acertaste, la respuesta correcta y la referencia exacta."
            icon={<SparklesIcon className="size-4" />}
            number="03"
            title="Aprende al instante"
          />
        </div>
      </section>

      <footer className="mt-14 flex flex-col gap-2 border-t border-line pt-5 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Basado en el banco de 100 casos · Gestión de la Calidad</p>
        <p>ISO 9001:2015 · Práctica para examen</p>
      </footer>
    </main>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white/70 p-2.5 sm:p-3.5">
      <span className="grid size-7 place-items-center rounded-lg bg-brand/10 text-brand sm:size-8">
        {icon}
      </span>
      <p className="mt-2 text-lg font-semibold leading-none tracking-[-0.03em] text-ink sm:mt-2.5 sm:text-xl">
        {value}
      </p>
      <p className="mt-1 text-[9px] font-medium uppercase leading-4 tracking-[0.08em] text-muted sm:text-[10px]">
        {label}
      </p>
    </div>
  );
}

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-line bg-white/60 p-3.5">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-bold tracking-[0.14em] text-muted">{number}</p>
        <p className="mt-0.5 text-sm font-semibold text-ink">{title}</p>
        <p className="mt-1 text-[11px] leading-5 text-muted">{description}</p>
      </div>
    </div>
  );
}
