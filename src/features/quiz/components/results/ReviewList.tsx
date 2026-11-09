"use client";

import { useMemo, useState } from "react";
import { BLOCKS } from "../../data/blocks";
import type { QuizResultItem } from "../../types";
import {
  CheckIcon,
  ChevronDownIcon,
  FileIcon,
  LightbulbIcon,
  XIcon,
} from "@/shared/components/Icons";
import { cn } from "@/shared/lib/cn";

type ReviewListProps = {
  results: QuizResultItem[];
};

type Filter = "wrong" | "all" | "correct";

export function ReviewList({ results }: ReviewListProps) {
  const wrongCount = results.filter((result) => !result.isCorrect).length;
  const correctCount = results.length - wrongCount;
  const [filter, setFilter] = useState<Filter>(wrongCount > 0 ? "wrong" : "all");

  const filtered = useMemo(() => {
    if (filter === "wrong") return results.filter((result) => !result.isCorrect);
    if (filter === "correct") return results.filter((result) => result.isCorrect);
    return results;
  }, [filter, results]);

  const filters: Array<{ id: Filter; label: string; count: number }> = [
    { id: "wrong", label: "Falladas", count: wrongCount },
    { id: "all", label: "Todas", count: results.length },
    { id: "correct", label: "Correctas", count: correctCount },
  ];

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-1.5">
        {filters.map((item) => (
          <button
            className={cn(
              "rounded-full border px-3 py-1.5 text-[11px] font-semibold transition",
              filter === item.id
                ? "border-ink bg-ink text-white"
                : "border-line bg-white text-muted hover:border-ink/20 hover:text-ink",
            )}
            key={item.id}
            onClick={() => setFilter(item.id)}
            type="button"
          >
            {item.label}
            <span
              className={cn(
                "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px]",
                filter === item.id ? "bg-white/15" : "bg-black/[0.05]",
              )}
            >
              {item.count}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-line bg-paper/60 px-4 py-8 text-center text-sm text-muted">
          No hay preguntas en este filtro.
        </p>
      ) : (
        <div className="grid gap-2.5">
          {filtered.map((result) => {
            const { question, isCorrect, selectedOption, correctOption } = result;
            const block = BLOCKS[question.block];

            return (
              <details
                className="group rounded-2xl border border-line bg-white open:shadow-[0_16px_44px_-32px_rgba(16,24,40,0.5)]"
                key={question.id}
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 p-3.5 [&::-webkit-details-marker]:hidden sm:p-4">
                  <span
                    className={cn(
                      "grid size-8 shrink-0 place-items-center rounded-lg",
                      isCorrect
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-rose-50 text-rose-600",
                    )}
                  >
                    {isCorrect ? (
                      <CheckIcon className="size-4" />
                    ) : (
                      <XIcon className="size-4" />
                    )}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                        Caso #{String(question.id).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] text-muted">· {block.name}</span>
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-semibold text-ink">
                      {question.title}
                    </span>
                  </span>

                  <span
                    className={cn(
                      "hidden shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] sm:inline",
                      isCorrect
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-rose-50 text-rose-700",
                    )}
                  >
                    {isCorrect ? "Correcta" : "Incorrecta"}
                  </span>

                  <ChevronDownIcon className="size-4 shrink-0 text-muted transition group-open:rotate-180" />
                </summary>

                <div className="border-t border-line/80 p-4 sm:p-5">
                  <div className="rounded-xl bg-paper/70 p-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                      Situación
                    </p>
                    <p className="mt-1.5 text-[13px] leading-6 text-slate-700">
                      {question.situation}
                    </p>
                  </div>

                  <div className="mt-3.5 border-l-2 border-brand pl-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
                      Pregunta
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-ink">
                      {question.question}
                    </p>
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <div
                      className={cn(
                        "rounded-xl border p-3",
                        isCorrect
                          ? "border-emerald-200 bg-emerald-50/60"
                          : "border-rose-200 bg-rose-50/60",
                      )}
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                        Tu respuesta
                      </p>
                      <p className="mt-1 text-xs font-medium leading-5 text-ink">
                        {selectedOption
                          ? `${selectedOption.tag} · ${selectedOption.label}`
                          : "Sin responder"}
                      </p>
                    </div>

                    <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                        Respuesta correcta
                      </p>
                      <p className="mt-1 text-xs font-medium leading-5 text-ink">
                        {correctOption.tag} · {correctOption.label}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">
                      Por qué
                    </p>
                    <p className="mt-1 text-[13px] leading-6 text-slate-700">
                      {question.answer}
                    </p>
                  </div>

                  <div className="mt-3 flex gap-2.5 rounded-xl bg-amber-50/60 p-3">
                    <LightbulbIcon className="mt-0.5 size-4 shrink-0 text-amber-500" />
                    <p className="text-[13px] italic leading-6 text-slate-600">
                      {question.simple}
                    </p>
                  </div>

                  <div className="mt-3 flex gap-2.5">
                    <FileIcon className="mt-0.5 size-4 shrink-0 text-muted" />
                    <p className="text-[11px] leading-5 text-muted">{question.reference}</p>
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      )}
    </div>
  );
}
