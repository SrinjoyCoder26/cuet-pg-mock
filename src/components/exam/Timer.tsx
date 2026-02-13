import { useState, useEffect, useCallback } from "react";
import { Clock, AlertCircle } from "lucide-react";

interface TimerProps {
  durationMinutes: number;
  onTimeUp: () => void;
  isRunning: boolean;
}

const Timer = ({ durationMinutes, onTimeUp, isRunning }: TimerProps) => {
  const [secondsLeft, setSecondsLeft] = useState(durationMinutes * 60);

  useEffect(() => {
    if (!isRunning) return;
    if (secondsLeft <= 0) { onTimeUp(); return; }
    const interval = setInterval(() => {
      setSecondsLeft((prev) => { if (prev <= 1) { onTimeUp(); return 0; } return prev - 1; });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft, onTimeUp]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isLow = secondsLeft < 300; // Less than 5 minutes
  const total = durationMinutes * 60;
  const pct = ((total - secondsLeft) / total) * 100;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border-2 border-blue-200 shadow-md">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Clock size={18} className={isLow ? "text-red-600 animate-pulse" : "text-blue-600"} />
        <span className="text-xs font-semibold text-gray-700">Time Remaining</span>
      </div>
      
      <div className={`text-center font-mono text-3xl font-bold mb-3 ${isLow ? "text-red-600 animate-pulse" : "text-gray-900"}`}>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 overflow-hidden">
        <div
          className={`h-2.5 rounded-full transition-all ${isLow ? "bg-gradient-to-r from-red-500 to-red-600" : "bg-gradient-to-r from-blue-500 to-purple-600"}`}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
      
      {isLow && (
        <div className="flex items-center justify-center gap-1 text-xs text-red-600 font-semibold animate-pulse">
          <AlertCircle size={14} />
          <span>Hurry Up!</span>
        </div>
      )}
    </div>
  );
};

export default Timer;
