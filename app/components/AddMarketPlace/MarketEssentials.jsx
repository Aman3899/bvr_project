import React from 'react';
import { MdLanguage } from 'react-icons/md';
import { BiAccessibility } from 'react-icons/bi';
import { BsCalendarEvent } from 'react-icons/bs';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const MarketEssentials = ({ register, errors }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    };

    const selectVariants = {
        hover: { scale: 1.02 },
        tap: { scale: 0.98 }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <motion.h2 
                className="text-2xl font-bold mb-8 text-gray-800 flex items-center"
                variants={itemVariants}
            >
                <RiMoneyDollarCircleLine className="text-blue-600 mr-3 text-3xl" />
                Market Essentials
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                {[
                    {
                        label: "Market Type",
                        icon: <RiMoneyDollarCircleLine />,
                        name: "marketType",
                        options: ["Flea Market", "Wholesale", "Retail"]
                    },
                    {
                        label: "Mode of Transaction",
                        icon: <RiMoneyDollarCircleLine />,
                        name: "modeOFTransaction",
                        options: ["Cash", "Bidding", "Both"]
                    },
                    {
                        label: "Language",
                        icon: <MdLanguage />,
                        name: "language",
                        options: ["English", "Chichewa", "Both"]
                    },
                    {
                        label: "Accessibility",
                        icon: <BiAccessibility />,
                        name: "accessibility",
                        options: ["Good", "Difficult", "Very Easy"]
                    }
                ].map((field, index) => (
                    <motion.div
                        key={field.name}
                        variants={itemVariants}
                        className="relative"
                    >
                        <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2 group">
                            <motion.span 
                                className="text-blue-600 text-xl"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.3 }}
                            >
                                {field.icon}
                            </motion.span>
                            <span className="group-hover:text-blue-600 transition-colors">
                                {field.label}
                            </span>
                        </label>
                        <motion.select
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm"
                            variants={selectVariants}
                            whileHover="hover"
                            whileTap="tap"
                            {...register(field.name, { required: `${field.label} is required` })}
                        >
                            <option value="">Select {field.label}</option>
                            {field.options.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </motion.select>
                        <AnimatePresence>
                            {errors[field.name] && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-red-500 text-sm mt-1"
                                >
                                    {errors[field.name].message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}

                <motion.div 
                    className="relative md:col-span-2"
                    variants={itemVariants}
                >
                    <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2 group">
                        <motion.span 
                            className="text-blue-600 text-xl"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                        >
                            <BsCalendarEvent />
                        </motion.span>
                        <span className="group-hover:text-blue-600 transition-colors">
                            Special Days
                        </span>
                    </label>
                    <motion.select
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white shadow-sm"
                        variants={selectVariants}
                        whileHover="hover"
                        whileTap="tap"
                        {...register("specialDays", { required: "Special Days selection is required" })}
                    >
                        <option value="">Select Special Days</option>
                        {["Christmas", "New Year", "Easter", "Independence Day"].map(day => (
                            <option key={day} value={day}>{day}</option>
                        ))}
                    </motion.select>
                    <AnimatePresence>
                        {errors.specialDays && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-500 text-sm mt-1"
                            >
                                {errors.specialDays.message}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MarketEssentials;