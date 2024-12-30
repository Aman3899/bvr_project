"use client";
import React, { useState } from "react";
import { FaBackward } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const CustomerRequestDetails = () => {
    const [price, setPrice] = useState("");
    const [margin, setMargin] = useState("");
    const [deliveryDuration, setDeliveryDuration] = useState("");
    const [comments, setComments] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ price, margin, deliveryDuration, comments });
    };

    const requestedItems = [
        { name: "Organic Apples", quantity: "10 kg" },
        { name: "Free-range Eggs", quantity: "5 dozen" },
    ];

    let router = useRouter();

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
        <>
        <Navbar heading="Bidding" />
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-8 mt-20"
        >
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl">
                {/* Header with Back Button */}
                <div className="flex items-center border-b border-gray-200 mb-6 pb-4">
                    <button onClick={() => router.back()} className="text-lg text-gray-600 hover:text-gray-900">
                        <FaBackward />
                    </button>
                    <h2 className="flex-1 text-2xl font-semibold text-center text-gray-800 max-sm:text-lg">Customer Request Details</h2>
                </div>

                {/* Customer Comments */}
                <motion.div variants={inputVariants} className="mb-6">
                    <p className="text-sm text-gray-700">
                        Customer Comments: Please ensure all vegetables are fresh and organically certified. Delivery should be made in eco-friendly packaging.
                    </p>
                </motion.div>

                {/* Requested Items List */}
                <motion.div variants={inputVariants} className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Requested Items</h3>
                    <ul className="space-y-3">
                        {requestedItems.map((item, index) => (
                            <li key={item.name} className="flex justify-between py-2 border-b border-gray-200">
                                <span className="text-gray-700">{item.name}</span>
                                <span className="text-gray-500">{item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Seller Response Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div variants={inputVariants}>
                        <h3 className="text-lg font-semibold text-gray-800">Seller Response</h3>
                    </motion.div>

                    {/* Price Input */}
                    <motion.div variants={inputVariants} className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Price</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="$90"
                            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 bg-gray-50 focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                        />
                    </motion.div>

                    {/* Margin Input */}
                    <motion.div variants={inputVariants} className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Margin (Profit)</label>
                        <input
                            type="text"
                            value={margin}
                            onChange={(e) => setMargin(e.target.value)}
                            placeholder="15%"
                            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 bg-gray-50 focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                        />
                    </motion.div>

                    {/* Delivery Duration Input */}
                    <motion.div variants={inputVariants} className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Duration</label>
                        <input
                            type="text"
                            value={deliveryDuration}
                            onChange={(e) => setDeliveryDuration(e.target.value)}
                            placeholder="2 days"
                            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 bg-gray-50 focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                        />
                    </motion.div>

                    {/* Additional Comments */}
                    <motion.div variants={inputVariants} className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Comments</label>
                        <textarea
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            placeholder="All items are fresh."
                            className="w-full p-3 border border-gray-300 rounded-md text-gray-700 bg-gray-50 focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                        ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                        <button
                            type="submit"
                            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:bg-purple-700 transition-all duration-300"
                        >
                            Submit Bid
                        </button>
                    </motion.div>

                    {/* Cancel Button */}
                    <div className="text-center">
                        <button
                            type="button"
                            className="w-full py-3 bg-gray-200 text-gray-700 font-semibold rounded-md mt-4"
                        >
                            Cancel
                        </button>
                    </div>
                </form>

                {/* Summary */}
                <motion.div variants={inputVariants} className="mt-6 text-sm text-gray-700">
                    <p>Summary: Your proposed price is ${price || 90} with a {margin || "15%"} profit margin. Delivery will be made within {deliveryDuration || "2 days"}. Additional comments: {comments || "All items are fresh."}</p>
                </motion.div>
            </div>
        </motion.div>
        </>
    );
};

export default CustomerRequestDetails;
