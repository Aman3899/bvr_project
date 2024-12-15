"use client";
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';


const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar heading="Privacy Policy" />

            <main className="container mx-auto px-4 py-10">
                <section className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
                    <p className="text-gray-700 mb-6">
                        Welcome to DealBank! Your privacy is important to us. This privacy policy explains how
                        we collect, use, and protect your personal information when you interact with our
                        platform.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Personal Information: Name, email, address, phone number, etc.</li>
                        <li>Transaction Data: Purchase history, payment methods.</li>
                        <li>Technical Data: IP address, browser type, and other metadata.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                    <p className="text-gray-700 mb-6">
                        DealBank uses your information to enhance your shopping experience, process
                        transactions, and improve our services. We may also use your data for marketing
                        purposes with your consent.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Sharing and Protection</h2>
                    <p className="text-gray-700 mb-6">
                        We do not sell your data to third parties. Your data is stored securely and only shared
                        with trusted partners when necessary to deliver our services.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
                    <p className="text-gray-700 mb-6">
                        You have the right to access, update, or delete your personal information at any time.
                        Please contact our support team for assistance.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Policy Updates</h2>
                    <p className="text-gray-700">
                        We may update this policy from time to time. Changes will be posted on this page, and
                        significant updates will be communicated to you directly.
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;