"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

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
        router.push("/home");
    };

    const passwordsDoNotMatch =
        password && confirmPassword && password !== confirmPassword;

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="text-center border-2 border-black rounded-lg px-16 max-sm:px-2">
                <h1 className="text-4xl font-bold py-10 max-sm:py-5">DealBank</h1>
                <h2 className="text-xl pt-10">Sign Up</h2>
                <p className="text-sm text-gray-500 py-5">
                    Please enter your email id and password to Sign Up
                </p>

                <form
                    onSubmit={handleSubmit(getLoginCredentials)}
                    className="flex flex-col items-center space-y-2"
                >
                    <input
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        placeholder="✉️ Email ID"
                        className="border-2 border-blue-600 rounded-xl p-2 w-80"
                    />
                    {errors.email && (
                        <div className="text-xs text-red-500">{errors.email.message}</div>
                    )}

                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password should be at least 8 characters long",
                            },
                            maxLength: {
                                value: 50,
                                message: "Password cannot exceed 50 characters",
                            },
                        })}
                        type="password"
                        placeholder="🔒 Password"
                        className="border-2 border-blue-600 rounded-xl p-2 w-80"
                    />
                    {errors.password && (
                        <div className="text-xs text-red-500">{errors.password.message}</div>
                    )}

                    <input
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                            validate: (value) =>
                                value === password || "Passwords do not match",
                        })}
                        type="password"
                        placeholder="🔒 Confirm Password"
                        className="border-2 border-blue-600 rounded-xl p-2 w-80"
                    />
                    {errors.confirmPassword && (
                        <div className="text-xs text-red-500">
                            {errors.confirmPassword.message}
                        </div>
                    )}

                    {passwordsDoNotMatch && (
                        <div className="text-xs text-red-500">
                            Confirm Password does not match with Password
                        </div>
                    )}

                    <div className="py-16 max-sm:py-8">
                        <button
                            type="submit"
                            className="py-2 rounded-full text-blue-600 border-4 border-blue-600 px-16 hover:bg-blue-600 hover:text-white"
                        >
                            Register
                        </button>

                        <div className="py-6">
                            <p className="text-sm text-gray-500 pt-5">
                                Already a DealBank member?
                            </p>
                            <Link
                                href="/login"
                                className="text-blue-500 text-sm hover:underline"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;