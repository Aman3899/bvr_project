"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaUser,
    FaBox,
    FaCheckCircle,
    FaClock,
    FaChartLine,
    FaArrowRight
} from "react-icons/fa";
import Navbar from "../components/Navbar";

const PostRequestPage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const getStatusConfig = (index) => {
        const configs = {
            0: { color: "bg-emerald-500", label: "Active", icon: <FaCheckCircle size={14} /> },
            1: { color: "bg-gray-500", label: "Completed", icon: <FaBox size={14} /> },
            2: { color: "bg-red-500", label: "Expired", icon: <FaClock size={14} /> }
        };
        return configs[index];
    };

    return (
        <>
        <Navbar heading="Customer Dashboard" />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-48 py-6 mt-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6"
            >
                <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                    <h1 className="text-lg sm:text-2xl font-bold text-gray-900">
                        Customer Dashboard
                    </h1>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium flex items-center gap-2">
                        <FaUser size={14} />
                        Premium User
                    </span>
                </div>

                {/* Post Activity Section */}
                <section className="mb-8">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaChartLine className="text-cyan-500" />
                        Post Activity
                    </h2>

                    {["Request 1", "Request B", "Request A"].map((request, index) => (
                        <motion.div
                            key={index}
                            initial="initial"
                            animate="animate"
                            variants={fadeIn}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white shadow-sm border border-gray-100 rounded-xl p-4 mb-4 hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="flex flex-wrap justify-between items-center gap-4">
                                <div className="space-y-1 w-full sm:w-auto">
                                    <h3 className="text-gray-800 font-semibold flex items-center gap-2">
                                        {request}
                                        <span className="text-xs text-gray-500 font-normal">
                                            ID: #{(1000 + index).toString().padStart(4, "0")}
                                        </span>
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        <span className="font-medium">3</span> active bids
                                    </p>
                                </div>
                                <div className="flex gap-3 items-center w-full sm:w-auto">
                                    <span
                                        className={`px-3 py-1 rounded-full text-white text-sm flex items-center gap-1 ${getStatusConfig(index).color}`}
                                    >
                                        {getStatusConfig(index).icon}
                                        {getStatusConfig(index).label}
                                    </span>
                                    <button className="px-4 py-1 border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors duration-200 flex items-center gap-1">
                                        View Details
                                        <FaArrowRight size={12} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Subscription Plans Section */}
                <section className="mb-8">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaBox className="text-cyan-500" />
                        Subscription Plans
                    </h2>

                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 space-y-4">
                        {[
                            { label: "10 Posts - MWK 500", value: "10", desc: "Perfect for beginners" },
                            { label: "30 Posts - MWK 1000", value: "30", desc: "Most popular" },
                            { label: "50 Posts - MWK 1500", value: "50", desc: "Best value" }
                        ].map((plan, index) => (
                            <label
                                key={index}
                                className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="subscription"
                                    value={plan.value}
                                    className="w-4 h-4 text-cyan-500"
                                />
                                <div className="flex flex-col">
                                    <span className="text-gray-800 font-medium">{plan.label}</span>
                                    <span className="text-sm text-gray-500">{plan.desc}</span>
                                </div>
                                {plan.value === "30" && (
                                    <span className="ml-auto text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                                        Popular Choice
                                    </span>
                                )}
                            </label>
                        ))}
                    </div>
                </section>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link
                        href="/submit_request"
                        className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-3 px-4 sm:px-6 rounded-xl text-center font-medium shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:shadow-xl"
                    >
                        Submit New Request
                    </Link>
                    <Link
                        href="/"
                        className="bg-gray-50 hover:bg-gray-100 text-gray-700 py-3 px-4 sm:px-6 rounded-xl text-center font-medium transition-colors duration-200"
                    >
                        Manage Subscription
                    </Link>
                </div>
            </motion.div>
        </div>
        </>
    );
};

export default PostRequestPage;
