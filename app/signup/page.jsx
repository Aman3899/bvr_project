"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Page = () => {
    const {
        register,
        watch,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const router = useRouter();

    // Watch the password and confirmPassword fields
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    const getLoginCredentials = async (data) => {
        console.log("Form Data:", data);
        console.log("Successfully Signed Up & Logged In!");
        router.push("/"); // Adjust the route if necessary
    };

    const passwordsDoNotMatch =
        password && confirmPassword && password !== confirmPassword;

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-24 -right-4"></div>
            <div className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 -bottom-8 left-20"></div>

            <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl px-8 py-10 max-w-md w-full m-6 relative transform transition-all duration-300 hover:scale-[1.02]">
                {/* Card hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-4 transform transition-all">
                    DealBank
                </h1>
                <h2 className="text-lg font-semibold text-gray-700 text-center mb-2">
                    Sign Up
                </h2>
                <p className="text-sm text-gray-500 text-center mb-8">
                    Please enter your email and password to sign up
                </p>

                <form
                    onSubmit={handleSubmit(getLoginCredentials)}
                    className="space-y-6"
                >
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
                            <span className="text-sm text-red-500 mt-1 block animate-fadeIn">{errors.email.message}</span>
                        )}
                    </div>

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
                            <span className="text-sm text-red-500 mt-1 block animate-fadeIn">{errors.password.message}</span>
                        )}
                    </div>

                    <div className="relative group">
                        <div className="absolute left-3 top-2.5 flex items-center justify-center w-6 h-6 pointer-events-none">
                            <FaLock className="h-5 w-5 text-blue-600 group-hover:text-blue-800 transition-colors duration-200" />
                        </div>
                        <input
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: (value) =>
                                    value === password || "Passwords do not match",
                            })}
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-white group-hover:border-blue-500"
                        />
                        {errors.confirmPassword && (
                            <span className="text-sm text-red-500 mt-1 block animate-fadeIn">
                                {errors.confirmPassword.message}
                            </span>
                        )}
                    </div>

                    {passwordsDoNotMatch && (
                        <div className="text-sm text-red-500 animate-fadeIn">
                            Confirm Password does not match with Password
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] mt-4"
                    >
                        Register
                    </button>
                </form>

                <div className="text-center mt-8 relative z-10">
                    <p className="text-sm text-gray-600">
                        Already a DealBank member?{" "}
                        <Link href="/login" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;