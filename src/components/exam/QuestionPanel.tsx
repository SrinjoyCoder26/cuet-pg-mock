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
    <div className="flex-1 overflow-y-auto p-4 lg:p-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl shadow-md">
          <span className="font-bold text-sm">Question {question.id}</span>
          <span className="text-xs opacity-90 ml-3 flex items-center gap-1">
            <Award size={12} />
            +4 / -1
          </span>
        </div>
        {isMarked && (
          <span className="bg-yellow-500 text-white text-xs px-3 py-1.5 rounded-lg font-semibold shadow-sm flex items-center gap-1">
            <Star size={12} fill="white" />
            Marked for Review
          </span>
        )}
      </div>

      <div className="mb-6 text-base leading-relaxed whitespace-pre-line text-gray-800 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        {renderTextWithMath(question.text)}
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all text-sm
              ${
                selectedOption === index + 1
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              checked={selectedOption === index + 1}
              onChange={() => onSelectOption(index + 1)}
              className="w-5 h-5 accent-blue-600 flex-shrink-0 mt-0.5"
            />
            <div className="flex-1">
              <span className="font-bold text-sm text-gray-600 mr-2">
                ({String.fromCharCode(65 + index)})
              </span>
              <span className="text-gray-800">{renderTextWithMath(option)}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionPanel;
