"use client";
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons

const SearchFilters = () => {
    
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center py-7 space-y-4 sm:space-y-0 sm:space-x-5">
            {/* Search Engine */}
            <motion.div
                className="flex justify-between items-center w-full max-sm:w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center w-full border border-gray-300 rounded-lg shadow-lg">
                    <div className="p-3 text-gray-400">
                        <FaSearch /> {/* Search icon inside the input field */}
                    </div>
                    <input
                        type="text"
                        placeholder="Search for products"
                        className="flex-grow p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <motion.button
                    className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-lg hover:scale-105 ml-4 max-sm:px-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Search
                </motion.button>
            </motion.div>
            
            {/* Filters (Optional Section) */}
            <motion.div
                className="flex space-x-4 mt-4 sm:mt-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <button className="text-blue-500 font-medium px-4 py-2 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out">
                    Fresh
                </button>
                <button className="text-blue-500 font-medium px-4 py-2 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out">
                    Dry
                </button>
                <button className="text-blue-500 font-medium px-4 py-2 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out">
                    Packaged
                </button>
            </motion.div>
        </div>
    );
};

export default SearchFilters;