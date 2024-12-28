"use client";
import React from "react";
import { motion } from "framer-motion";

const HowWeDoIt = () => {
    const cardData = [
        {
            title: "Data Collection",
            description:
                "Our BDO’s collect data from their local market on product pricing, promotions, market features, logistics, politics, and other metadata using interviews and observation methods.",
        },
        {
            title: "Data Verification",
            description:
                "Our BDO’s sort this data into different categories, double-check its reliability to ensure high-quality information.",
        },
        {
            title: "Platform Updates",
            description:
                "Verified data is then updated on our platform, making it easily accessible to users.",
        },
        {
            title: "User Access",
            description:
                "Users can search, filter, and access the collected data, providing valuable insights into local markets. The cool part is it's totally free.",
        },
    ];

    return (
        <div className="bg-gray-100 py-16 px-5">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 max-sm:text-2xl">
                    How We Do It!
                </h2>
                <p className="text-lg text-gray-600 mb-16 max-sm:text-sm">
                    Dealbank has a network of Business Development Officers (BDO) based
                    in each market who perform the following functions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-sm:text-sm">
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                {card.title}
                            </h3>
                            <p className="text-gray-600">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowWeDoIt;
