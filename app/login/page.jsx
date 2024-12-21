"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Page = () => {
    const [isSent, setIsSent] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const router = useRouter();

    const getLoginCredentials = async (data) => {
        console.log(data);
        if (data.email === "admin@gmail.com" && data.password === "admin123") {
            console.log("Successfully Logged In!");
            router.push("/");
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
                            href="/forgetpassword"
                            className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 hover:underline font-medium"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] mt-4"
                    >
                        Sign In
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
        </div>
    );
};

export default Page;