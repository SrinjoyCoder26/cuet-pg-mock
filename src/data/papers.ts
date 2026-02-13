import { examConfig as config2025, questions as questions2025 } from "./examData";
import { examConfig2024, questions2024 } from "./examData2024";
import { examConfig as config2026, questions as questions2026 } from "./examData20261";
import { examConfig as config2026_2, questions as questions2026_2 } from "./examData20262";
import { examConfig as config2026_3, questions as questions2026_3 } from "./examData20263";
import { examConfig as config2026_4, questions as questions2026_4 } from "./examData20264";
import { examConfig as config2026_5, questions as questions2026_5 } from "./examData20265";
import { examConfig as config2026_6, questions as questions2026_6 } from "./examData20266";
import { examConfig as config2026_7, questions as questions2026_7 } from "./examData20267";
import { ExamPaper } from "./examTypes";

export interface PaperWithId extends ExamPaper {
  id: string;
}

export const papers: PaperWithId[] = [
  {
    id: "2026-7",
    config: config2026_7,
    questions: questions2026_7
  },
  {
    id: "2026-6",
    config: config2026_6,
    questions: questions2026_6
  },
  {
    id: "2026-5",
    config: config2026_5,
    questions: questions2026_5
  },
  {
    id: "2026-4",
    config: config2026_4,
    questions: questions2026_4
  },
  {
    id: "2026-3",
    config: config2026_3,
    questions: questions2026_3
  },
  {
    id: "2026-2",
    config: config2026_2,
    questions: questions2026_2
  },
  {
    id: "2026",
    config: config2026,
    questions: questions2026
  },
  {
    id: "2025",
    config: config2025,
    questions: questions2025
  },
  {
    id: "2024",
    config: examConfig2024,
    questions: questions2024
  },
];

export const getPaperById = (id: string): PaperWithId | undefined => {
  return papers.find(p => p.id === id);
};
