import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ExamPaper } from "@/data/examTypes";
import { examConfig as config2025, questions as questions2025 } from "@/data/examData";
import { examConfig2024, questions2024 } from "@/data/examData2024";
import ExamPage from "@/components/exam/ExamPage";
import LoginDialog from "@/components/exam/LoginDialog";
import { GraduationCap, Clock, FileText, Award, AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const papers: ExamPaper[] = [
  { config: config2025, questions: questions2025 },
  { config: examConfig2024, questions: questions2024 },
];

const Index = () => {
  const navigate = useNavigate();
  const [selectedPaper, setSelectedPaper] = useState<ExamPaper | null>(null);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [paperToStart, setPaperToStart] = useState<ExamPaper | null>(null);

  const handleStartTest = (paper: ExamPaper) => {
    setPaperToStart(paper);
    setShowLoginDialog(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginDialog(false);
    if (paperToStart) {
      setSelectedPaper(paperToStart);
    }
  };

  const handleExit = () => {
    setSelectedPaper(null);
    setIsLoggedIn(false);
    setPaperToStart(null);
  };

  if (selectedPaper && isLoggedIn) {
    return <ExamPage paper={selectedPaper} onExit={handleExit} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="w-full max-w-3xl">
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <GraduationCap size={42} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CUET PG Mock Test Platform</h1>
          <p className="text-gray-600">Data Science, AI, Cyber Security & Computer Science</p>
        </div>

        <div className="grid gap-6">
          {papers.map((paper, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <FileText size={24} />
                    {paper.config.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <Clock size={14} />
                    {paper.config.date}
                  </p>
                </div>
                <Button 
                  onClick={() => handleStartTest(paper)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 py-3 rounded-xl shadow-md"
                >
                  Start Test →
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
                  <div className="flex items-center justify-center text-blue-600 mb-2">
                    <FileText size={20} />
                  </div>
                  <div className="text-2xl font-bold text-blue-700">{paper.config.totalQuestions}</div>
                  <div className="text-xs text-blue-600 mt-1">Questions</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center border border-purple-200">
                  <div className="flex items-center justify-center text-purple-600 mb-2">
                    <Award size={20} />
                  </div>
                  <div className="text-2xl font-bold text-purple-700">{paper.config.totalMarks}</div>
                  <div className="text-xs text-purple-600 mt-1">Total Marks</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                  <div className="text-2xl font-bold text-green-700">+{paper.config.correctMarks}</div>
                  <div className="text-xs text-green-600 mt-1">Correct</div>
                </div>
                <div className="bg-red-50 rounded-xl p-4 text-center border border-red-200">
                  <div className="text-2xl font-bold text-red-700">{paper.config.wrongMarks}</div>
                  <div className="text-xs text-red-600 mt-1">Wrong</div>
                </div>
              </div>

              <div className="mt-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                <div className="flex items-start gap-2 text-sm text-gray-700">
                  <AlertCircle size={16} className="mt-0.5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Duration:</span> {paper.config.durationMinutes} minutes • 
                    <span className="font-semibold"> Auto-submit</span> on timeout • 
                    <span className="font-semibold"> +4/-1</span> marking scheme
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            National Testing Agency (NTA) • Official Mock Test Platform
          </p>
        </div>
      </div>

      <LoginDialog open={showLoginDialog} onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Index;
