import React from 'react';
import { MdLanguage } from 'react-icons/md';
import { BiAccessibility } from 'react-icons/bi';
import { BsCalendarEvent } from 'react-icons/bs';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const MarketEssentials = ({
    marketType,
    setMarketType,
    transactionMode,
    setTransactionMode,
    language,
    setLanguage,
    accessibility,
    setAccessibility,
    specialDays,
    setSpecialDays,
    inputStyle,
    labelStyle
}) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                <RiMoneyDollarCircleLine className="text-blue-600 mr-2" />
                Market Essentials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Market Type */}
                <motion.div 
                    initial={{ y: -10, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                >
                    <label className={labelStyle}>
                        <div className="flex items-center space-x-2">
                            <RiMoneyDollarCircleLine className="text-blue-600" />
                            <span>Market Type</span>
                        </div>
                    </label>
                    <select
                        className={inputStyle}
                        value={marketType}
                        onChange={(e) => setMarketType(e.target.value)}
                    >
                        <option value="">Select Type</option>
                        <option value="Flea Market">Flea Market</option>
                        <option value="Wholesale">Wholesale</option>
                        <option value="Retail">Retail</option>
                    </select>
                </motion.div>

                {/* Transaction Mode */}
                <motion.div 
                    initial={{ y: -10, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <label className={labelStyle}>
                        <div className="flex items-center space-x-2">
                            <RiMoneyDollarCircleLine className="text-blue-600" />
                            <span>Mode of Transaction</span>
                        </div>
                    </label>
                    <select
                        className={inputStyle}
                        value={transactionMode}
                        onChange={(e) => setTransactionMode(e.target.value)}
                    >
                        <option value="">Select Mode</option>
                        <option value="Cash">Cash</option>
                        <option value="Bidding">Bidding</option>
                        <option value="Both">Both</option>
                    </select>
                </motion.div>

                {/* Language */}
                <motion.div 
                    initial={{ y: -10, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                >
                    <label className={labelStyle}>
                        <div className="flex items-center space-x-2">
                            <MdLanguage className="text-blue-600" />
                            <span>Language</span>
                        </div>
                    </label>
                    <select
                        className={inputStyle}
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="">Select Language</option>
                        <option value="English">English</option>
                        <option value="Chichewa">Chichewa</option>
                        <option value="Both">Both</option>
                    </select>
                </motion.div>

                {/* Accessibility */}
                <motion.div 
                    initial={{ y: -10, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                >
                    <label className={labelStyle}>
                        <div className="flex items-center space-x-2">
                            <BiAccessibility className="text-blue-600" />
                            <span>Accessibility</span>
                        </div>
                    </label>
                    <select
                        className={inputStyle}
                        value={accessibility}
                        onChange={(e) => setAccessibility(e.target.value)}
                    >
                        <option value="">Select Accessibility</option>
                        <option value="Good">Good</option>
                        <option value="Difficult">Difficult</option>
                        <option value="Very Easy">Very Easy</option>
                    </select>
                </motion.div>

                {/* Special Days */}
                <motion.div 
                    initial={{ y: -10, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative md:col-span-2"
                >
                    <label className={labelStyle}>
                        <div className="flex items-center space-x-2">
                            <BsCalendarEvent className="text-blue-600" />
                            <span>Special Days</span>
                        </div>
                    </label>
                    <select
                        className={inputStyle}
                        value={specialDays}
                        onChange={(e) => setSpecialDays(e.target.value)}
                    >
                        <option value="">Select Special Days</option>
                        <option value="Christmas">Christmas</option>
                        <option value="New Year">New Year</option>
                        <option value="Easter">Easter</option>
                        <option value="Independence Day">Independence Day</option>
                    </select>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MarketEssentials;
