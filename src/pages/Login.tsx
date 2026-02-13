import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GraduationCap, User, Lock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Default credentials
const DEFAULT_ID = "CUET2024";
const DEFAULT_PASSWORD = "01011990"; // DOB format: DDMMYYYY

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/exam";
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (userId === DEFAULT_ID && password === DEFAULT_PASSWORD) {
      localStorage.setItem("isAuthenticated", "true");
      navigate(redirectPath);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <GraduationCap size={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CUET PG Mock Test</h1>
          <p className="text-gray-600">Data Science, AI, Cyber Security & CS</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Student Login</h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <Label htmlFor="userId" className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                <User size={16} />
                User ID
              </Label>
              <Input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                  setError("");
                }}
                placeholder="Enter your User ID"
                className="w-full"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-2">
                <Lock size={16} />
                Password (Date of Birth)
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="DDMMYYYY (e.g., 01011990)"
                className="w-full"
                required
              />
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <Calendar size={12} />
                Format: DDMMYYYY
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all shadow-md"
            >
              Login to Start Test
            </Button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-800 font-semibold mb-2">Default Login Credentials:</p>
            <div className="text-xs text-blue-700 space-y-1">
              <p>• User ID: <span className="font-mono font-semibold">{DEFAULT_ID}</span></p>
              <p>• Password: <span className="font-mono font-semibold">{DEFAULT_PASSWORD}</span></p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            National Testing Agency (NTA) • Mock Test Platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
