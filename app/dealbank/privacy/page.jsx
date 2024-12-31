"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { FaShieldAlt, FaUserLock, FaHandshake, FaBell } from 'react-icons/fa';

const PolicySection = ({ title, children, icon: Icon }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg p-8 mb-6 hover:shadow-xl transition-all duration-300"
    >
        <div className="flex items-center mb-4">
            <Icon className="text-3xl text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="text-gray-700 space-y-4">
            {children}
        </div>
    </motion.section>
);

const PrivacyPolicy = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen mt-20">
            <Navbar heading="Privacy Policy" />

            <main className="container mx-auto px-4 py-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                        Your Privacy Matters
                    </h1>
                    <p className="text-xl text-gray-600">
                        We're committed to protecting your personal information and being transparent about our practices.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6">
                    <PolicySection title="Introduction" icon={FaShieldAlt}>
                        <p>
                            Welcome to DealBank! Your privacy is important to us. This privacy policy explains how
                            we collect, use, and protect your personal information when you interact with our
                            platform.
                        </p>
                    </PolicySection>

                    <PolicySection title="Information We Collect" icon={FaUserLock}>
                        <ul className="list-none space-y-3">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                <span>Personal Information: Name, email, address, phone number</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                <span>Transaction Data: Purchase history, payment methods</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                <span>Technical Data: IP address, browser type, and other metadata</span>
                            </li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="How We Use Your Information" icon={FaHandshake}>
                        <p>
                            DealBank uses your information to enhance your shopping experience, process
                            transactions, and improve our services. We may also use your data for marketing
                            purposes with your consent.
                        </p>
                    </PolicySection>

                    <PolicySection title="Data Protection" icon={FaBell}>
                        <div className="space-y-4">
                            <p>
                                We do not sell your data to third parties. Your data is stored securely and only shared
                                with trusted partners when necessary to deliver our services.
                            </p>
                            <p>
                                You have the right to access, update, or delete your personal information at any time.
                                Please contact our support team for assistance.
                            </p>
                        </div>
                    </PolicySection>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg"
                    >
                        <h3 className="text-xl font-semibold mb-2">Policy Updates</h3>
                        <p>
                            We may update this policy from time to time. Changes will be posted on this page, and
                            significant updates will be communicated to you directly.
                        </p>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;