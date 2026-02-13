import { useState } from "react";
import type { ExamPaper } from "@/data/examTypes";
import { examConfig as config2025, questions as questions2025 } from "@/data/examData";
import { examConfig2024, questions2024 } from "@/data/examData2024";
import ExamPage from "@/components/exam/ExamPage";

const papers: ExamPaper[] = [
  { config: config2025, questions: questions2025 },
  { config: examConfig2024, questions: questions2024 },
];

const Index = () => {
  const [selectedPaper, setSelectedPaper] = useState<ExamPaper | null>(null);

  if (selectedPaper) {
    return <ExamPage paper={selectedPaper} onExit={() => setSelectedPaper(null)} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="bg-primary text-primary-foreground w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 text-xl font-black">
            NTA
          </div>
          <h1 className="text-2xl font-bold text-foreground">CUET PG Mock Test</h1>
          <p className="text-sm text-muted-foreground mt-1">Data Science, AI, Cyber Security & CS</p>
        </div>

        <div className="grid gap-4">
          {papers.map((paper, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl border-2 border-border hover:border-primary/50 transition-all p-5 cursor-pointer group"
              onClick={() => setSelectedPaper(paper)}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {paper.config.title}
                  </h2>
                  <p className="text-xs text-secondary font-semibold">{paper.config.date}</p>
                </div>
                <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity flex-shrink-0">
                  Start
                </button>
              </div>

              <div className="grid grid-cols-4 gap-3 text-center">
                <div>
                  <div className="font-bold text-foreground">{paper.config.totalQuestions}</div>
                  <div className="text-[10px] text-muted-foreground">Questions</div>
                </div>
                <div>
                  <div className="font-bold text-foreground">{paper.config.totalMarks}</div>
                  <div className="text-[10px] text-muted-foreground">Marks</div>
                </div>
                <div>
                  <div className="font-bold text-exam-answered">+{paper.config.correctMarks}</div>
                  <div className="text-[10px] text-muted-foreground">Correct</div>
                </div>
                <div>
                  <div className="font-bold text-destructive">{paper.config.wrongMarks}</div>
                  <div className="text-[10px] text-muted-foreground">Wrong</div>
                </div>
              </div>

              <div className="mt-3 bg-muted rounded-lg p-2.5 text-[11px] text-muted-foreground">
                Duration: {paper.config.durationMinutes} min • Auto-submit on timeout • +4/-1 marking
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
