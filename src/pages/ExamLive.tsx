import { useParams, useNavigate } from "react-router-dom";
import { getPaperById } from "@/data/papers";
import ExamPage from "@/components/exam/ExamPage";
import { useEffect, useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "@/components/ui/alert-dialog";
import { ShieldAlert } from "lucide-react";

const ExamLive = () => {
    const { paperId } = useParams();
    const navigate = useNavigate();
    const paper = paperId ? getPaperById(paperId) : undefined;

    const [violationType, setViolationType] = useState<"fullscreen" | "tab-switch" | "blur" | null>(null);
    const [isTerminated, setIsTerminated] = useState(false);

    useEffect(() => {
        if (!paper) return;

        // Force Full Screen on Mount
        const enterFullScreen = () => {
            if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.error("Fullscreen denied:", err);
                });
            }
        };
        enterFullScreen();

        // --- Event Listeners ---

        // 1. Full Screen Change
        const handleFullScreenChange = () => {
            if (!document.fullscreenElement) {
                setViolationType("fullscreen");
                // Optional: Immediate termination or warning
            }
        };

        // 2. Visibility Change (Tab Switch)
        const handleVisibilityChange = () => {
            if (document.hidden) {
                setViolationType("tab-switch");
            }
        };

        // 3. Window Blur (Focus Lost)
        const handleBlur = () => {
            setViolationType("blur");
        };

        // 4. Prevent Right Click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // 5. Prevent Keyboard Shortcuts (Inspect, Copy, etc.)
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && e.key === "I") ||
                (e.ctrlKey && e.shiftKey && e.key === "J") ||
                (e.ctrlKey && e.key === "u") ||
                (e.altKey && e.key === "Tab")
            ) {
                e.preventDefault();
            }
        };

        document.addEventListener("fullscreenchange", handleFullScreenChange);
        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("blur", handleBlur);
        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);

        // Cleanup
        return () => {
            document.removeEventListener("fullscreenchange", handleFullScreenChange);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("blur", handleBlur);
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [paper]);


    const handleReturnToFullScreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(err => console.error(err));
        }
        setViolationType(null);
    };

    const handleTerminate = () => {
        setIsTerminated(true);
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(err => console.error(err));
        }
        // Navigate away after a short delay
        setTimeout(() => navigate("/exam"), 2000);
    };

    if (!paper) {
        return (
            <div className="flex h-screen items-center justify-center flex-col gap-4">
                <h2 className="text-xl font-bold text-slate-900">Exam Paper Not Found</h2>
                <button onClick={() => navigate("/exam")} className="px-4 py-2 bg-slate-900 text-white rounded">Return</button>
            </div>
        );
    }

    if (isTerminated) {
        return (
            <div className="h-screen w-screen bg-red-50 flex flex-col items-center justify-center p-8 text-center z-50">
                <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md border border-red-200">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldAlert className="w-8 h-8 text-red-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-red-700 mb-4">EXAM TERMINATED</h1>
                    <p className="text-slate-600 mb-6">
                        System detected suspicious activity. Your exam session has been locked and recorded as a potential violation.
                    </p>
                    <button
                        onClick={() => navigate("/exam")}
                        className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 rounded-lg transition-colors"
                    >
                        Return to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    const handleExit = () => {
        if (window.confirm("Are you sure you want to finish the exam?")) {
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(err => console.error(err));
            }
            navigate("/exam");
        }
    };

    return (
        <>
            <ExamPage paper={paper} onExit={handleExit} />

            {/* Violation Alert Dialog */}
            <AlertDialog open={!!violationType}>
                <AlertDialogContent className="bg-red-50 border-red-200">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2 text-red-700">
                            <ShieldAlert className="w-6 h-6" />
                            Warning: Action Restricted
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-slate-800 font-medium">
                            {violationType === "fullscreen" && "You must stay in Full Screen mode to continue the exam."}
                            {violationType === "tab-switch" && "Switching tabs is strictly prohibited."}
                            {violationType === "blur" && "Please focus on the exam window found."}
                            <br /><br />
                            <span className="text-red-600 font-bold block">
                                Further violations will result in immediate exam termination.
                            </span>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={handleTerminate} className="bg-red-100 text-red-700 hover:bg-red-200 border border-red-300">
                            End Test
                        </AlertDialogAction>
                        <AlertDialogAction onClick={handleReturnToFullScreen} className="bg-red-700 hover:bg-red-800 text-white">
                            Resume Exam
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default ExamLive;
