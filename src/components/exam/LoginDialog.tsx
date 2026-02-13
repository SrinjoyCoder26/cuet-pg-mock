import { useState } from "react";
import { User, Lock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Default credentials
const DEFAULT_ID = "CUET2024";
const DEFAULT_PASSWORD = "01011990"; // DOB format: DDMMYYYY
export const CANDIDATE_NAME = "Rahul Kumar";

interface LoginDialogProps {
  open: boolean;
  onLoginSuccess: () => void;
}

const LoginDialog = ({ open, onLoginSuccess }: LoginDialogProps) => {
  const [userId, setUserId] = useState(DEFAULT_ID);
  const [password, setPassword] = useState(DEFAULT_PASSWORD);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userId === DEFAULT_ID && password === DEFAULT_PASSWORD) {
      onLoginSuccess();
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Dialog open={open} modal>
      <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800">Candidate Login</DialogTitle>
          <DialogDescription>
            Enter your credentials to access the examination portal
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleLogin} className="space-y-5 mt-4">
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
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 rounded transition-colors border border-slate-800"
          >
            Login to Start Test
          </Button>
        </form>

        <div className="mt-4 p-4 bg-slate-50 border border-slate-300 rounded">
          <p className="text-xs text-slate-800 font-semibold mb-2">Default Login Credentials:</p>
          <div className="text-xs text-slate-700 space-y-1">
            <p>• User ID: <span className="font-mono font-semibold">{DEFAULT_ID}</span></p>
            <p>• Password: <span className="font-mono font-semibold">{DEFAULT_PASSWORD}</span></p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
