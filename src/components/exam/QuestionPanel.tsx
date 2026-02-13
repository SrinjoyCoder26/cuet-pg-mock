import type { Question } from "@/data/examTypes";

interface QuestionPanelProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (option: number) => void;
  isMarked: boolean;
}

const QuestionPanel = ({ question, selectedOption, onSelectOption, isMarked }: QuestionPanelProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg">
          <span className="font-bold text-xs">Q{question.id}</span>
          <span className="text-[10px] opacity-70 ml-2">+4 / -1</span>
        </div>
        {isMarked && (
          <span className="bg-exam-marked text-white text-[10px] px-2 py-1 rounded">
            ★ Review
          </span>
        )}
      </div>

      <div className="mb-4 text-[13px] leading-relaxed whitespace-pre-line text-foreground">
        {question.text}
      </div>

      <div className="space-y-2">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center gap-2.5 p-2.5 rounded-lg border-2 cursor-pointer transition-all text-[13px]
              ${
                selectedOption === index + 1
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border hover:border-muted-foreground/30 hover:bg-muted/30"
              }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={selectedOption === index + 1}
              onChange={() => onSelectOption(index + 1)}
              className="w-3.5 h-3.5 accent-primary flex-shrink-0"
            />
            <span className="font-semibold text-[11px] text-muted-foreground mr-0.5">
              {index + 1}.
            </span>
            <span className="text-foreground">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionPanel;
