"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import AlertDialog from "../components/User/AlertDialogssss";

const Page = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const password = watch("password");
    const confirmPassword = watch("confirmPassword");
    const passwordsDoNotMatch =
        password && confirmPassword && password !== confirmPassword;

    const [alert, setAlert] = useState({
        open: false,
        type: "loading",
        message: "",
    });

    const closeAlert = () =>
        setAlert({ open: false, type: "", message: "" });

    const getLoginCredentials = async (data) => {
        setAlert({
            open: true,
            type: "loading",
            message: "Processing your request...",
        });

        try {
            const response = await fetch("/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setAlert({
                    open: true,
                    type: "success",
                    message: result.message,
                });
                setTimeout(() => {
                    closeAlert();
                    router.push("/login");
                }, 2000); // Redirect after success
            } else {
                setAlert({
                    open: true,
                    type: "error",
                    message: result.message,
                });
            }
        } catch (error) {
            setAlert({
                open: true,
                type: "error",
                message:
                    "An internal server error occurred. Please try again later.",
            });
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-24 -right-4"></div>
            <div className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 -bottom-8 left-20"></div>

            <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl px-8 py-10 max-sm:py-6 max-w-md w-full m-6 relative transform transition-all duration-300 hover:scale-[1.02]">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-4 transform transition-all">
                    DealBank
                </h1>
                <h2 className="text-lg font-semibold text-gray-700 text-center mb-2">
                    Sign Up
                </h2>
                <form
                    onSubmit={handleSubmit(getLoginCredentials)}
                    className="space-y-6"
                >
                    {/* Username input */}
                    <div className="relative group">
                        <FaUser className="absolute left-3 top-3 text-blue-600" />
                        <input
                            {...register("username", {
                                required: "Username is required",
                            })}
                            type="text"
                            placeholder="Username"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        {errors.username && (
                            <span className="text-red-500">
                                {errors.username.message}
                            </span>
                        )}
                    </div>
                    {/* Email input */}
                    <div className="relative group">
                        <FaEnvelope className="absolute left-3 top-3 text-blue-600" />
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address",
                                },
                            })}
                            type="email"
                            placeholder="Email"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        {errors.email && (
                            <span className="text-red-500">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    {/* Password input */}
                    <div className="relative group">
                        <FaLock className="absolute left-3 top-3 text-blue-600" />
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Password must be at least 8 characters long",
                                },
                            })}
                            type="password"
                            placeholder="Password"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        {errors.password && (
                            <span className="text-red-500">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    {/* Confirm Password input */}
                    <div className="relative group">
                        <FaLock className="absolute left-3 top-3 text-blue-600" />
                        <input
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                            })}
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                        {passwordsDoNotMatch && (
                            <span className="text-red-500">
                                Passwords do not match
                            </span>
                        )}
                        {errors.confirmPassword && (
                            <span className="text-red-500">
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl"
                    >
                        Register
                    </button>
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-blue-500 hover:underline"
                        >
                            Login here
                        </Link>
                    </p>
                </form>
            </div>

            {/* Alert Dialog */}
            <AlertDialog {...alert} onClose={closeAlert} />
        </div>
    );
};

export default Page;
