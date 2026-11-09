import type { AnswerMap, Question, QuizResultItem, QuizScore } from "../types";

export function buildResults(questions: Question[], answers: AnswerMap): QuizResultItem[] {
  return questions.map((question) => {
    const selectedOptionId = answers[question.id] ?? null;
    const correctOption =
      question.options.find((option) => option.id === question.correctOptionId) ??
      question.options[0];
    const selectedOption =
      question.options.find((option) => option.id === selectedOptionId) ?? null;

    return {
      question,
      selectedOptionId,
      correctOptionId: question.correctOptionId,
      correctOption,
      selectedOption,
      isCorrect: selectedOptionId === question.correctOptionId,
    };
  });
}

export function buildScore(results: QuizResultItem[]): QuizScore {
  const total = results.length;
  const correct = results.filter((result) => result.isCorrect).length;
  const unanswered = results.filter((result) => !result.selectedOptionId).length;
  const incorrect = total - correct;
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100);

  return { total, correct, incorrect, unanswered, percent };
}
