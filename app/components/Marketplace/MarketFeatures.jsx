import React from 'react';
import { motion } from 'framer-motion';
import {
    FaCheckCircle,
    FaTimesCircle,
    FaBolt,
    FaTint,
    FaRoad,
    FaIndustry,
    FaTrashAlt,
} from 'react-icons/fa';

// Define the FeatureRow component
const FeatureRow = ({ name, icon: Icon, selected }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, x: -20 },
            show: { opacity: 1, x: 0 },
        }}
        className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
    >
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                {Icon && <Icon className="w-5 h-5 text-blue-600" />}
                <span className="font-medium text-gray-700">{name}</span>
            </div>
            {selected ? (
                <FaCheckCircle className="w-5 h-5 text-green-500" />
            ) : (
                <FaTimesCircle className="w-5 h-5 text-gray-400" />
            )}
        </div>
    </motion.div>
);

// Define the Market_Features_Details_Page component
const Market_Features_Details_Page = () => {
    const features = [
        { name: 'Electricity', icon: FaBolt, selected: true },
        { name: 'Water Supply', icon: FaTint, selected: false },
        { name: 'Access Roads', icon: FaRoad, selected: false },
        { name: 'Sewage Systems', icon: FaIndustry, selected: true },
        { name: 'Waste Management Services', icon: FaTrashAlt, selected: false },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
            <div className="flex items-center space-x-2 mb-6">
                <FaCheckCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Market Features</h2>
            </div>

            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                        },
                    },
                }}
                initial="hidden"
                animate="show"
                className="space-y-3"
            >
                {features.map((feature) => (
                    <FeatureRow
                        key={feature.name}
                        name={feature.name}
                        icon={feature.icon}
                        selected={feature.selected}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Market_Features_Details_Page;