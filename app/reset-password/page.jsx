"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Lock, ArrowLeft, Eye, EyeOff, CheckCircle2, AlertCircle, Shield } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";


const ResetPasswordPage = () => {

    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    const searchParams = useSearchParams()
    const email = searchParams.get("email");

    const checkPasswordStrength = (pass) => {
        let strength = 0;
        if (pass.length >= 8) strength++;
        if (/[A-Z]/.test(pass)) strength++;
        if (/[0-9]/.test(pass)) strength++;
        if (/[^A-Za-z0-9]/.test(pass)) strength++;
        setPasswordStrength(strength);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordStrength(newPassword);
        if (confirmPassword && confirmPassword !== newPassword) {
            setError("Passwords do not match");
        } else {
            setError(null);
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPass = e.target.value;
        setConfirmPassword(confirmPass);
        if (password && password !== confirmPass) {
            setError("Passwords do not match");
        } else {
            setError(null);
        }
    };

    const handleReset = () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if (passwordStrength < 3) {
            setError("Password is not strong enough");
            return;
        }

        setError(null);
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            setShowSuccess(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 p-4">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-green-400/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute w-96 h-96 bg-teal-400/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute w-96 h-96 bg-blue-400/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>

            <Card className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
                <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center space-y-4 relative">
                        <button
                            onClick={() => router.back()}
                            className="absolute -left-4 -top-4 p-2 text-gray-600 hover:text-gray-900 transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-blue-100 mb-2">
                            <Shield className="w-8 h-8 text-teal-600 animate-pulse" />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                                Reset Password
                            </h1>
                            <p className="text-sm text-gray-600">
                                Reset password for <span className="font-medium">{email}</span>
                            </p>
                        </div>
                    </div>

                    {/* Password requirements */}
                    <div className="bg-blue-50 p-4 rounded-xl space-y-2 max-sm:hidden">
                        <h3 className="text-sm font-medium text-blue-800 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" />
                            Password Requirements
                        </h3>
                        <ul className="text-xs text-blue-700 space-y-1">
                            <li className={`flex items-center gap-2 ${password.length >= 8 ? 'text-green-600' : ''}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${password.length >= 8 ? 'bg-green-500' : 'bg-blue-400'}`} />
                                Minimum 8 characters
                            </li>
                            <li className={`flex items-center gap-2 ${/[A-Z]/.test(password) ? 'text-green-600' : ''}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${/[A-Z]/.test(password) ? 'bg-green-500' : 'bg-blue-400'}`} />
                                At least one uppercase letter
                            </li>
                            <li className={`flex items-center gap-2 ${/[0-9]/.test(password) ? 'text-green-600' : ''}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${/[0-9]/.test(password) ? 'bg-green-500' : 'bg-blue-400'}`} />
                                At least one number
                            </li>
                            <li className={`flex items-center gap-2 ${/[^A-Za-z0-9]/.test(password) ? 'text-green-600' : ''}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${/[^A-Za-z0-9]/.test(password) ? 'bg-green-500' : 'bg-blue-400'}`} />
                                At least one special character
                            </li>
                        </ul>
                    </div>

                    {/* Password strength indicator */}
                    <div className="space-y-2">
                        <div className="flex gap-1">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i < passwordStrength
                                        ? [
                                            'bg-red-500',
                                            'bg-orange-500',
                                            'bg-yellow-500',
                                            'bg-green-500'
                                        ][passwordStrength - 1]
                                        : 'bg-gray-200'
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-xs text-gray-500 text-center">
                            {passwordStrength === 0 && "Enter password"}
                            {passwordStrength === 1 && "Weak password"}
                            {passwordStrength === 2 && "Fair password"}
                            {passwordStrength === 3 && "Good password"}
                            {passwordStrength === 4 && "Strong password"}
                        </p>
                    </div>

                    {/* Input fields */}
                    <div className="space-y-4">
                        <div className="relative">
                            <label className="text-sm font-medium text-gray-600 mb-1 block">New Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={handlePasswordChange}
                                className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-10 text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        <div className="relative">
                            <label className="text-sm font-medium text-gray-600 mb-1 block">Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* Error message */}
                    {error && (
                        <Alert variant="destructive" className="bg-red-50 border-red-200">
                            <AlertCircle className="w-4 h-4" />
                            <AlertDescription className="text-red-800">{error}</AlertDescription>
                        </Alert>
                    )}

                    {/* Reset Button */}
                    <button
                        onClick={handleReset}
                        disabled={!password || !confirmPassword || isProcessing}
                        className={`w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium
              transform hover:scale-[1.02] active:scale-[0.98] transition-all
              disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
              flex items-center justify-center gap-2`}
                    >
                        {isProcessing ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                <Lock className="w-5 h-5" />
                                Reset Password
                            </>
                        )}
                    </button>
                </div>
            </Card>

            {/* Success Dialog */}
            <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
                <AlertDialogContent className="bg-white/95 backdrop-blur-sm">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2 text-green-600">
                            <CheckCircle2 className="w-5 h-5" />
                            Password Reset Successful
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-600">
                            Your password has been successfully reset. You can now log in with your new password.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogAction
                        onClick={() => router.push("/login")}
                        className="bg-gradient-to-r from-green-600 to-blue-600 text-white hover:opacity-90"
                    >
                        Continue to Login
                    </AlertDialogAction>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};


export default dynamic(() => Promise.resolve(ResetPasswordPage), {
    ssr: false,
});