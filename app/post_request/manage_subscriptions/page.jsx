"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaBox,
    FaCrown,
    FaTrash,
    FaInfoCircle
} from 'react-icons/fa';
import {
    Card,
    CardHeader,
    CardContent
} from '@/components/ui/card';
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from '@/components/ui/alert';
import Navbar from '@/app/components/Navbar';

const ManageSubscription = () => {
    const [currentPlan, setCurrentPlan] = useState("30");
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    const [deletingPlan, setDeletingPlan] = useState(null);

    const plans = [
        { label: "10 Posts - MWK 500", value: "10", desc: "Perfect for beginners", posts: 10 },
        { label: "30 Posts - MWK 1000", value: "30", desc: "Most popular", posts: 30 },
        { label: "50 Posts - MWK 1500", value: "50", desc: "Best value", posts: 50 }
    ];

    const handleDelete = (plan) => {
        setDeletingPlan(plan);
        setShowConfirmDelete(true);
    };

    const confirmDelete = () => {
        setCurrentPlan(null);
        setShowConfirmDelete(false);
    };

    return (
        <>
        <Navbar heading="Manage Subscription" />
        <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6 mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
                    Manage Subscription
                </h1>
                <p className="text-gray-600 mb-6 text-center">
                    View and manage your current subscription plan
                </p>
            </motion.div>

            {currentPlan && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Card className="mb-8">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <FaCrown className="text-yellow-500 text-xl" />
                                <h2 className="text-xl font-semibold">Current Plan</h2>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">
                                            {plans.find(p => p.value === currentPlan)?.label}
                                        </h3>
                                        <p className="text-gray-600 mt-1">
                                            {plans.find(p => p.value === currentPlan)?.desc}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <FaInfoCircle className="text-cyan-600" />
                                            <span className="text-sm text-cyan-800">
                                                {plans.find(p => p.value === currentPlan)?.posts} posts remaining
                                            </span>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2 hover:bg-red-600 transition-colors"
                                        onClick={() => handleDelete(currentPlan)}
                                    >
                                        <FaTrash />
                                        Cancel Plan
                                    </motion.button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            )}

            <section className="mb-8">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <FaBox className="text-cyan-500" />
                    Available Plans
                </h2>

                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 space-y-4">
                    <AnimatePresence>
                        {plans.map((plan, index) => (
                            <motion.label
                                key={plan.value}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className={`flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 cursor-pointer ${currentPlan === plan.value ? 'ring-2 ring-cyan-500' : ''
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="subscription"
                                    value={plan.value}
                                    checked={currentPlan === plan.value}
                                    onChange={(e) => setCurrentPlan(e.target.value)}
                                    className="w-4 h-4 text-cyan-500"
                                />
                                <div className="flex flex-col">
                                    <span className="text-gray-800 font-medium">{plan.label}</span>
                                    <span className="text-sm text-gray-500">{plan.desc}</span>
                                </div>
                                {plan.value === "30" && (
                                    <span className="ml-auto text-center text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">
                                        Popular Choice
                                    </span>
                                )}
                            </motion.label>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {showConfirmDelete && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                    onClick={() => setShowConfirmDelete(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        className="bg-white rounded-lg p-6 max-w-md w-full"
                        onClick={e => e.stopPropagation()}
                    >
                        <Alert variant="destructive">
                            <AlertTitle className="text-lg font-semibold mb-2">
                                Cancel Subscription
                            </AlertTitle>
                            <AlertDescription>
                                Are you sure you want to cancel your current subscription plan? This action cannot be undone.
                            </AlertDescription>
                        </Alert>
                        <div className="mt-6 flex justify-end gap-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                                onClick={() => setShowConfirmDelete(false)}
                            >
                                Keep Plan
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                onClick={confirmDelete}
                            >
                                Cancel Plan
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
        </>
    );
};

export default ManageSubscription;