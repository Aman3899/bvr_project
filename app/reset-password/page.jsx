"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, CheckCircle2, AlertCircle, Eye, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useForm } from "react-hook-form";

const UpdatePasswordPage = () => {
    const [showPassword, setShowPassword] = React.useState({
        old: false,
        new: false,
        confirm: false
    });
    const [status, setStatus] = React.useState('idle');
    const [error, setError] = React.useState("");
    
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
        },
        mode: "onChange"
    });

    const newPassword = watch("newPassword");

    const onSubmit = async (data) => {
        if (!email) {
            setError("Email not found in URL");
            setStatus('error');
            return;
        }

        setStatus('processing');
        try {
            const response = await fetch('/api/users/update-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    oldPassword: data.oldPassword,
                    newPassword: data.newPassword
                })
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setTimeout(() => router.push('/dashboard'), 2000);
            } else {
                setError(result.message || "Password update failed");
                setStatus('error');
            }
        } catch (err) {
            setError("Network error. Please try again.");
            setStatus('error');
        }
    };

    const togglePasswordVisibility = (field) => {
        setShowPassword(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
            <Card className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
                <div className="space-y-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                        <Lock className="w-8 h-8 text-purple-600" />
                    </div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                        Update Password
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="relative">
                            <input
                                type={showPassword.old ? "text" : "password"}
                                {...register("oldPassword", {
                                    required: "Current password is required"
                                })}
                                placeholder="Current Password"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('old')}
                                className="absolute right-3 top-3 text-gray-400"
                            >
                                {showPassword.old ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            {errors.oldPassword && (
                                <p className="text-red-500 text-sm mt-1 text-left">{errors.oldPassword.message}</p>
                            )}
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword.new ? "text" : "password"}
                                {...register("newPassword", {
                                    required: "New password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters"
                                    },
                                    maxLength: {
                                        value: 32,
                                        message: "Password cannot exceed 32 characters"
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                                        message: "Password must include uppercase, lowercase, number and special character"
                                    }
                                })}
                                placeholder="New Password"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('new')}
                                className="absolute right-3 top-3 text-gray-400"
                            >
                                {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            {errors.newPassword && (
                                <p className="text-red-500 text-sm mt-1 text-left">{errors.newPassword.message}</p>
                            )}
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword.confirm ? "text" : "password"}
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: value => 
                                        value === newPassword || "Passwords do not match"
                                })}
                                placeholder="Confirm New Password"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('confirm')}
                                className="absolute right-3 top-3 text-gray-400"
                            >
                                {showPassword.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1 text-left">{errors.confirmPassword.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'processing' || status === 'success'}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white disabled:opacity-50"
                        >
                            {status === 'processing' ? 'Updating...' : 
                             status === 'success' ? 'Password Updated!' : 
                             'Update Password'}
                        </button>
                    </form>

                    {status === 'success' && (
                        <Alert className="bg-green-50 border-green-200 mt-4">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <AlertDescription className="text-green-800">
                                Password updated successfully!
                            </AlertDescription>
                        </Alert>
                    )}

                    {status === 'error' && (
                        <Alert className="bg-red-50 border-red-200 mt-4">
                            <AlertCircle className="w-4 h-4 text-red-600" />
                            <AlertDescription className="text-red-800">
                                {error}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default UpdatePasswordPage;