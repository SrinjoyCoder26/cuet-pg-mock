import { useState, useCallback } from "react";
import type { ExamPaper } from "@/data/examTypes";
import type { QuestionStatus } from "@/components/exam/QuestionPalette";
import QuestionPanel from "@/components/exam/QuestionPanel";
import QuestionPalette from "@/components/exam/QuestionPalette";
import Timer from "@/components/exam/Timer";
import ResultsPage from "@/components/exam/ResultsPage";

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

  if (submitted) return <ResultsPage paper={paper} answers={answers} onBack={onExit} />;

  const isMarked = statuses[currentIndex] === "marked" || statuses[currentIndex] === "marked-answered";
  const answeredCount = statuses.filter((s) => s === "answered" || s === "marked-answered").length;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      {/* Compact Header */}
      <header className="bg-primary text-primary-foreground px-3 py-2 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <h1 className="text-sm font-bold">{config.title}</h1>
          <span className="text-[10px] opacity-70 hidden sm:inline">{config.subject}</span>
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <span className="hidden sm:inline opacity-70">{config.date}</span>
          <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-bold">
            {answeredCount}/{config.totalQuestions}
          </span>
        </div>
      </header>

      {/* Main: question + sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Question Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <QuestionPanel
            question={questions[currentIndex]}
            selectedOption={answers[currentIndex]}
            onSelectOption={selectOption}
            isMarked={isMarked}
          />

          {/* Bottom nav */}
          <div className="flex items-center justify-between px-3 py-2 border-t bg-card flex-shrink-0 gap-2">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="bg-primary text-primary-foreground px-3 py-1.5 rounded text-xs font-semibold disabled:opacity-30 hover:opacity-90 transition-opacity"
            >
              ‹ Prev
            </button>
            <div className="flex gap-2">
              <button
                onClick={toggleMark}
                className="bg-exam-sidebar text-exam-sidebar-foreground px-3 py-1.5 rounded text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                {isMarked ? "Unmark" : "★ Mark"}
              </button>
              <button
                onClick={clearResponse}
                className="bg-destructive text-destructive-foreground px-3 py-1.5 rounded text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                Clear
              </button>
            </div>
            <button
              onClick={goNext}
              disabled={currentIndex === questions.length - 1}
              className="bg-primary text-primary-foreground px-3 py-1.5 rounded text-xs font-semibold disabled:opacity-30 hover:opacity-90 transition-opacity"
            >
              Next ›
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-[220px] lg:w-[250px] border-l bg-card flex flex-col p-2 gap-2 flex-shrink-0 overflow-y-auto">
          <Timer durationMinutes={config.durationMinutes} onTimeUp={handleTimeUp} isRunning={true} />

          <QuestionPalette
            totalQuestions={questions.length}
            currentQuestion={currentIndex}
            questionStatuses={statuses}
            onQuestionClick={visitQuestion}
          />

          <button
            onClick={handleSubmit}
            className="mt-auto bg-secondary text-secondary-foreground px-3 py-2.5 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity flex-shrink-0"
          >
            ✔ SUBMIT
          </button>
        </aside>
      </div>
    </div>
  );
};

export default ExamPage;
