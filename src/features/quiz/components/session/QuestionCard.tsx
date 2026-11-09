import type { Question } from "../../types";
import { BLOCKS } from "../../data/blocks";
import { BLOCK_STYLES } from "../../lib/block-styles";
import { OptionButton } from "./OptionButton";

type QuestionCardProps = {
  question: Question;
  selectedOptionId: string | null;
  checked: boolean;
  onSelect: (optionId: string) => void;
};

export function QuestionCard({
  question,
  selectedOptionId,
  checked,
  onSelect,
}: QuestionCardProps) {
  const block = BLOCKS[question.block];
  const styles = BLOCK_STYLES[question.block];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${styles.chip}`}
        >
          <span className={`size-1.5 rounded-full ${styles.dot}`} />
          {block.name}
        </span>
        <span className="text-xs font-medium text-muted">Caso #{String(question.id).padStart(2, "0")}</span>
      </div>

      <h1 className="mt-4 text-[1.55rem] font-semibold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[2rem]">
        {question.title}
      </h1>

      <div className="mt-5 rounded-2xl border border-line/80 bg-paper/75 p-4 sm:p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Situación</p>
        <p className="mt-2 text-[15px] leading-7 text-slate-700">{question.situation}</p>
      </div>

      <div className="mt-5 border-l-2 border-brand pl-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">Pregunta</p>
        <p className="mt-1.5 text-lg font-semibold leading-7 text-ink">{question.question}</p>
      </div>

      <div className="mt-7">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
            Marca la respuesta correcta
          </p>
          <span className="hidden text-[11px] text-muted sm:inline">Una sola respuesta</span>
        </div>

        <div className="grid gap-2.5">
          {question.options.map((option, index) => (
            <OptionButton
              checked={checked}
              index={index}
              isCorrectOption={option.id === question.correctOptionId}
              isSelected={option.id === selectedOptionId}
              key={option.id}
              onSelect={onSelect}
              option={option}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
