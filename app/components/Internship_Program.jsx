"use client";
import React from "react";
import { motion } from "framer-motion";


const InternshipProgram = () => {
    
    return (
        <div className="bg-gray-100 py-16 px-5 max-sm:py-5">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 max-sm:text-2xl text-center py-4 max-sm:py-1">Internship Programs</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Section with Background Image */}
                <motion.div
                    className="relative flex items-center justify-center bg-cover bg-center h-64 lg:h-auto rounded-lg shadow-md"
                    style={{
                        backgroundImage: "url('marketplace-image.jpeg')",
                    }}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-black bg-opacity-50 p-8 rounded-lg max-sm:p-4 max-sm:mx-4">
                        <h2 className="text-white text-2xl font-bold text-center max-sm:text-xl">
                            JOIN OUR EXCITING BDO PROGRAM.
                        </h2>
                    </div>
                </motion.div>

                {/* Right Section with Internship Details */}
                <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 max-sm:text-2xl">
                        Business Development Internship Opportunity
                    </h2>
                    <p className="text-gray-600 max-sm:text-sm">
                        We are seeking 1000+ highly motivated and detail-oriented business
                        development interns to join our team every month to collect and
                        update data on our platform. Interested?
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default InternshipProgram;
