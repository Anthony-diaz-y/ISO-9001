"use client";

import { useCallback, useMemo, useState } from "react";
import { QUESTIONS } from "../data/questions";
import { buildResults, buildScore } from "../lib/scoring";
import { shuffle } from "../lib/shuffle";
import type {
  AnswerMap,
  Question,
  QuizPhase,
  SessionConfig,
} from "../types";

const QUESTION_BY_ID = new Map(QUESTIONS.map((question) => [question.id, question]));

export function useQuiz() {
  const [phase, setPhase] = useState<QuizPhase>("start");
  const [session, setSession] = useState<SessionConfig | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [checked, setChecked] = useState(false);

  const current = questions[currentIndex] ?? null;
  const selectedOptionId = current ? answers[current.id] ?? null : null;
  const isLast = questions.length > 0 && currentIndex === questions.length - 1;

  const start = useCallback((config: SessionConfig) => {
    const selectedQuestions = config.questionIds
      .map((id) => QUESTION_BY_ID.get(id))
      .filter((question): question is Question => Boolean(question));

    setSession(config);
    setQuestions(selectedQuestions);
    setCurrentIndex(0);
    setAnswers({});
    setChecked(false);
    setPhase("playing");
  }, []);

  const selectOption = useCallback(
    (optionId: string) => {
      if (!current || checked) return;
      setAnswers((previous) => ({ ...previous, [current.id]: optionId }));
    },
    [checked, current],
  );

  const check = useCallback(() => {
    if (!selectedOptionId || checked) return;
    setChecked(true);
  }, [checked, selectedOptionId]);

  const next = useCallback(() => {
    if (!checked) return;

    if (isLast) {
      setPhase("results");
      return;
    }

    setCurrentIndex((index) => index + 1);
    setChecked(false);
  }, [checked, isLast]);

  const reset = useCallback(() => {
    setPhase("start");
    setSession(null);
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setChecked(false);
  }, []);

  const restart = useCallback(() => {
    if (!session) return;
    start({
      ...session,
      questionIds: shuffle(session.questionIds),
    });
  }, [session, start]);

  const results = useMemo(() => buildResults(questions, answers), [questions, answers]);
  const score = useMemo(() => buildScore(results), [results]);

  const answeredResults = results.filter((result) => result.selectedOptionId);
  const liveCorrect = answeredResults.filter((result) => result.isCorrect).length;
  const liveIncorrect = answeredResults.length - liveCorrect;

  const practiceWrong = useCallback(() => {
    const wrongIds = results
      .filter((result) => !result.isCorrect)
      .map((result) => result.question.id);

    if (wrongIds.length === 0) return;

    start({
      mode: "review",
      questionIds: shuffle(wrongIds),
      label: "Repaso de preguntas falladas",
    });
  }, [results, start]);

  return {
    phase,
    session,
    questions,
    current,
    currentIndex,
    total: questions.length,
    isLast,
    selectedOptionId,
    checked,
    answers,
    results,
    score,
    liveCorrect,
    liveIncorrect,
    start,
    selectOption,
    check,
    next,
    reset,
    restart,
    practiceWrong,
  };
}
