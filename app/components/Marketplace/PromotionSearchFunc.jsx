"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Percent, TrendingUp, ChevronDown } from 'lucide-react';


const PromotionsSearchFunc = () => {
    const [selectedFilter, setSelectedFilter] = useState('latest-promos');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filters = [
        { value: 'latest-promos', label: 'Latest Promos', icon: TrendingUp },
        { value: 'deals', label: 'Deals', icon: Tag },
        { value: 'discounts', label: 'Discounts', icon: Percent },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 m-4 max-sm:mx-3 mb-10"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 mb-4"
            >
                <Tag className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-800">Promotions</h2>
            </motion.div>

            <div className="border-t border-gray-200 pt-4">
                {/* Title and Description */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                >
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        Exclusive Deals and Discounts!
                    </h3>
                    <p className="text-gray-600 max-sm:text-sm">
                        Discover amazing savings and special offers customized just for you.
                    </p>
                </motion.div>

                {/* Custom Dropdown */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Choose Promotion Type
                    </label>
                    <div className="relative">
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-3 text-left hover:bg-gray-100 transition-colors"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <div className="flex items-center space-x-2">
                                {filters.find(f => f.value === selectedFilter)?.icon &&
                                    React.createElement(filters.find(f => f.value === selectedFilter)?.icon, {
                                        className: "w-5 h-5 text-blue-600"
                                    })
                                }
                                <span className="text-gray-800">
                                    {filters.find(f => f.value === selectedFilter)?.label}
                                </span>
                            </div>
                            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </motion.button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
                            >
                                {filters.map((filter) => (
                                    <motion.button
                                        key={filter.value}
                                        whileHover={{ backgroundColor: '#F3F4F6' }}
                                        className="w-full flex items-center space-x-2 px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                                        onClick={() => {
                                            setSelectedFilter(filter.value);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        <filter.icon className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-800">{filter.label}</span>
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: '#1E40AF' }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center space-x-2 bg-blue-600 text-white rounded-lg py-3 px-4 font-semibold shadow-md hover:shadow-lg transition-all"
                    >
                        <Tag className="w-5 h-5" />
                        <span>View Deals</span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: '#1E40AF' }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center space-x-2 bg-blue-600 text-white rounded-lg py-3 px-4 font-semibold shadow-md hover:shadow-lg transition-all"
                    >
                        <Percent className="w-5 h-5" />
                        <span>View Discounts</span>
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PromotionsSearchFunc;