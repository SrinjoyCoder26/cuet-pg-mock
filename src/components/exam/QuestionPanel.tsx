import type { Question } from "@/data/examTypes";
import { Star, Award } from "lucide-react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

interface QuestionPanelProps {
  question: Question;
  selectedOption: number | null;
  onSelectOption: (option: number) => void;
  isMarked: boolean;
}

const renderTextWithMath = (text: string) => {
  // Render inline math with $...$ and block math with $$...$$
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  
  // Match $$...$$ for block math and $...$ for inline math
  const mathRegex = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;
  let match;
  
  while ((match = mathRegex.exec(text)) !== null) {
    // Add text before math
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index));
    }
    
    // Add math
    const mathText = match[0];
    if (mathText.startsWith('$$')) {
      // Block math
      const latex = mathText.slice(2, -2);
      try {
        parts.push(<BlockMath key={match.index} math={latex} />);
      } catch {
        parts.push(mathText);
      }
    } else {
      // Inline math
      const latex = mathText.slice(1, -1);
      try {
        parts.push(<InlineMath key={match.index} math={latex} />);
      } catch {
        parts.push(mathText);
      }
    }
    
    currentIndex = match.index + mathText.length;
  }
  
  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }
  
  return parts.length > 0 ? parts : text;
};

const QuestionPanel = ({ question, selectedOption, onSelectOption, isMarked }: QuestionPanelProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-8">
      {/* Question Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-lg shadow-sm">
            <span className="font-bold text-sm">Question {question.id}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-lg font-semibold border border-green-200">
              <Award size={12} className="inline mr-1" />
              +{4}
            </div>
            <div className="bg-red-50 text-red-700 px-3 py-1.5 rounded-lg font-semibold border border-red-200">
              -{1}
            </div>
          </div>
        </div>
        {isMarked && (
          <span className="bg-amber-600 text-white text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 shadow-sm">
            <Star size={12} fill="white" />
            Marked for Review
          </span>
        )}
      </div>

      {/* Question Text */}
      <div className="mb-8 text-base leading-relaxed whitespace-pre-line text-slate-800 bg-slate-50 p-6 rounded-lg border border-slate-200">
        {renderTextWithMath(question.text)}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-start gap-4 p-5 rounded-lg border-2 cursor-pointer transition-all text-sm
              ${
                selectedOption === index + 1
                  ? "border-slate-900 bg-slate-50 shadow-sm"
                  : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
              }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={selectedOption === index + 1}
              onChange={() => onSelectOption(index + 1)}
              className="w-5 h-5 accent-slate-900 flex-shrink-0 mt-0.5"
            />
            <div className="flex-1">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-slate-200 text-slate-700 font-bold text-xs mr-3">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-slate-800">{renderTextWithMath(option)}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionPanel;
