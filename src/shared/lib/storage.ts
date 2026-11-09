const BEST_SCORE_KEY = "iso9001-practice-best-score";

type Listener = () => void;

let listeners: Listener[] = [];
let cached: number | null | undefined;

export function readBestScore(): number | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(BEST_SCORE_KEY);
    if (!raw) return null;

    const value = Number(raw);
    return Number.isFinite(value) && value >= 0 && value <= 100 ? value : null;
  } catch {
    return null;
  }
}

export function subscribeBestScore(listener: Listener) {
  listeners = [...listeners, listener];

  return () => {
    listeners = listeners.filter((item) => item !== listener);
  };
}

export function getBestScoreSnapshot(): number | null {
  if (cached === undefined) {
    cached = readBestScore();
  }

  return cached;
}

export function getBestScoreServerSnapshot(): number | null {
  return null;
}

export function saveBestScore(percent: number): number {
  const rounded = Math.round(percent);
  const current = cached !== undefined ? cached : readBestScore();
  const best = current === null ? rounded : Math.max(current, rounded);

  cached = best;

  try {
    window.localStorage.setItem(BEST_SCORE_KEY, String(best));
  } catch {
    // Si el navegador bloquea localStorage, mantenemos el valor en memoria.
  }

  listeners.forEach((listener) => listener());
  return best;
}
