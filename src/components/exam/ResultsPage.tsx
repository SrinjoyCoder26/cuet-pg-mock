import type { ExamPaper } from "@/data/examTypes";

interface ResultsPageProps {
  paper: ExamPaper;
  answers: (number | null)[];
  onBack: () => void;
}

const ResultsPage = ({ paper, answers, onBack }: ResultsPageProps) => {
  const { config, questions } = paper;
  let correct = 0, wrong = 0, unanswered = 0;

  answers.forEach((answer, index) => {
    if (answer === null) unanswered++;
    else if (answer === questions[index].correctAnswer) correct++;
    else wrong++;
  });

  const totalScore = correct * config.correctMarks + wrong * config.wrongMarks;
  const percentage = ((totalScore / config.totalMarks) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
        <h1 className="text-sm font-bold">Results — {config.title}</h1>
        <button onClick={onBack} className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-xs font-bold hover:opacity-90">
          ← Back
        </button>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          <div className="bg-card rounded-xl p-3 text-center border-2 border-primary">
            <div className="text-2xl font-bold text-primary">{totalScore}</div>
            <div className="text-[10px] text-muted-foreground">Score / {config.totalMarks}</div>
          </div>
          <div className="bg-card rounded-xl p-3 text-center border-2 border-exam-answered">
            <div className="text-2xl font-bold text-exam-answered">{correct}</div>
            <div className="text-[10px] text-muted-foreground">Correct</div>
          </div>
          <div className="bg-card rounded-xl p-3 text-center border-2 border-destructive">
            <div className="text-2xl font-bold text-destructive">{wrong}</div>
            <div className="text-[10px] text-muted-foreground">Wrong</div>
          </div>
          <div className="bg-card rounded-xl p-3 text-center border-2 border-muted">
            <div className="text-2xl font-bold text-muted-foreground">{unanswered}</div>
            <div className="text-[10px] text-muted-foreground">Skipped</div>
          </div>
          <div className="bg-card rounded-xl p-3 text-center border-2 border-info col-span-2 md:col-span-1">
            <div className={`text-2xl font-bold ${Number(percentage) >= 50 ? "text-exam-answered" : "text-destructive"}`}>{percentage}%</div>
            <div className="text-[10px] text-muted-foreground">Percentage</div>
          </div>
        </div>

        <h2 className="text-sm font-bold mb-3 text-foreground">Detailed Review</h2>
        <div className="space-y-2">
          {questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correctAnswer;
            const isUnanswered = userAnswer === null;

            return (
              <div key={q.id} className={`bg-card rounded-lg border-l-4 p-3 ${isUnanswered ? "border-muted" : isCorrect ? "border-exam-answered" : "border-destructive"}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-xs text-foreground">Q{q.id}</span>
                  {isUnanswered ? (
                    <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded">Skipped</span>
                  ) : isCorrect ? (
                    <span className="text-[10px] bg-exam-answered text-white px-1.5 py-0.5 rounded">✓ +4</span>
                  ) : (
                    <span className="text-[10px] bg-destructive text-white px-1.5 py-0.5 rounded">✗ -1</span>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground mb-1 whitespace-pre-line line-clamp-1">{q.text}</p>
                <div className="text-[11px] space-y-0.5">
                  {!isUnanswered && !isCorrect && (
                    <div className="text-destructive">You: {q.options[(userAnswer as number) - 1]}</div>
                  )}
                  <div className="text-exam-answered font-semibold">Ans: {q.options[q.correctAnswer - 1]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
