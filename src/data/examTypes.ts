export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface ExamConfig {
  title: string;
  subject: string;
  totalQuestions: number;
  totalMarks: number;
  correctMarks: number;
  wrongMarks: number;
  durationMinutes: number;
  date: string;
}

export interface ExamPaper {
  config: ExamConfig;
  questions: Question[];
}
