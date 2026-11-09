"use client";

import { useSyncExternalStore } from "react";
import {
  getBestScoreServerSnapshot,
  getBestScoreSnapshot,
  subscribeBestScore,
} from "@/shared/lib/storage";

export function useBestScore() {
  return useSyncExternalStore(
    subscribeBestScore,
    getBestScoreSnapshot,
    getBestScoreServerSnapshot,
  );
}
