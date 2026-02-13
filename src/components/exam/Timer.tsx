import { useState, useEffect, useCallback } from "react";

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
  const isLow = secondsLeft < 300;
  const total = durationMinutes * 60;
  const pct = ((total - secondsLeft) / total) * 100;

  return (
    <div className="space-y-1">
      <div className={`text-center font-mono text-lg font-bold ${isLow ? "text-destructive animate-pulse" : "text-foreground"}`}>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <div className="w-full bg-muted rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full transition-all ${isLow ? "bg-destructive" : "bg-primary"}`}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;
