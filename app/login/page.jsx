"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";



const ProcessingAlert = () => (
    <Alert className="border-blue-200 bg-blue-50 fixed top-4 right-4 w-80 animate-in fade-in slide-in-from-top-2">
        <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
        <AlertTitle className="text-blue-800 ml-2">Processing</AlertTitle>
        <AlertDescription className="text-blue-600 ml-2">
            Please wait while we verify your credentials...
        </AlertDescription>
    </Alert>
);

// Success Alert Dialog Component
const SuccessAlert = ({ isOpen, onClose, message }) => (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
        <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center text-green-700">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-green-600" />
                    Success
                </AlertDialogTitle>
                <AlertDialogDescription className="text-green-600">
                    {message}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogAction className="bg-green-600 text-white hover:bg-green-700">
                    Continue
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
);

// Error Alert Dialog Component
const ErrorAlert = ({ isOpen, onClose, message }) => (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
        <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center text-red-700">
                    <XCircle className="h-6 w-6 mr-2 text-red-600" />
                    Error
                </AlertDialogTitle>
                <AlertDialogDescription className="text-red-600">
                    {message}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogAction className="bg-red-600 text-white hover:bg-red-700">
                    Close
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
);

const Page = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const { register, formState: { errors }, handleSubmit } = useForm();
    const router = useRouter();

    const getLoginCredentials = async (data) => {
        setIsProcessing(true);

        data.email = data.email.trim().toLowerCase();

        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            setIsProcessing(false);

            if (!response.ok) {
                setAlertMessage(result.error || "Something went wrong. Please try again.");
                setShowError(true);
                return;
            }

            setAlertMessage(result.message || "Successfully Logged In!");
            setShowSuccess(true);
            setTimeout(() => {
                router.push("/"); // Redirect to the homepage after a brief delay
            }, 1500);
        } catch (error) {
            setIsProcessing(false);
            setAlertMessage("An unexpected error occurred. Please try again later.");
            setShowError(true);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10"></div>
            <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-24 -right-4 -z-10"></div>
            <div className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 -bottom-8 left-20 -z-10"></div>

            {/* Card Container */}
            <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl px-8 py-10 max-w-md w-full m-6 relative transform transition-all duration-300 hover:scale-[1.02]">
                {/* Card Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-4">
                    DealBank
                </h1>
                <h2 className="text-lg font-semibold text-gray-700 text-center mb-2">
                    Welcome Back
                </h2>
                <p className="text-sm text-gray-500 text-center mb-8">
                    Please enter your email and password to sign in
                </p>

                <form onSubmit={handleSubmit(getLoginCredentials)} className="space-y-6">
                    {/* Email Input */}
                    <div className="relative group">
                        <div className="absolute left-3 top-2.5 flex items-center justify-center w-6 h-6 pointer-events-none">
                            <FaEnvelope className="h-5 w-5 text-blue-600 group-hover:text-blue-800 transition-colors duration-200" />
                        </div>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Email ID"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white group-hover:border-blue-500"
                        />
                        {errors.email && (
                            <span className="text-sm text-red-500 mt-1 block animate-fadeIn">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="relative group">
                        <div className="absolute left-3 top-2.5 flex items-center justify-center w-6 h-6 pointer-events-none">
                            <FaLock className="h-5 w-5 text-blue-600 group-hover:text-blue-800 transition-colors duration-200" />
                        </div>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                            })}
                            type="password"
                            placeholder="Password"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white group-hover:border-blue-500"
                        />
                        {errors.password && (
                            <span className="text-sm text-red-500 mt-1 block animate-fadeIn">
                                {errors.password.message}
                            </span>
                        )}
                    </div>

                    <div className="text-right">
                        <Link
                            href="/forget-password"
                            className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 hover:underline font-medium"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={isProcessing}
                        className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl ${isProcessing
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02]"
                            } transition-all duration-300 mt-4`}
                    >
                        {isProcessing ? "Processing..." : "Sign In"}
                    </button>
                </form>

                <div className="text-center mt-8">
                    <p className="text-sm text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-200 hover:underline font-medium"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>

            {/* Alert Components */}
            {isProcessing && <ProcessingAlert />}
            <SuccessAlert
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                message={alertMessage}
            />
            <ErrorAlert
                isOpen={showError}
                onClose={() => setShowError(false)}
                message={alertMessage}
            />
        </div>
    );
};

export default Page;