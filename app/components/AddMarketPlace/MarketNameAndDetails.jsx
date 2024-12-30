"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaRegComment } from 'react-icons/fa';

const MarketForm = ({ marketName, marketDescription, setMarketName, setMarketDescription }) => {
    
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const inputVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    };

    const buttonVariants = {
        hover: { scale: 1.05, backgroundColor: '#4C51BF', transition: { duration: 0.3 } },
        tap: { scale: 0.98, backgroundColor: '#434190', transition: { duration: 0.2 } },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="p-8 mb-10 rounded-lg shadow-xl space-y-6"
        >
            {/* Market Name */}
            <motion.div variants={inputVariants} className="mb-6">
                <label className="block text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FaStore className="text-purple-600" /> Market Name
                </label>
                <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    placeholder="Lilongwe Market"
                    value={marketName}
                    onChange={(e) => setMarketName(e.target.value)}
                />
            </motion.div>

            {/* Market Description */}
            <motion.div variants={inputVariants} className="mb-6">
                <label className="block text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FaRegComment className="text-purple-600" /> Market Description
                </label>
                <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    placeholder="A Bustling Market in the heart of Lilongwe."
                    value={marketDescription}
                    onChange={(e) => setMarketDescription(e.target.value)}
                ></textarea>
            </motion.div>
        </motion.div>
    );
};

export default MarketForm;