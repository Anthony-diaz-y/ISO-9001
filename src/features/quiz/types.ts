export type BlockId = "A" | "B" | "C" | "D";

export type BlockInfo = {
  id: BlockId;
  name: string;
  title: string;
  description: string;
  cases: string;
  count: number;
};

export type QuizOption = {
  id: string;
  tag: string;
  label: string;
};

export type Question = {
  id: number;
  block: BlockId;
  title: string;
  situation: string;
  question: string;
  answer: string;
  simple: string;
  reference: string;
  options: QuizOption[];
  correctOptionId: string;
};

export type QuizMode = "full" | "quick" | "block" | "review";

export type SessionConfig = {
  mode: QuizMode;
  questionIds: number[];
  label: string;
};

export type QuizPhase = "start" | "playing" | "results";

export type AnswerMap = Record<number, string>;

export type QuizResultItem = {
  question: Question;
  selectedOptionId: string | null;
  correctOptionId: string;
  correctOption: QuizOption;
  selectedOption: QuizOption | null;
  isCorrect: boolean;
};

export type QuizScore = {
  total: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  percent: number;
};
