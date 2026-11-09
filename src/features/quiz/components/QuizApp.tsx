"use client";

import { useEffect, useRef } from "react";
import { useBestScore } from "@/shared/hooks/useBestScore";
import { saveBestScore } from "@/shared/lib/storage";
import { useQuiz } from "../hooks/useQuiz";
import { ResultsScreen } from "./results/ResultsScreen";
import { QuizScreen } from "./session/QuizScreen";
import { StartScreen } from "./start/StartScreen";

export function QuizApp() {
  const quiz = useQuiz();
  const bestScore = useBestScore();
  const savedRef = useRef(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [quiz.phase, quiz.currentIndex]);

  useEffect(() => {
    if (quiz.phase !== "results") {
      savedRef.current = false;
      return;
    }

    if (savedRef.current) return;
    savedRef.current = true;
    saveBestScore(quiz.score.percent);
  }, [quiz.phase, quiz.score.percent]);

  if (quiz.phase === "playing" && quiz.current) {
    return (
      <QuizScreen
        checked={quiz.checked}
        currentIndex={quiz.currentIndex}
        isLast={quiz.isLast}
        liveCorrect={quiz.liveCorrect}
        liveIncorrect={quiz.liveIncorrect}
        onCheck={quiz.check}
        onExit={quiz.reset}
        onNext={quiz.next}
        onSelect={quiz.selectOption}
        question={quiz.current}
        selectedOptionId={quiz.selectedOptionId}
        total={quiz.total}
      />
    );
  }

  if (quiz.phase === "results") {
    return (
      <ResultsScreen
        bestScore={bestScore}
        onExit={quiz.reset}
        onPracticeWrong={quiz.practiceWrong}
        onRestart={quiz.restart}
        results={quiz.results}
        score={quiz.score}
        sessionLabel={quiz.session?.label ?? "Práctica"}
      />
    );
  }

  return <StartScreen bestScore={bestScore} onStart={quiz.start} />;
}
