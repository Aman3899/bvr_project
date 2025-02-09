"use client";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons

const SearchFilters = () => {

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center py-7 space-y-4 sm:space-y-0 sm:space-x-5 mt-7">
            {/* Stylish Search Bar */}
            <motion.div
                className="relative w-full mx-auto"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center relative">
                    <span className="absolute left-3 text-gray-400">
                        <FaSearch />
                    </span>
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 hover:shadow-lg transition-all duration-300 text-gray-700"
                    />
                </div>
                {/* Animated Underline Effect */}
                <motion.div
                    className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileFocus={{ width: "100%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                />
            </motion.div>

            {/* Filters */}
            <motion.div
                className="flex space-x-4 mt-4 sm:mt-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {["Fresh", "Dry", "Packaged"].map((filter, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-blue-500 font-medium px-4 py-2 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                        {filter}
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
};

export default SearchFilters;