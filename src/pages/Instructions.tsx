import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPaperById } from "@/data/papers";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertCircle, Clock, FileText, CheckCircle2, AlertTriangle, GraduationCap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Instructions = () => {
    const { paperId } = useParams();
    const navigate = useNavigate();
    const [agreed, setAgreed] = useState(false);
    const paper = paperId ? getPaperById(paperId) : undefined;

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            // Redirect to login with return url
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
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 text-center">
                    <div className="mx-auto bg-slate-900 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                        <GraduationCap size={28} />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Examination Instructions</h1>
                    <p className="mt-2 text-slate-600">Please read the following instructions carefully before proceeding.</p>
                </div>

                <Card className="border-slate-200 shadow-md">
                    <CardHeader className="bg-slate-50 border-b border-slate-200 pb-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <CardTitle className="text-xl font-bold text-slate-900">{paper.config.title}</CardTitle>
                                <CardDescription className="text-slate-500 mt-1">{paper.config.subject}</CardDescription>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="bg-white px-3 py-1.5 rounded border border-slate-200 flex items-center gap-2 text-slate-700 shadow-sm">
                                    <Clock size={16} className="text-slate-500" />
                                    <span className="font-semibold">{paper.config.durationMinutes} Minutes</span>
                                </div>
                                <div className="bg-white px-3 py-1.5 rounded border border-slate-200 flex items-center gap-2 text-slate-700 shadow-sm">
                                    <FileText size={16} className="text-slate-500" />
                                    <span className="font-semibold">{paper.config.totalQuestions} Questions</span>
                                </div>
                                <div className="bg-white px-3 py-1.5 rounded border border-slate-200 flex items-center gap-2 text-slate-700 shadow-sm">
                                    <CheckCircle2 size={16} className="text-green-600" />
                                    <span className="font-semibold">+{paper.config.correctMarks} Correct</span>
                                </div>
                                <div className="bg-white px-3 py-1.5 rounded border border-slate-200 flex items-center gap-2 text-slate-700 shadow-sm">
                                    <AlertTriangle size={16} className="text-red-600" />
                                    <span className="font-semibold">{paper.config.wrongMarks} Incorrect</span>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-8 pb-8 px-6 md:px-10 space-y-8">

                        <section>
                            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="bg-slate-100 text-slate-700 w-6 h-6 rounded flex items-center justify-center text-sm border border-slate-200">1</span>
                                General Instructions
                            </h3>
                            <ul className="space-y-3 text-slate-700 text-sm leading-relaxed ml-2 border-l-2 border-slate-100 pl-4">
                                <li>The examination will comprise of Objective Type Multiple Choice Questions (MCQs).</li>
                                <li>All questions are compulsory. There is no choice in any of the questions.</li>
                                <li>The server will set the clock. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination.</li>
                                <li>When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
                                <li>The Question Palette displayed on the right side of screen will show the status of each question using color codes.</li>
                            </ul>
                        </section>

                        <Separator />

                        <section>
                            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="bg-slate-100 text-slate-700 w-6 h-6 rounded flex items-center justify-center text-sm border border-slate-200">2</span>
                                Navigating to a Question
                            </h3>
                            <ul className="space-y-3 text-slate-700 text-sm leading-relaxed ml-2 border-l-2 border-slate-100 pl-4">
                                <li>Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.</li>
                                <li>Click on <strong>Save & Next</strong> to save your answer for the current question and then go to the next question.</li>
                                <li>Click on <strong>Mark for Review & Next</strong> to save your answer for the current question, mark it for review, and then go to the next question.</li>
                            </ul>
                        </section>

                        <Separator />

                        <section>
                            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="bg-slate-100 text-slate-700 w-6 h-6 rounded flex items-center justify-center text-sm border border-slate-200">3</span>
                                Answering a Question
                            </h3>
                            <ul className="space-y-3 text-slate-700 text-sm leading-relaxed ml-2 border-l-2 border-slate-100 pl-4">
                                <li>To select your answer, click on the button of one of the options.</li>
                                <li>To deselect your chosen answer, click on the button of the chosen option again or click on the <strong>Clear Response</strong> button.</li>
                                <li>To change your chosen answer, click on the button of another option.</li>
                                <li>To save your answer, you MUST click on the <strong>Save & Next</strong> button.</li>
                                <li>To mark the question for review, click on the <strong>Mark for Review & Next</strong> button.</li>
                            </ul>
                        </section>

                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 mt-6">
                            <AlertCircle className="text-amber-600 flex-shrink-0" size={20} />
                            <div className="text-sm text-amber-900">
                                <p className="font-semibold mb-1">Declaration:</p>
                                <p>I have read and understood the instructions. I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future tests / examinations.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 pt-4">
                            <Checkbox
                                id="terms"
                                checked={agreed}
                                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                                className="data-[state=checked]:bg-slate-900 data-[state=checked]:border-slate-900"
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700"
                            >
                                I am ready to begin the examination
                            </label>
                        </div>

                        <Button
                            onClick={handleStart}
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-6 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            disabled={!agreed}
                        >
                            Start Examination
                        </Button>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Instructions;
