"use client";
import React from 'react';
import { motion } from 'framer-motion'; // Updated import
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'; // Using react-icons
import Image from 'next/image'; // Using next/image


const BusinessDevelopmentOfficer = () => {

    return (
        <div className="w-full mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-800 mb-8 mt-12 text-center relative max-sm:text-2xl max-sm:mb-4"
            >
                <span className="relative inline-block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Business Development Officer
                </span>

            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col md:flex-row items-center gap-6 max-sm:gap-1 rounded-2xl p-8 max-sm:p-3 bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
                <motion.div whileHover={{ scale: 1.05 }} className="relative">
                    <div className="w-32 h-32 max-sm:w-16 max-sm:h-16 rounded-full border-4 border-blue-500 overflow-hidden relative">
                        <Image
                            width={100}
                            height={100}
                            src="/avatar.jpeg"
                            alt="John Smith"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
                    </div>
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                    <motion.h4
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-bold text-2xl text-gray-900 mb-2 max-sm:text-lg max-sm:mb-0"
                    >
                        John Smith
                    </motion.h4>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-gray-600 italic mb-4 max-sm:mb-2 text-lg max-sm:text-xs"
                    >
                        Empowering market success with tailored strategies
                    </motion.p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="tel:+265996339101"
                        className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 max-sm:py-0 max-sm:px-2 rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 mb-6 max-sm:mb-3"
                    >
                        +265 996 33 91 01
                    </motion.a>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center md:justify-start space-x-6"
                    >
                        {[
                            { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/john-smith', color: 'text-blue-600 hover:text-blue-700' },
                            { Icon: FaTwitter, href: 'https://twitter.com/johnsmith', color: 'text-gray-700 hover:text-gray-800' },
                            { Icon: FaFacebook, href: 'https://www.facebook.com/johnsmith', color: 'text-blue-600 hover:text-blue-700' }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${social.color} transition-colors duration-300`}
                            >
                                <social.Icon className="w-6 h-6 max-sm:w-4 max-sm:h-4" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default BusinessDevelopmentOfficer;
