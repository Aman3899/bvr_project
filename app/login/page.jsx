"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Page = () => {
    const [isSent, setIsSent] = useState(false);

    const { register, formState: { errors }, handleSubmit } = useForm();
    let router = useRouter();

    const getLoginCredentials = async (data) => {
        console.log(data);
        if (data.email === "admin@gmail.com" && data.password === "admin123") {
            console.log("Successfully Logged In!");
            router.push("/home");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-500">
            <div className="bg-white shadow-lg rounded-lg px-10 py-12 max-w-md w-full sm:px-6">
                <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-6">
                    DealBank
                </h1>
                <h2 className="text-lg font-semibold text-gray-700 text-center mb-4">
                    Welcome Back
                </h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    Please enter your email and password to sign in
                </p>
                <form onSubmit={handleSubmit(getLoginCredentials)} className="space-y-5">
                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Email ID"
                            className="w-full border border-gray-300 rounded-lg pl-10 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                        {errors.email && (
                            <span className="text-sm text-red-500">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" />
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
                            className="w-full border border-gray-300 rounded-lg pl-10 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                        {errors.password && (
                            <span className="text-sm text-red-500">{errors.password.message}</span>
                        )}
                    </div>
                    <div className="text-right">
                        <Link
                            href="/forgetpassword"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 rounded-full hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-blue-500 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;