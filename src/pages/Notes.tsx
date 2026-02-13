import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Notes = () => {
  const navigate = useNavigate();

  const topicsList = [
    { id: "set-theory", title: "Set Theory & Algebra", icon: "1" },
    { id: "theory-of-computations", title: "Theory of Computations", icon: "2" },
    { id: "digital-logic", title: "Digital Logic", icon: "3" },
    { id: "computer-organization", title: "Computer Organization and Architecture", icon: "4" },
    { id: "microprocessors", title: "Microprocessors and interfacing", icon: "5" },
    { id: "programming-data-structures", title: "Programming and Data Structures", icon: "6" },
    { id: "algorithm", title: "Algorithm", icon: "7" },
    { id: "operating-system", title: "Operating System", icon: "8" },
    { id: "computer-networks", title: "Computer Networks", icon: "9" },
    { id: "artificial-intelligence", title: "Artificial Intelligence", icon: "10" },
    { id: "cryptography", title: "Cryptography & Network security", icon: "11" },
    { id: "data-science", title: "Data Science", icon: "12" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-5xl mx-auto py-8">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate("/home")}
            className="mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 rounded-xl flex items-center justify-center">
                <BookOpen size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Study Notes</h1>
                <p className="text-gray-600">Comprehensive notes for all MTQP04 topics</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <p className="text-sm text-green-800">
                <strong>Note:</strong> These comprehensive notes cover all topics from the CUET PG syllabus. 
                Each section is designed to help you understand concepts thoroughly and solve exam questions effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {topicsList.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => navigate(`/notes/${topic.id}`)}
                  className="bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all p-6 rounded-xl cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {topic.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        {topic.title}
                      </h3>
                    </div>
                    <FileText className="text-gray-400 group-hover:text-green-600 transition-colors" size={20} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Button
                onClick={() => navigate("/syllabus")}
                className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl"
              >
                View Syllabus →
              </Button>
              <Button
                onClick={() => navigate("/exam")}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl"
              >
                Practice Mock Tests →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
