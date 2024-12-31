"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { FaSearch, FaShoppingCart, FaCreditCard, FaTruck, FaArrowRight } from 'react-icons/fa';

const StepCard = ({ icon: Icon, title, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
    >
        <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full mb-6">
                <Icon className="text-3xl text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 leading-relaxed max-sm:text-sm">{description}</p>
        </div>
    </motion.div>
);

const HowItWorks = () => {
    const steps = [
        {
            icon: FaSearch,
            title: "Browse Products",
            description: "Explore a wide range of categories such as grains, fruits, vegetables, meats, and more. Our platform makes it easy to find exactly what you're looking for, all in one place."
        },
        {
            icon: FaShoppingCart,
            title: "Add to Cart",
            description: "Once you've found your desired products, simply add them to your cart. Our intuitive platform makes shopping quick and easy."
        },
        {
            icon: FaCreditCard,
            title: "Checkout and Pay",
            description: "After reviewing your cart, proceed to checkout. We offer secure payment options to ensure a smooth and safe transaction."
        },
        {
            icon: FaTruck,
            title: "Track Your Order",
            description: "After your order is placed, you can track it in real-time and get updates on your delivery status."
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 mt-20">
            <Navbar heading="How it Works?" />

            <main className="container mx-auto px-6 md:px-12 py-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                        Simple Steps to Start Shopping
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Experience seamless shopping with our easy-to-follow process
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <StepCard key={index} {...step} />
                    ))}
                </div>

                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl shadow-lg"
                >
                    <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
                    <p className="text-xl mb-8">Join Dealbank today and enjoy a seamless shopping experience!</p>
                    <a
                        href="/shop"
                        className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    >
                        Start Shopping Now
                        <FaArrowRight className="ml-2" />
                    </a>
                </motion.section>
            </main>

            <Footer />
        </div>
    );
};

export default HowItWorks;