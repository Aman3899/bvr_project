"use client"; // Ensure this directive is at the top for client-side rendering

import React from "react";
import Image from "next/image";
import Slider from "react-slick"; // Import Slick Slider
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS
import { motion } from "framer-motion"; // For animations

const FinancialInstitutes = () => {
    const financialInstitutions = [
        { name: "Chase", logo: "/marketplace-hero.jpeg", alt: "Chase Logo" },
        { name: "HSBC", logo: "/marketplace-hero.jpeg", alt: "HSBC Logo" },
        { name: "ABC", logo: "/marketplace-hero.jpeg", alt: "ABC Logo" },
        { name: "DEF", logo: "/marketplace-hero.jpeg", alt: "DEF Logo" },
        { name: "GHI", logo: "/marketplace-hero.jpeg", alt: "GHI Logo" },
        { name: "JHL", logo: "/marketplace-hero.jpeg", alt: "JHL Logo" },
        { name: "SJD", logo: "/marketplace-hero.jpeg", alt: "SJD Logo" },
    ];

    // Settings for the Slick Slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 640, // For mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                },
            },
            {
                breakpoint: 1024, // For tablets
                settings: {
                    slidesToShow: 2, // Show 2 slides on tablets
                },
            },
            {
                breakpoint: 1280, // For desktops
                settings: {
                    slidesToShow: 3, // Show 3 slides on larger screens
                },
            },
        ],
    };

    return (
        <div className="bg-gray-50 py-8 px-5 max-sm:py-3 max-sm:px-0">
            {/* Financial Institutions Section */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Financial Institutions
                </h2>
                <Slider {...settings} className="w-full">
                    {financialInstitutions.map((institution, index) => (
                        <motion.div
                            key={index}
                            className="p-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 border border-gray-200">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src={institution.logo}
                                    alt={institution.alt}
                                    className="object-contain rounded-md"
                                />
                                <p className="text-lg font-medium text-gray-700 text-center">
                                    {institution.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default FinancialInstitutes;
