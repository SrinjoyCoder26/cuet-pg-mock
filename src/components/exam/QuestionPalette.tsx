import { cn } from "@/lib/utils";

export type QuestionStatus = "not-visited" | "answered" | "not-answered" | "marked" | "marked-answered";

interface QuestionPaletteProps {
  totalQuestions: number;
  currentQuestion: number;
  questionStatuses: QuestionStatus[];
  onQuestionClick: (index: number) => void;
}

const statusColors: Record<QuestionStatus, string> = {
  "not-visited": "bg-muted text-muted-foreground border-border",
  answered: "bg-exam-answered text-white border-exam-answered",
  "not-answered": "bg-destructive/80 text-white border-destructive/80",
  marked: "bg-exam-marked text-white border-exam-marked",
  "marked-answered": "bg-exam-marked-answered text-white border-exam-marked-answered",
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
    <div className="flex flex-col gap-2">
      <div className="bg-exam-sidebar text-exam-sidebar-foreground rounded-md p-2 text-center font-bold text-xs">
        Question Palette
      </div>

      <div className="grid grid-cols-8 lg:grid-cols-6 gap-1 px-1 max-h-[30vh] overflow-y-auto">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <button
            key={i}
            onClick={() => onQuestionClick(i)}
            className={cn(
              "w-7 h-7 rounded text-[10px] font-bold border transition-all hover:scale-105",
              statusColors[questionStatuses[i]],
              currentQuestion === i && "ring-2 ring-exam-current ring-offset-1"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-x-2 gap-y-1 px-1 text-[9px] border-t pt-2">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-exam-answered inline-block flex-shrink-0" />
          <span>{counts.answered} Ans</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-muted border inline-block flex-shrink-0" />
          <span>{counts["not-visited"]} NV</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-destructive/80 inline-block flex-shrink-0" />
          <span>{counts["not-answered"]} NA</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-exam-marked inline-block flex-shrink-0" />
          <span>{counts.marked} Mark</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-exam-marked-answered inline-block flex-shrink-0" />
          <span>{counts["marked-answered"]} M&A</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionPalette;
