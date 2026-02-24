import React from "react";
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

// Renders inline content: handles bold (**text**), inline math ($...$), and plain text
const renderInlineContent = (text: string, keyPrefix: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;

  // Match **bold**, $$block math$$, $inline math$
  const inlineRegex = /(\*\*[^*]+?\*\*|\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;
  let match;

  while ((match = inlineRegex.exec(text)) !== null) {
    // Add text before match
    if (match.index > currentIndex) {
      parts.push(<span key={`${keyPrefix}-t-${currentIndex}`}>{text.substring(currentIndex, match.index)}</span>);
    }

    const matched = match[0];
    if (matched.startsWith('**') && matched.endsWith('**')) {
      // Bold text
      const boldContent = matched.slice(2, -2);
      parts.push(<strong key={`${keyPrefix}-b-${match.index}`} className="font-bold text-slate-900">{boldContent}</strong>);
    } else if (matched.startsWith('$$')) {
      // Block math
      const latex = matched.slice(2, -2);
      try {
        parts.push(
          <div key={`${keyPrefix}-bm-${match.index}`} className="my-4 overflow-x-auto">
            <BlockMath math={latex} />
          </div>
        );
      } catch {
        parts.push(<span key={`${keyPrefix}-bm-${match.index}`}>{matched}</span>);
      }
    } else {
      // Inline math
      const latex = matched.slice(1, -1);
      try {
        parts.push(<InlineMath key={`${keyPrefix}-im-${match.index}`} math={latex} />);
      } catch {
        parts.push(<span key={`${keyPrefix}-im-${match.index}`}>{matched}</span>);
      }
    }

    currentIndex = match.index + matched.length;
  }

  // Remaining text
  if (currentIndex < text.length) {
    parts.push(<span key={`${keyPrefix}-t-end`}>{text.substring(currentIndex)}</span>);
  }

  return parts;
};

// Check if a block of text is a markdown table
const isMarkdownTable = (text: string): boolean => {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return false;
  return lines[0].includes('|') && lines[1].includes('|') && /^\|?[\s-:|]+\|?$/.test(lines[1].trim());
};

// Render a markdown table as a styled HTML table
const renderTable = (text: string, keyPrefix: string): React.ReactNode => {
  const lines = text.trim().split('\n').filter(l => l.trim().length > 0);
  if (lines.length < 2) return null;

  const parseRow = (line: string): string[] => {
    return line.split('|').map(cell => cell.trim()).filter((_, i, arr) => i > 0 && i < arr.length);
  };

  const headerCells = parseRow(lines[0]);
  // lines[1] is the separator row (|---|---|), skip it
  const bodyRows = lines.slice(2).filter(l => !/^\|?[\s-:|]+\|?$/.test(l.trim()));

  return (
    <div key={keyPrefix} className="my-4 overflow-x-auto">
      <table className="min-w-full border border-slate-300 rounded-lg overflow-hidden text-sm">
        <thead>
          <tr className="bg-slate-100">
            {headerCells.map((cell, i) => (
              <th key={i} className="px-4 py-2.5 text-left font-semibold text-slate-800 border-b border-slate-300">
                {renderInlineContent(cell, `${keyPrefix}-th-${i}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, rIdx) => {
            const cells = parseRow(row);
            return (
              <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                {cells.map((cell, cIdx) => (
                  <td key={cIdx} className="px-4 py-2.5 text-slate-700 border-b border-slate-200">
                    {renderInlineContent(cell, `${keyPrefix}-td-${rIdx}-${cIdx}`)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Check if a block is a code block
const isCodeBlock = (text: string): boolean => {
  return text.trimStart().startsWith('```');
};

// Render a code block
const renderCodeBlock = (text: string, keyPrefix: string): React.ReactNode => {
  const lines = text.trim().split('\n');
  const firstLine = lines[0].trim();
  const lang = firstLine.replace(/^```/, '').trim();
  // Remove first (```) and last (```) lines
  const codeLines = lines.slice(1);
  if (codeLines.length > 0 && codeLines[codeLines.length - 1].trim() === '```') {
    codeLines.pop();
  }
  const code = codeLines.join('\n');

  return (
    <div key={keyPrefix} className="my-4">
      {lang && <div className="bg-slate-800 text-slate-300 text-xs px-4 py-1.5 rounded-t-lg font-mono">{lang}</div>}
      <pre className={`bg-slate-900 text-green-300 p-4 ${lang ? 'rounded-b-lg' : 'rounded-lg'} overflow-x-auto text-sm font-mono leading-relaxed`}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

// Render a paragraph with inline content + single newline handling
const renderParagraph = (text: string, keyPrefix: string): React.ReactNode => {
  // Split by single newlines to handle A.\nB.\nC.\n style lists  
  const lines = text.split('\n');

  if (lines.length === 1) {
    const inlineContent = renderInlineContent(text, keyPrefix);
    return <p key={keyPrefix} className="text-slate-700 leading-relaxed text-lg">{inlineContent}</p>;
  }

  return (
    <div key={keyPrefix} className="text-slate-700 leading-relaxed text-lg">
      {lines.map((line, lIdx) => (
        <React.Fragment key={`${keyPrefix}-l-${lIdx}`}>
          {renderInlineContent(line, `${keyPrefix}-l-${lIdx}`)}
          {lIdx < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};

const renderTextWithMath = (text: string) => {
  if (!text) return null;

  // First, split by code blocks (```...```)
  const codeBlockRegex = /(```[\s\S]*?```)/g;
  const topLevelParts = text.split(codeBlockRegex);

  const rendered: React.ReactNode[] = [];

  topLevelParts.forEach((part, partIdx) => {
    if (isCodeBlock(part)) {
      rendered.push(renderCodeBlock(part, `cb-${partIdx}`));
      return;
    }

    // Split remaining by double newlines for paragraph/table separation
    const paragraphs = part.split(/\n\n+/);

    paragraphs.forEach((paragraph, pIdx) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return;

      const key = `p-${partIdx}-${pIdx}`;

      if (isMarkdownTable(trimmed)) {
        rendered.push(renderTable(trimmed, key));
      } else {
        rendered.push(renderParagraph(trimmed, key));
      }
    });
  });

  return <div className="space-y-3">{rendered}</div>;
};

const QuestionPanel = ({ question, selectedOption, onSelectOption, isMarked }: QuestionPanelProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-white">
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

      {/* Question Content */}
      <div className="mb-8">
        {question.image && (
          <div className="mb-6">
            <img
              src={question.image}
              alt={`Question ${question.id}`}
              className="max-w-full h-auto"
            />
          </div>
        )}
        {question.text && (
          <div className="prose prose-slate prose-lg max-w-none text-slate-800">
            {renderTextWithMath(question.text)}
          </div>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-start gap-4 p-5 rounded-lg border-2 cursor-pointer transition-all text-sm
              ${selectedOption === index + 1
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
