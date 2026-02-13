import { useNavigate } from "react-router-dom";
import { papers } from "@/data/papers";
import { GraduationCap, Clock, FileText, Award, AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  const handleStartTest = (paperId: string) => {
    navigate(`/exam/${paperId}/instructions`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 text-white w-10 h-10 rounded-lg flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900">CUET PG Mock Test</h1>

              </div>
            </div>
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Available Mock Tests</h2>
          <p className="text-slate-600">Select a test paper to begin your examination</p>
        </div>

        {/* Test Papers Grid */}
        <div className="grid gap-6">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Paper Header */}
              <div className="bg-slate-900 text-white px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText size={20} />
                      <h3 className="text-xl font-bold">{paper.config.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-300">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {paper.config.date}
                      </span>
                      <span>•</span>
                      <span>{paper.config.subject}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleStartTest(paper.id)}
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8"
                  >
                    Start Test
                  </Button>
                </div>
              </div>

              {/* Paper Details */}
              <div className="p-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide mb-1">Questions</div>
                    <div className="text-2xl font-bold text-slate-900">{paper.config.totalQuestions}</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="text-xs font-medium text-slate-600 uppercase tracking-wide mb-1">Total Marks</div>
                    <div className="text-2xl font-bold text-slate-900">{paper.config.totalMarks}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="text-xs font-medium text-green-700 uppercase tracking-wide mb-1">Correct</div>
                    <div className="text-2xl font-bold text-green-700">+{paper.config.correctMarks}</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="text-xs font-medium text-red-700 uppercase tracking-wide mb-1">Incorrect</div>
                    <div className="text-2xl font-bold text-red-700">{paper.config.wrongMarks}</div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <AlertCircle size={20} className="text-amber-700 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-700">
                      <p className="font-semibold text-slate-900 mb-1">Important Instructions:</p>
                      <ul className="space-y-1">
                        <li>• Test duration: <span className="font-semibold">{paper.config.durationMinutes} minutes</span></li>
                        <li>• Marking scheme: <span className="font-semibold">+{paper.config.correctMarks}</span> for correct, <span className="font-semibold">{paper.config.wrongMarks}</span> for incorrect answers</li>
                        <li>• The test will auto-submit when time expires</li>
                        <li>• Ensure stable internet connection throughout the test</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200">
            <Award size={16} />
            <span>Mock Test Platform</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
