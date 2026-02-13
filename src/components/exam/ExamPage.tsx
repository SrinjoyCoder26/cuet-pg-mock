import { useState, useCallback } from "react";
import type { ExamPaper } from "@/data/examTypes";
import type { QuestionStatus } from "@/components/exam/QuestionPalette";
import QuestionPanel from "@/components/exam/QuestionPanel";
import QuestionPalette from "@/components/exam/QuestionPalette";
import Timer from "@/components/exam/Timer";
import ResultsPage from "@/components/exam/ResultsPage";
import { CANDIDATE_NAME } from "@/components/exam/LoginDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Star, Eraser, Send, X, GraduationCap } from "lucide-react";

interface ExamPageProps {
  paper: ExamPaper;
  onExit: () => void;
}

const ExamPage = ({ paper, onExit }: ExamPageProps) => {
  const { config, questions } = paper;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [statuses, setStatuses] = useState<QuestionStatus[]>(() => {
    const s: QuestionStatus[] = new Array(questions.length).fill("not-visited");
    s[0] = "not-answered";
    return s;
  });
  const [submitted, setSubmitted] = useState(false);

  const visitQuestion = useCallback((index: number) => {
    setStatuses((prev) => {
      const next = [...prev];
      if (next[index] === "not-visited") next[index] = "not-answered";
      return next;
    });
    setCurrentIndex(index);
  }, []);

  const selectOption = (option: number) => {
    setAnswers((prev) => { const n = [...prev]; n[currentIndex] = option; return n; });
    setStatuses((prev) => {
      const n = [...prev];
      n[currentIndex] = (n[currentIndex] === "marked" || n[currentIndex] === "marked-answered") ? "marked-answered" : "answered";
      return n;
    });
  };

  const clearResponse = () => {
    setAnswers((prev) => { const n = [...prev]; n[currentIndex] = null; return n; });
    setStatuses((prev) => {
      const n = [...prev];
      n[currentIndex] = n[currentIndex] === "marked-answered" ? "marked" : "not-answered";
      return n;
    });
  };

  const toggleMark = () => {
    setStatuses((prev) => {
      const n = [...prev];
      const c = n[currentIndex];
      if (c === "marked") n[currentIndex] = "not-answered";
      else if (c === "marked-answered") n[currentIndex] = "answered";
      else if (c === "answered") n[currentIndex] = "marked-answered";
      else n[currentIndex] = "marked";
      return n;
    });
  };

  const goNext = () => { if (currentIndex < questions.length - 1) visitQuestion(currentIndex + 1); };
  const goPrev = () => { if (currentIndex > 0) visitQuestion(currentIndex - 1); };

  const handleSubmit = () => {
    if (window.confirm("Submit the exam? This cannot be undone.")) setSubmitted(true);
  };

  const handleTimeUp = useCallback(() => {
    alert("Time's up! Auto-submitting...");
    setSubmitted(true);
  }, []);

  const handleExit = () => {
    if (window.confirm("Are you sure you want to exit? Your progress will be lost.")) {
      onExit();
    }
  };

  if (submitted) return <ResultsPage paper={paper} answers={answers} statuses={statuses} onBack={onExit} />;

  const isMarked = statuses[currentIndex] === "marked" || statuses[currentIndex] === "marked-answered";
  const answeredCount = statuses.filter((s) => s === "answered" || s === "marked-answered").length;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between flex-shrink-0 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-lg border border-white/20">
            <GraduationCap size={20} />
          </div>
          <div>
            <h1 className="text-sm font-bold">{config.title}</h1>
            <span className="text-xs text-slate-300 hidden sm:inline">{config.subject}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={CANDIDATE_NAME} />
              <AvatarFallback className="bg-white text-slate-900 text-xs font-bold">RK</AvatarFallback>
            </Avatar>
            <span className="font-medium">{CANDIDATE_NAME}</span>
          </div>
          <span className="hidden sm:inline text-slate-300">{config.date}</span>
          <div className="bg-white text-slate-900 px-3 py-1.5 rounded-lg font-bold shadow-sm">
            {answeredCount}/{config.totalQuestions}
          </div>
          <button
            onClick={handleExit}
            className="bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <X size={14} />
            Exit
          </button>
        </div>
      </header>

      {/* Main: question + sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Question Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-white">
          <QuestionPanel
            question={questions[currentIndex]}
            selectedOption={answers[currentIndex]}
            onSelectOption={selectOption}
            isMarked={isMarked}
          />

          {/* Bottom nav */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200 bg-slate-50 flex-shrink-0 gap-3">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="bg-slate-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
            >
              <ChevronLeft size={16} />
              Previous
            </button>
            <div className="flex gap-2">
              <button
                onClick={toggleMark}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm"
              >
                <Star size={16} fill={isMarked ? "white" : "none"} />
                {isMarked ? "Unmark" : "Mark"}
              </button>
              <button
                onClick={clearResponse}
                className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 shadow-sm"
              >
                <Eraser size={16} />
                Clear
              </button>
            </div>
            <button
              onClick={goNext}
              disabled={currentIndex === questions.length - 1}
              className="bg-slate-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-[260px] lg:w-[300px] border-l border-slate-200 bg-white flex flex-col p-4 gap-4 flex-shrink-0 overflow-y-auto shadow-lg">
          <Timer durationMinutes={config.durationMinutes} onTimeUp={handleTimeUp} isRunning={true} />

          <QuestionPalette
            totalQuestions={questions.length}
            currentQuestion={currentIndex}
            questionStatuses={statuses}
            onQuestionClick={visitQuestion}
          />

          <button
            onClick={handleSubmit}
            className="mt-auto bg-green-700 hover:bg-green-800 text-white px-4 py-3.5 rounded-lg text-sm font-bold transition-colors flex-shrink-0 flex items-center justify-center gap-2 shadow-md"
          >
            <Send size={18} />
            SUBMIT EXAM
          </button>
        </aside>
      </div>
    </div>
  );
};

export default ExamPage;
