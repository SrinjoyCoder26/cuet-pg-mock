import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, FileText, BookOpen, Library, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// Target: 10th March 2026, 9:00 AM IST (IST = UTC+5:30)
const EXAM_TARGET_MS = Date.UTC(2026, 2, 10, 3, 30, 0); // 9:00 AM IST = 3:30 AM UTC

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, EXAM_TARGET_MS - now);
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

const Home = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const navigationCards = [
    {
      title: "Mock Tests",
      description: "Practice with full-length mock exams",
      icon: FileText,
      path: "/exam",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      title: "Syllabus",
      description: "View the complete MTQP04 syllabus",
      icon: BookOpen,
      path: "/syllabus",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      title: "Notes",
      description: "Comprehensive study notes for all topics",
      icon: Library,
      path: "/notes",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 text-white w-10 h-10 rounded-lg flex items-center justify-center">
              <GraduationCap size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">CUET PG Preparation Platform</h1>

            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-6 border border-white/20">
            <GraduationCap size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">CUET PG Mock Test Platform</h2>
          <p className="text-xl text-slate-300 mb-2">Data Science, AI, Cyber Security & Computer Science</p>
          <p className="text-sm text-slate-400 uppercase tracking-wider mb-8">(MTQP04)</p>

          {/* Countdown Timer */}
          <div className="mt-4">
            <div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-4">
              <Calendar size={16} />
              <span>Exam Date: 10th March 2026, 9:00 AM IST</span>
            </div>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-1">
                    <span className="text-2xl sm:text-3xl font-bold tabular-nums">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">{unit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {navigationCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.path}
                onClick={() => navigate(card.path)}
                className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-all cursor-pointer group overflow-hidden"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${card.bgGradient} p-6 border-b border-slate-200`}>
                  <div className="flex items-center justify-center w-14 h-14 bg-white rounded-lg shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <div className={`bg-gradient-to-r ${card.gradient} text-white w-12 h-12 rounded-md flex items-center justify-center`}>
                      <IconComponent size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {card.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="p-6">
                  <Button className={`w-full bg-gradient-to-r ${card.gradient} hover:opacity-90 text-white font-semibold shadow-sm`}>
                    Access Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-lg border border-slate-200 shadow-sm p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">About This Platform</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div>
              <div className="font-semibold text-slate-900 mb-2">Comprehensive Preparation</div>
              <p>Access full-length mock tests designed to match the actual CUET PG examination pattern.</p>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-2">Detailed Syllabus</div>
              <p>Review the complete MTQP04 syllabus covering all topics for thorough preparation.</p>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-2">Study Materials</div>
              <p>Comprehensive notes and resources for all subjects to enhance your understanding.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-slate-500">
            © 2024 CUET PG Mock Test Platform
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
