"use client";
import React from "react";
import { FaStore, FaRegComment } from "react-icons/fa";

const MarketForm = ({ register, errors }) => {
    return (
        <div className="p-8 mb-10 rounded-lg shadow-xl space-y-6">
            {/* Market Name */}
            <div className="mb-6">
                <label className="block text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FaStore className="text-purple-600" /> Market Name
                </label>
                <input
                    type="text"
                    {...register("name", { required: "Market name is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter Market Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Market Description */}
            <div className="mb-6">
                <label className="block text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FaRegComment className="text-purple-600" /> Market Description
                </label>
                <textarea
                    {...register("description", { required: "Market description is required" })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter Market Description"
                ></textarea>
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>
        </div>
    );
};

export default MarketForm;
