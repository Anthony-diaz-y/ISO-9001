import type { Question } from "../../types";
import { BLOCK_A_QUESTIONS } from "./block-a";
import { BLOCK_B_QUESTIONS } from "./block-b";
import { BLOCK_C_QUESTIONS } from "./block-c";
import { BLOCK_D_QUESTIONS } from "./block-d";

export const QUESTIONS: Question[] = [
  ...BLOCK_A_QUESTIONS,
  ...BLOCK_B_QUESTIONS,
  ...BLOCK_C_QUESTIONS,
  ...BLOCK_D_QUESTIONS,
];
