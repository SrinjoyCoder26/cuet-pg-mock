import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPaperById } from "@/data/papers";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Clock, FileText, CheckCircle2, AlertTriangle, Eye, ShieldAlert, Monitor } from "lucide-react";

const Instructions = () => {
    const { paperId } = useParams();
    const navigate = useNavigate();
    const [agreed, setAgreed] = useState(false);
    const paper = paperId ? getPaperById(paperId) : undefined;

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            navigate(`/login?redirect=/exam/${paperId}/instructions`);
        }
    }, [navigate, paperId]);

    if (!paper) {
        return <div className="flex h-screen items-center justify-center">Paper not found</div>;
    }

    const handleStart = () => {
        if (agreed) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen().catch((err) => {
                    console.error("Error attempting to enable full-screen mode:", err.message);
                });
            }
            navigate(`/exam/${paperId}/start`);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-inter">
            <Card className="w-full max-w-6xl shadow-xl border-slate-200 h-[90vh] flex flex-col">
                <CardHeader className="bg-slate-900 text-white py-4 px-6 flex-shrink-0 flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-xl font-bold flex items-center gap-2">
                            <Monitor size={20} className="text-blue-400" />
                            {paper.config.title} <span className="text-blue-400 text-sm font-normal">| {paper.config.subject}</span>
                        </CardTitle>
                    </div>
                    <div className="flex gap-4 text-xs font-medium">
                        <span className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded"><Clock size={12} /> {paper.config.durationMinutes} Mins</span>
                        <span className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded"><FileText size={12} /> {paper.config.totalQuestions} Qs</span>
                        <span className="flex items-center gap-1 bg-green-500/20 text-green-300 px-2 py-1 rounded border border-green-500/30"><CheckCircle2 size={12} /> +{paper.config.correctMarks}</span>
                        <span className="flex items-center gap-1 bg-red-500/20 text-red-300 px-2 py-1 rounded border border-red-500/30"><AlertTriangle size={12} /> {paper.config.wrongMarks}</span>
                    </div>
                </CardHeader>

                <CardContent className="flex-1 overflow-hidden p-0 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-200">

                    {/* Left Col: General Instructions */}
                    <div className="flex-1 p-5 overflow-y-auto">
                        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2 uppercase tracking-wider">
                            <FileText size={16} className="text-slate-500" /> Examination Rules
                        </h3>
                        <ul className="space-y-2 text-xs text-slate-700 list-disc pl-4 marker:text-slate-400">
                            <li>Total duration is <strong>{paper.config.durationMinutes} minutes</strong>. Server clock is final.</li>
                            <li>The countdown timer at the top right corner will display the time remaining.</li>
                            <li>Question Palette on the right shows status of each question.</li>
                            <li>Clicking a question number navigates to it <strong>without saving</strong>.</li>
                            <li>You must click <strong>Save & Next</strong> to save an answer.</li>
                            <li><strong>Mark for Review</strong> saves the answer but marks it for later review.</li>
                            <li>To deselect, click the chosen option again or use <strong>Clear Response</strong>.</li>
                        </ul>

                        <div className="mt-6 bg-red-50 border border-red-100 rounded-lg p-3">
                            <h3 className="text-sm font-bold text-red-800 mb-2 flex items-center gap-2">
                                <ShieldAlert size={16} /> STRICT PROCTORING ENABLED
                            </h3>
                            <ul className="space-y-1.5 text-xs text-red-700">
                                <li className="flex items-start gap-1.5">
                                    <Eye size={12} className="mt-0.5 shrink-0" />
                                    <span><strong>Full Screen Enforced:</strong> Exiting full screen will be recorded as a violation.</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                    <Monitor size={12} className="mt-0.5 shrink-0" />
                                    <span><strong>Tab Switching Prohibited:</strong> Navigating away from the test window will terminate the exam.</span>
                                </li>
                                <li className="flex items-start gap-1.5">
                                    <AlertTriangle size={12} className="mt-0.5 shrink-0" />
                                    <span><strong>No External Devices:</strong> Use of other devices/books is strictly prohibited.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Col: Agreement & Action */}
                    <div className="w-full md:w-[350px] p-5 bg-slate-50 flex flex-col flex-shrink-0">
                        <div className="flex-1">
                            <h3 className="text-sm font-bold text-slate-900 mb-3">Declaration</h3>
                            <div className="text-xs text-slate-600 leading-relaxed border border-slate-200 bg-white p-3 rounded text-justify">
                                <p>I have read and understood all the instructions. I understand that any attempt to cheat, switch tabs, or exit full-screen mode will result in immediate disqualification.</p>
                                <p className="mt-2 text-slate-900 font-semibold">System Activity is being monitored.</p>
                            </div>
                        </div>

                        <div className="mt-auto space-y-4">
                            <div className="flex items-start space-x-2 bg-white p-3 rounded border border-slate-200">
                                <Checkbox
                                    id="terms"
                                    checked={agreed}
                                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                                    className="mt-0.5 data-[state=checked]:bg-blue-700 data-[state=checked]:border-blue-700"
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-xs font-medium leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-800"
                                >
                                    I am ready to begin. I agree to the proctoring terms.
                                </label>
                            </div>

                            <Button
                                onClick={handleStart}
                                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-6 text-base shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                disabled={!agreed}
                            >
                                START MOCK TEST
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Instructions;
