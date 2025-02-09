"use client";

import React, { useState } from "react";
import { AlertCircle, ArrowLeft, Mail, Shield, CheckCircle2, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ForgetPasswordPage = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setStatus("processing");
        setIsProcessing(true);

        try {
            if (!email || !/\S+@\S+\.\S+/.test(email)) {
                throw new Error("Please enter a valid email address");
            }

            const response = await fetch("/api/users/forget-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });

            const data = await response.json();
            console.log(data)

            if (response.ok) {
                if (data.verified === true) {
                    setStatus("success");
                    setMessage("Check your email for reset instructions!");
                    setTimeout(() => router.push(`/reset-password?email=${encodeURIComponent(email)}`), 2000);
                }
                
            } 
            else if (data.verified === false) {
                setStatus("error");
                setMessage("User is not verified. Please verify your email first.");
            }
            else if (response.status === 404) {
                setStatus("error");
                setMessage("User not found. Please Sign Up first.");
            }
        } catch (err) {
            setStatus("error");
            setMessage(err.message || "An unexpected error occurred");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4"
        >
            <Card className="w-full max-w-lg bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl relative">
                <button
                    onClick={() => router.back()}
                    className="absolute top-4 left-4 text-gray-600 hover:text-gray-900 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                </button>

                <motion.div 
                    initial={{ y: -20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                    className="space-y-6 text-center"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                        <Shield className="w-8 h-8 text-purple-600 animate-pulse" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Forgot Your Password?</h1>
                    <p className="text-sm text-gray-500">Enter your email to receive reset instructions.</p>

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
                        <button
                            type="submit"
                            disabled={isProcessing || status === "success"}
                            className={`w-full py-3 rounded-xl text-white font-medium transform hover:scale-[1.02] active:scale-[0.98] transition-all 
                            ${isProcessing ? "opacity-75 cursor-wait" : "hover:opacity-90"} 
                            ${status === "success" ? "bg-green-500" : "bg-gradient-to-r from-purple-600 to-pink-600"}`}
                        >
                            <span className="flex items-center justify-center gap-2">
                                {isProcessing ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle2 className="w-5 h-5" />
                                        Being Redirected in Secs!
                                    </>
                                ) : (
                                    "Send Reset Instructions"
                                )}
                            </span>
                        </button>
                    </form>

                    {status !== "idle" && (
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            {message && (
                                <Alert className={`${status === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                                    {status === "success" ? (
                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                    ) : (
                                        <AlertCircle className="w-4 h-4 text-red-600" />
                                    )}
                                    <AlertDescription className={`${status === "success" ? "text-green-800" : "text-red-800"}`}>
                                        {message}
                                    </AlertDescription>
                                </Alert>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </Card>
        </motion.div>
    );
};

export default ForgetPasswordPage;
