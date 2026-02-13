import { useState, useCallback } from "react";
import type { ExamPaper } from "@/data/examTypes";
import type { QuestionStatus } from "@/components/exam/QuestionPalette";
import QuestionPanel from "@/components/exam/QuestionPanel";
import QuestionPalette from "@/components/exam/QuestionPalette";
import Timer from "@/components/exam/Timer";
import ResultsPage from "@/components/exam/ResultsPage";
import { CANDIDATE_NAME } from "@/components/exam/LoginDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Star, Eraser, Send, GraduationCap, Eye, ShieldCheck } from "lucide-react";

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

  if (submitted) return <ResultsPage paper={paper} answers={answers} statuses={statuses} onBack={onExit} />;

  const isMarked = statuses[currentIndex] === "marked" || statuses[currentIndex] === "marked-answered";
  const answeredCount = statuses.filter((s) => s === "answered" || s === "marked-answered").length;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-slate-50 relative select-none">
      {/* Watermark */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-[0.03]">
        <div className="rotate-[-45deg] transform">
          <h1 className="text-[15vw] font-black text-slate-900 whitespace-nowrap">CUET PG MOCK</h1>
        </div>
      </div>
      <div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-3 gap-8 opacity-[0.02]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <h1 className="text-4xl font-black text-slate-900 rotate-[-45deg]">CONFIDENTIAL</h1>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between flex-shrink-0 shadow-lg z-10">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-lg border border-white/20">
            <GraduationCap size={20} />
          </div>
          <div>
            <h1 className="text-sm font-bold">{config.title}</h1>
            <span className="text-xs text-slate-300 hidden sm:inline">{config.subject}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">


          <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=764&auto=format&fit=crop" alt={CANDIDATE_NAME} />
              <AvatarFallback className="bg-white text-slate-900 text-xs font-bold">RK</AvatarFallback>
            </Avatar>
            <span className="font-medium">{CANDIDATE_NAME}</span>
          </div>
          <span className="hidden sm:inline text-slate-300">{config.date}</span>
          <div className="bg-white text-slate-900 px-3 py-1.5 rounded-lg font-bold shadow-sm">
            {answeredCount}/{config.totalQuestions} Attempted
          </div>
        </div>
      </header>

      {/* Main: question + sidebar */}
      <div className="flex flex-1 overflow-hidden z-10">
        {/* Question Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-white shadow-inner">
          <QuestionPanel
            question={questions[currentIndex]}
            selectedOption={answers[currentIndex]}
            onSelectOption={selectOption}
            isMarked={isMarked}
          />

          {/* Bottom nav */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50 flex-shrink-0 gap-3">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-sm"
            >
              <ChevronLeft size={16} />
              Previous
            </button>
            <div className="flex gap-3">
              <button
                onClick={toggleMark}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 shadow-sm ${isMarked
                  ? "bg-amber-100 text-amber-900 border border-amber-200 hover:bg-amber-200"
                  : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
              >
                <Star size={16} className={isMarked ? "fill-amber-600 text-amber-600" : "text-slate-400"} />
                {isMarked ? "Marked for Review" : "Mark for Review"}
              </button>
              <button
                onClick={clearResponse}
                className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 shadow-sm"
              >
                <Eraser size={16} />
                Clear
              </button>
            </div>
            <button
              onClick={goNext}
              disabled={currentIndex === questions.length - 1}
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-[280px] lg:w-[320px] border-l border-slate-200 bg-slate-50 flex flex-col p-4 gap-4 flex-shrink-0 overflow-y-auto shadow-xl z-20">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <Timer durationMinutes={config.durationMinutes} onTimeUp={handleTimeUp} isRunning={true} />
          </div>

          <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="p-3 border-b border-slate-100 bg-slate-50/50">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Question Palette</span>
            </div>
            <div className="p-3 overflow-y-auto flex-1">
              <QuestionPalette
                totalQuestions={questions.length}
                currentQuestion={currentIndex}
                questionStatuses={statuses}
                onQuestionClick={visitQuestion}
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-auto bg-green-600 hover:bg-green-700 text-white px-4 py-4 rounded-xl text-base font-bold transition-all flex-shrink-0 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShieldCheck size={20} />
            SUBMIT EXAM
          </button>
        </aside>
      </div>
    </div>
  );
};

export default ExamPage;
