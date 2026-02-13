import type { ExamPaper } from "@/data/examTypes";
import type { QuestionStatus } from "@/components/exam/QuestionPalette";
import { ArrowLeft, Award, CheckCircle, XCircle, Clock, TrendingUp, Target, BarChart3 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from "recharts";

interface ResultsPageProps {
  paper: ExamPaper;
  answers: (number | null)[];
  statuses: QuestionStatus[];
  onBack: () => void;
}

const ResultsPage = ({ paper, answers, statuses, onBack }: ResultsPageProps) => {
  const { config, questions } = paper;
  let correct = 0, wrong = 0, unanswered = 0;
  const questionAnalytics: { questionId: number; isCorrect: boolean; wasMarked: boolean }[] = [];

  answers.forEach((answer, index) => {
    const isCorrect = answer !== null && answer === questions[index].correctAnswer;
    const wasMarked = statuses[index] === "marked" || statuses[index] === "marked-answered";
    
    if (answer === null) {
      unanswered++;
    } else if (isCorrect) {
      correct++;
    } else {
      wrong++;
    }
    
    questionAnalytics.push({
      questionId: index + 1,
      isCorrect,
      wasMarked
    });
  });

  const totalScore = correct * config.correctMarks + wrong * config.wrongMarks;
  const percentage = ((totalScore / config.totalMarks) * 100).toFixed(1);
  const accuracy = answers.filter(a => a !== null).length > 0 
    ? ((correct / answers.filter(a => a !== null).length) * 100).toFixed(1)
    : "0.0";

  // Pie chart data
  const pieData = [
    { name: "Correct", value: correct, color: "#10b981" },
    { name: "Wrong", value: wrong, color: "#ef4444" },
    { name: "Unanswered", value: unanswered, color: "#9ca3af" },
  ];

  // Performance over questions (trend)
  const trendData = questionAnalytics.map((qa, idx) => ({
    question: qa.questionId,
    cumulative: questionAnalytics.slice(0, idx + 1).filter(q => q.isCorrect).length,
  }));

  // Question difficulty analysis (based on marked questions)
  const markedCorrect = questionAnalytics.filter(q => q.wasMarked && q.isCorrect).length;
  const markedWrong = questionAnalytics.filter(q => q.wasMarked && !q.isCorrect && answers[questionAnalytics.indexOf(q)] !== null).length;
  const notMarkedCorrect = correct - markedCorrect;
  const notMarkedWrong = wrong - markedWrong;

  const difficultyData = [
    { category: "Not Marked", Correct: notMarkedCorrect, Wrong: notMarkedWrong },
    { category: "Marked", Correct: markedCorrect, Wrong: markedWrong },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between border-b-4 border-slate-700">
        <div className="flex items-center gap-3">
          <Award size={28} />
          <div>
            <h1 className="text-xl font-bold">Exam Results</h1>
            <p className="text-sm opacity-90">{config.title}</p>
          </div>
        </div>
        <button 
          onClick={onBack} 
          className="bg-white text-slate-800 px-4 py-2 rounded text-sm font-bold hover:bg-slate-100 transition-colors border border-slate-300 flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Score Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 text-center border-2 border-blue-500">
            <div className="flex items-center justify-center text-blue-600 mb-2">
              <Target size={24} />
            </div>
            <div className="text-3xl font-bold text-blue-600">{totalScore}</div>
            <div className="text-xs text-gray-600 mt-1">Score / {config.totalMarks}</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border-2 border-green-600">
            <div className="flex items-center justify-center text-green-600 mb-2">
              <CheckCircle size={24} />
            </div>
            <div className="text-3xl font-bold text-green-600">{correct}</div>
            <div className="text-xs text-gray-600 mt-1">Correct Answers</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border-2 border-red-600">
            <div className="flex items-center justify-center text-red-600 mb-2">
              <XCircle size={24} />
            </div>
            <div className="text-3xl font-bold text-red-600">{wrong}</div>
            <div className="text-xs text-gray-600 mt-1">Wrong Answers</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border-2 border-gray-400">
            <div className="flex items-center justify-center text-gray-600 mb-2">
              <Clock size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-600">{unanswered}</div>
            <div className="text-xs text-gray-600 mt-1">Unanswered</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border-2 border-slate-600">
            <div className="flex items-center justify-center text-slate-600 mb-2">
              <TrendingUp size={24} />
            </div>
            <div className={`text-3xl font-bold ${Number(percentage) >= 50 ? "text-green-600" : "text-red-600"}`}>
              {percentage}%
            </div>
            <div className="text-xs text-gray-600 mt-1">Percentage</div>
          </div>
        </div>

        {/* Advanced Analytics Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
            <BarChart3 size={28} />
            Advanced Analytics
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Distribution Pie Chart */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Answer Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Accuracy Rate</span>
                    <span className="text-sm font-bold text-blue-600">{accuracy}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full transition-all"
                      style={{ width: `${accuracy}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Attempt Rate</span>
                    <span className="text-sm font-bold text-slate-600">
                      {(((correct + wrong) / questions.length) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-slate-600 h-3 rounded-full transition-all"
                      style={{ width: `${((correct + wrong) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-blue-50 p-3 rounded border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">
                        {((correct / questions.length) * 100).toFixed(1)}%
                      </div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded border border-slate-200">
                      <div className="text-2xl font-bold text-slate-600">
                        {correct + wrong}
                      </div>
                      <div className="text-xs text-gray-600">Total Attempted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cumulative Performance Trend */}
          <div className="bg-white rounded-lg p-6 border border-slate-200 mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Cumulative Performance Trend</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={trendData}>
                <XAxis dataKey="question" label={{ value: "Question Number", position: "insideBottom", offset: -5 }} />
                <YAxis label={{ value: "Cumulative Correct", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Line type="monotone" dataKey="cumulative" stroke="#1e40af" strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Marked vs Not Marked Performance */}
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Marked Questions Analysis</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={difficultyData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Correct" fill="#10b981" />
                <Bar dataKey="Wrong" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-600 mt-3 text-center">
              Questions you marked for review vs those you didn't
            </p>
          </div>
        </div>

        {/* Detailed Question Review */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Question-wise Review</h2>
        <div className="space-y-3">
          {questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correctAnswer;
            const isUnanswered = userAnswer === null;

            return (
              <div 
                key={q.id} 
                className={`bg-white rounded-lg border-l-4 p-4 border border-slate-200 transition-all hover:shadow-md ${
                  isUnanswered ? "border-l-gray-400" : isCorrect ? "border-l-green-600" : "border-l-red-600"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-sm text-gray-900 bg-gray-100 px-3 py-1 rounded-lg">
                    Question {q.id}
                  </span>
                  {isUnanswered ? (
                    <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                      <Clock size={12} />
                      Skipped
                    </span>
                  ) : isCorrect ? (
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                      <CheckCircle size={12} />
                      Correct +4
                    </span>
                  ) : (
                    <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                      <XCircle size={12} />
                      Wrong -1
                    </span>
                  )}
                  {statuses[index] === "marked" || statuses[index] === "marked-answered" ? (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
                      ⭐ Marked
                    </span>
                  ) : null}
                </div>
                <p className="text-sm text-gray-700 mb-2 line-clamp-2">{q.text}</p>
                <div className="text-sm space-y-1">
                  {!isUnanswered && !isCorrect && (
                    <div className="text-red-600 font-medium">
                      Your Answer: ({String.fromCharCode(64 + (userAnswer as number))}) {q.options[(userAnswer as number) - 1]}
                    </div>
                  )}
                  <div className="text-green-600 font-semibold">
                    Correct Answer: ({String.fromCharCode(64 + q.correctAnswer)}) {q.options[q.correctAnswer - 1]}
                  </div>
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
