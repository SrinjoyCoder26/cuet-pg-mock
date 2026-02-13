import { useNavigate } from "react-router-dom";
import { GraduationCap, FileText, BookOpen, Library, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("isAuthenticated");
      navigate("/");
    }
  };

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <GraduationCap size={48} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">CUET PG Mock Test Platform</h1>
          <p className="text-xl text-gray-600 mb-2">Data Science, AI, Cyber Security & Computer Science</p>
          <p className="text-sm text-gray-500">(MTQP04)</p>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="mt-6"
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {navigationCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.path}
                onClick={() => navigate(card.path)}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all p-8 cursor-pointer group"
              >
                <div className={`bg-gradient-to-br ${card.bgGradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`bg-gradient-to-r ${card.gradient} text-white w-14 h-14 rounded-lg flex items-center justify-center`}>
                    <IconComponent size={28} />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {card.description}
                </p>
                <Button className={`w-full bg-gradient-to-r ${card.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl shadow-md`}>
                  Get Started →
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            National Testing Agency (NTA) • Official Mock Test Platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
