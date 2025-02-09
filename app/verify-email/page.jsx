"use client";
import React, { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Mail, RefreshCw, CheckCircle2, Timer, AlertCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";


const VerifyEmailPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [isProcessing, setIsProcessing] = useState(false);
    const [status, setStatus] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [canResend, setCanResend] = useState(true);

    // Countdown timer for resend cooldown
    useEffect(() => {
        if (!canResend && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
        if (timeLeft === 0) {
            setCanResend(true);
        }
    }, [canResend, timeLeft]);

    const handleResend = async () => {
        setIsProcessing(true);
        setCanResend(false);
        setTimeLeft(60);

        // Simulate API call for resend email (you may adjust this for actual resend functionality)
        setTimeout(() => {
            setIsProcessing(false);
            setStatus("success");
        }, 1500);
    };

    // Function to handle verification via the backend
    const handleVerifyEmail = async () => {
        try {
            setIsProcessing(true);

            const response = await fetch("/api/users/verify-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token: token }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus(data.error || "An error occurred");
            }
        } catch (error) {
            setStatus("Error: " + error.message);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-4">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-blue-400/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute w-96 h-96 bg-indigo-400/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute w-96 h-96 bg-purple-400/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>

            <Card className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
                <div className="space-y-6">
                    <div className="text-center space-y-4">
                        <button
                            onClick={() => router.back()}
                            className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-4 relative">
                            <Mail className="w-10 h-10 text-blue-600" />
                            <div className="absolute inset-0 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin-slow" />
                        </div>
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Check Your Email
                        </h1>
                        <p className="text-gray-600">
                            We&apos;ve sent a verification link to your email address. Please check your inbox and click the link to verify your account.
                        </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl space-y-3">
                        <h3 className="text-sm font-medium text-blue-800 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            Important Information
                        </h3>
                        <ul className="text-sm text-blue-700 space-y-2">
                            <li className="flex items-start gap-2">
                                <Timer className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>The verification link will expire in 24 hours</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>Check your spam folder if you don&apos;t see our email</span>
                            </li>
                        </ul>
                    </div>

                    <button
                        onClick={handleVerifyEmail}
                        disabled={isProcessing}
                        className={`w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium
                            transform hover:scale-[1.02] active:scale-[0.98] transition-all
                            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                            group relative overflow-hidden`}
                    >
                        <span className="flex items-center justify-center gap-2">
                            {isProcessing ? (
                                <>
                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                <CheckCircle2 className="w-5 h-5" />
                            )}
                            Verify Email
                        </span>
                    </button>

                    {status && (
                        <Alert className={`bg-${status === "success" ? "green" : "red"}-50 border-${status === "success" ? "green" : "red"}-200`}>
                            {status === "success" ? (
                                <>
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                    <AlertDescription className="text-green-800">
                                        Email verified successfully!
                                    </AlertDescription>
                                </>
                            ) : (
                                <>
                                    <AlertCircle className="w-4 h-4 text-red-600" />
                                    <AlertDescription className="text-red-800">
                                        {status}
                                    </AlertDescription>
                                </>
                            )}
                        </Alert>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default VerifyEmailPage;