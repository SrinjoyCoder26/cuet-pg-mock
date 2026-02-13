import { cn } from "@/lib/utils";

export type QuestionStatus = "not-visited" | "answered" | "not-answered" | "marked" | "marked-answered";

interface QuestionPaletteProps {
  totalQuestions: number;
  currentQuestion: number;
  questionStatuses: QuestionStatus[];
  onQuestionClick: (index: number) => void;
}

const statusColors: Record<QuestionStatus, string> = {
  "not-visited": "bg-slate-200 text-slate-600 border-slate-300",
  answered: "bg-green-600 text-white border-green-700",
  "not-answered": "bg-red-500 text-white border-red-600",
  marked: "bg-amber-500 text-white border-amber-600",
  "marked-answered": "bg-purple-600 text-white border-purple-700",
};

const QuestionPalette = ({ totalQuestions, currentQuestion, questionStatuses, onQuestionClick }: QuestionPaletteProps) => {
  const counts = {
    answered: questionStatuses.filter((s) => s === "answered").length,
    "not-answered": questionStatuses.filter((s) => s === "not-answered").length,
    "not-visited": questionStatuses.filter((s) => s === "not-visited").length,
    marked: questionStatuses.filter((s) => s === "marked").length,
    "marked-answered": questionStatuses.filter((s) => s === "marked-answered").length,
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-slate-900 text-white rounded-lg p-3 text-center font-bold text-sm shadow-sm">
        Question Palette
      </div>

      <div className="grid grid-cols-5 gap-2 p-2 max-h-[35vh] overflow-y-auto bg-slate-50 rounded-lg border border-slate-200">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <button
            key={i}
            onClick={() => onQuestionClick(i)}
            className={cn(
              "w-full aspect-square rounded-lg text-xs font-bold border-2 transition-all hover:scale-105 shadow-sm",
              statusColors[questionStatuses[i]],
              currentQuestion === i && "ring-2 ring-slate-900 ring-offset-2"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 p-3 text-[10px] bg-slate-50 rounded-lg border border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-green-600 border border-green-700 inline-block flex-shrink-0" />
          <span className="text-slate-700 font-medium">{counts.answered} Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-slate-200 border border-slate-300 inline-block flex-shrink-0" />
          <span className="text-slate-700 font-medium">{counts["not-visited"]} Not Visited</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-red-500 border border-red-600 inline-block flex-shrink-0" />
          <span className="text-slate-700 font-medium">{counts["not-answered"]} Not Answered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-amber-500 border border-amber-600 inline-block flex-shrink-0" />
          <span className="text-slate-700 font-medium">{counts.marked} Marked</span>
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <span className="w-4 h-4 rounded bg-purple-600 border border-purple-700 inline-block flex-shrink-0" />
          <span className="text-slate-700 font-medium">{counts["marked-answered"]} Marked & Answered</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionPalette;
