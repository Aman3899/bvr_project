"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaCheckCircle } from 'react-icons/fa';

const MarketOperatingHoursAndStatus = ({ register, errors }) => {

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full max-w-4xl mx-auto p-1"
        >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl p-6 space-y-8">
                {/* Operating Hours Section */}
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-yellow-500 rounded-lg">
                        <FaClock className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Operating Hours</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium mb-1">Start Time</label>
                        <input
                            type="time"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            {...register("operatingHours.start", { required: "Start time is required" })}
                        />
                        {errors.operatingHours?.start && <p className="text-red-500 text-xs mt-1">{errors.operatingHours.start.message}</p>}
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1">End Time</label>
                        <input
                            type="time"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            {...register("operatingHours.end", { required: "End time is required" })}
                        />
                        {errors.operatingHours?.end && <p className="text-red-500 text-xs mt-1">{errors.operatingHours.end.message}</p>}
                    </div>
                </div>

                {/* Open/Closed Status Section */}
                <div className="flex items-center gap-3 mt-6">
                    <div className="p-3 bg-green-500 rounded-lg">
                        <FaCheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Market Status</h2>
                </div>

                <div className="flex gap-4 mt-4">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            value="Open"
                            className="form-radio text-blue-500 focus:ring-blue-400"
                            {...register("marketStatus", { required: "Market status is required" })}
                        />
                        <span className="ml-2 text-sm">Open</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            value="Closed"
                            className="form-radio text-red-500 focus:ring-red-400"
                            {...register("marketStatus", { required: "Market status is required" })}
                        />
                        <span className="ml-2 text-sm">Closed</span>
                    </label>
                </div>
                {errors.marketStatus && <p className="text-red-500 text-xs mt-1">{errors.marketStatus.message}</p>}
            </div>
        </motion.div>
    );
};

export default MarketOperatingHoursAndStatus;