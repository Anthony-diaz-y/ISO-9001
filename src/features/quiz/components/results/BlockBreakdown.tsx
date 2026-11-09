import { BLOCKS, BLOCK_ORDER } from "../../data/blocks";
import { BLOCK_STYLES } from "../../lib/block-styles";
import type { QuizResultItem } from "../../types";

type BlockBreakdownProps = {
  results: QuizResultItem[];
};

export function BlockBreakdown({ results }: BlockBreakdownProps) {
  const rows = BLOCK_ORDER.map((blockId) => {
    const blockResults = results.filter((result) => result.question.block === blockId);
    const correct = blockResults.filter((result) => result.isCorrect).length;
    const total = blockResults.length;
    const percent = total === 0 ? 0 : Math.round((correct / total) * 100);

    return { blockId, correct, total, percent };
  }).filter((row) => row.total > 0);

  return (
    <div className="grid gap-4">
      {rows.map((row) => {
        const block = BLOCKS[row.blockId];
        const styles = BLOCK_STYLES[row.blockId];

        return (
          <div key={row.blockId}>
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-ink">{block.name}</p>
                <p className="mt-0.5 truncate text-[10px] text-muted">{block.title}</p>
              </div>
              <p className="shrink-0 text-[11px] font-semibold text-muted">
                <span className="text-ink">{row.correct}</span>/{row.total}
              </p>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/[0.06]">
              <div
                className={`h-full rounded-full transition-[width] duration-700 ${styles.bar}`}
                style={{ width: `${row.percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
