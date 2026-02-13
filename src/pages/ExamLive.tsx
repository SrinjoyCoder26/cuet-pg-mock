import { useParams, useNavigate } from "react-router-dom";
import { getPaperById } from "@/data/papers";
import ExamPage from "@/components/exam/ExamPage";
import { useEffect } from "react";

const ExamLive = () => {
    const { paperId } = useParams();
    const navigate = useNavigate();
    const paper = paperId ? getPaperById(paperId) : undefined;

    useEffect(() => {
        // Prevent accidental back navigation
        const handlePopState = (event: PopStateEvent) => {
            event.preventDefault();
            window.history.pushState(null, "", window.location.href);
        };

        window.history.pushState(null, "", window.location.href);
        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    if (!paper) {
        return (
            <div className="flex h-screen items-center justify-center flex-col gap-4">
                <h2 className="text-xl font-bold text-slate-900">Exam Paper Not Found</h2>
                <button
                    onClick={() => navigate("/exam")}
                    className="px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition-colors"
                >
                    Return to Dashboard
                </button>
            </div>
        );
    }

    const handleExit = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(err => console.error(err));
        }
        navigate("/exam");
    };

    return <ExamPage paper={paper} onExit={handleExit} />;
};

export default ExamLive;
