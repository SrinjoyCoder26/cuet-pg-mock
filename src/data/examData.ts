export interface Question {
  id: number;
  text?: string;
  image?: string;
  options: string[];
  correctAnswer: number; // 1-based index
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

export const examConfig: ExamConfig = {
  title: "CUET PG 2025",
  subject: "Data Science, AI, Cyber Security & Computer Science",
  totalQuestions: 75,
  totalMarks: 300,
  correctMarks: 4,
  wrongMarks: -1,
  durationMinutes: 90,
  date: "29 March 2025 - Shift 1",
};

export const questions: Question[] = [
  { id: 1, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-1.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 2, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-2.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 3, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-3.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 4, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-4.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 5, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-5.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 6, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-6.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 7, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-7.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 8, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-8.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 9, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-9.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 10, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-10.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 11, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-11.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 12, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-12.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 13, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-13.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 14, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-14.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 15, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-15.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 16, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-16.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 17, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-17.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 18, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-18.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 19, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-19.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 20, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-20.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 21, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-21.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 22, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-22.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 23, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-23.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 24, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-24.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 25, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-25.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 26, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-26.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 27, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-27.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 28, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-28.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 29, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-29.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 30, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-30.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 31, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-31.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 32, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-32.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 33, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-33.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 34, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-34.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 35, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-35.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 36, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-36.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 37, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-37.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 38, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-38.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 39, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-39.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 40, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-40.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 41, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-41.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 42, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-42.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 43, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-43.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 44, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-44.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 45, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-45.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 46, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-46.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 47, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-47.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 48, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-48.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 49, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-49.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 50, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-50.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 51, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-51.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 52, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-52.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 53, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-53.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 54, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-54.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 55, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-55.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 56, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-56.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 57, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-57.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 58, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-58.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 59, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-59.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 60, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-60.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 61, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-61.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 62, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-62.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 63, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-63.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
  { id: 64, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-64.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 65, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-65.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 66, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-66.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 67, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-67.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 3 },
  { id: 68, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-68.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 69, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-69.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 70, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-70.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 71, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-71.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 72, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-72.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 1 },
  { id: 73, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-73.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 74, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-74.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 2 },
  { id: 75, image: "/paper-2025/CUET_PG_2025_Data_Science_Question_Paper_Mar_29_2025_Shift_1__cf293fe57cc421e6c9bf537be04bbdc7 (2)-images-75.jpg", options: ["(A)", "(B)", "(C)", "(D)"], correctAnswer: 4 },
];
