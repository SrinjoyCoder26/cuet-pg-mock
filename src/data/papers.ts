import { examConfig as config2025, questions as questions2025 } from "./examData";
import { examConfig2024, questions2024 } from "./examData2024";
import { ExamPaper } from "./examTypes";

export interface PaperWithId extends ExamPaper {
  id: string;
}

export const papers: PaperWithId[] = [
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
