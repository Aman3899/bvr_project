"use client";

import React, { useState } from "react";
import { AlertCircle, ArrowLeft, Mail, Shield, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";


const ForgetPasswordPage = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState(null);
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            setStatus("success");
            router.push("/reset-password?email=" + email);
        }, 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -top-10 -left-10" />
                <div className="absolute w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse top-1/2 left-1/2" />
                <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -bottom-10 -right-10" />
            </div>

            <Card className="w-full max-w-md relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
                {/* Back button */}
                <button
                    onClick={() => router.back()} // Wrap in an arrow function
                    className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                </button>


                <div className="space-y-6">
                    {/* Header with icon */}
                    <div className="text-center space-y-2">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                            <Shield className="w-8 h-8 text-purple-600 animate-pulse" />
                        </div>
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            Forgot Your Password?
                        </h1>
                        <p className="text-sm text-gray-500">
                            No worries! Enter your email and we&apos;ll send you reset instructions.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        {/* Security tips */}
                        <div className="bg-purple-50 p-4 rounded-xl space-y-2">
                            <h3 className="text-sm font-medium text-purple-800 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                Security Tips
                            </h3>
                            <ul className="text-xs text-purple-600 space-y-1 list-disc pl-4">
                                <li>Check your spam folder if you don&apos;t see our email</li>
                                <li>The reset link will expire in 30 minutes</li>
                                <li>Make sure to use a strong password when resetting</li>
                            </ul>
                        </div>

                        <button
                            type="submit"
                            disabled={isProcessing || status === "success"}
                            className={`w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium 
                transform hover:scale-[1.02] active:scale-[0.98] transition-all
                ${isProcessing ? "opacity-75 cursor-wait" : "hover:opacity-90"}
                ${status === "success" ? "bg-green-500" : ""}`}
                        >
                            <span className="flex items-center justify-center gap-2">
                                {status === "success" ? (
                                    <>
                                        <CheckCircle2 className="w-5 h-5" />
                                        Email Sent!
                                    </>
                                ) : isProcessing ? (
                                    <>
                                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Reset Instructions"
                                )}
                            </span>
                        </button>
                    </form>

                    {/* Status messages */}
                    {status === "success" && (
                        <Alert className="bg-green-50 border-green-200">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <AlertDescription className="text-green-800">
                                Check your email for password reset instructions!
                            </AlertDescription>
                        </Alert>
                    )}
                    {error && (
                        <Alert className="bg-red-50 border-red-200">
                            <AlertCircle className="w-4 h-4 text-red-600" />
                            <AlertDescription className="text-red-800">{error}</AlertDescription>
                        </Alert>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default ForgetPasswordPage;