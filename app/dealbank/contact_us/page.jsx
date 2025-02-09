"use client";
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';

const ContactUs = () => {
    const [selectedTab, setSelectedTab] = useState('overview');

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <div className="bg-gray-50 min-h-screen mt-20">
            <Navbar heading="Contact Us" />

            <main className="container mx-auto px-4 py-10">
                <motion.section
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-5xl max-sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                        Get in Touch with Us
                    </h1>
                    <p className="text-xl max-sm:text-sm text-gray-600 max-w-4xl mx-auto">
                        Whether you have questions, feedback, or need support, we’re here to help! Reach out to us via the form below or through our contact information.
                    </p>
                </motion.section>

                <div className="flex justify-center mb-12">
                    <div className="bg-white rounded-full p-1 shadow-md">
                        {['overview', 'form', 'info'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`
                  px-6 py-2 rounded-full text-sm font-medium
                  ${selectedTab === tab
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-600 hover:text-blue-600'}
                  transition-all duration-300
                `}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="max-w-4xl w-full">
                        {selectedTab === 'overview' && (
                            <motion.section {...fadeIn} className="space-y-12 text-center">
                                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Our Contact Page</h2>
                                    <p className="text-gray-700 mb-6 max-sm:text-sm max-sm:text-justify">
                                        Feel free to connect with us for any inquiries, partnerships, or support. We value your feedback and are always here to assist.
                                    </p>
                                </section>
                            </motion.section>
                        )}

                        {selectedTab === 'form' && (
                            <motion.section {...fadeIn} className="grid grid-cols-1 md:grid-cols-1 gap-8">
                                <div className="bg-white shadow-md rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                                            <textarea
                                                id="message"
                                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                rows="5"
                                                placeholder="Type your message here..."
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </motion.section>
                        )}

                        {selectedTab === 'info' && (
                            <motion.section {...fadeIn} className="text-center">
                                <div className="bg-white shadow-md rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                                    <ul className="text-gray-700 space-y-3 max-sm:text-sm max-sm:text-justify">
                                        <li>
                                            <strong>Address:</strong> 123 Market Street, Suite 500, Metropolis, MT 54321
                                        </li>
                                        <li>
                                            <strong>Phone:</strong> <a href="tel:+265996339101" className="text-blue-500">+265 996 33 91 01</a>
                                        </li>
                                        <li>
                                            <strong>Email:</strong> <a href="mailto:support@dealbank.com" className="text-blue-500">scrollamalawi@gmail.com</a>
                                        </li>
                                        <li>
                                            <strong>Working Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM
                                        </li>
                                        <li>
                                            <strong>Timezone:</strong> Eastern Standard Time (EST)
                                        </li>
                                        <li className='text-justify'>
                                            At DealBank, we value your feedback, questions, and suggestions.
                                            Whether you&apos;re seeking assistance with your orders, exploring partnership opportunities,
                                            or simply want to share your experience with us, our dedicated support team is here to help.
                                            Reach out to us via the contact form, email, or phone, and we’ll get back to you promptly.
                                            Your satisfaction is our priority, and we are committed to providing you with exceptional service every step of the way.
                                            Let’s connect and make your DealBank experience even better!
                                        </li>
                                    </ul>
                                </div>
                            </motion.section>
                        )}
                    </div>
                </div>

                <motion.section
                    className="bg-gray-100 shadow-md rounded-lg p-6 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
                    <div className="flex justify-center space-x-4">
                        <Link
                            href="#"
                            className="text-black text-3xl rounded-full hover:text-blue-600"
                            aria-label="Facebook"
                        >
                            <SiFacebook />
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-700 text-3xl rounded-full hover:text-black"
                            aria-label="Twitter"
                        >
                            <SiX />
                        </Link>
                        <Link
                            href="#"
                            className="text-black text-3xl rounded-full hover:text-red-700"
                            aria-label="Instagram"
                        >
                            <SiInstagram />
                        </Link>
                        <Link
                            href="#"
                            className="text-black text-3xl rounded-full hover:text-blue-600"
                            aria-label="LinkedIn"
                        >
                            <SiLinkedin />
                        </Link>
                    </div>
                </motion.section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactUs;
