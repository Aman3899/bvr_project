"use client"; // Ensure this directive is at the top for client-side rendering

import React from "react";
import Image from "next/image";
import Slider from "react-slick"; // Import Slick Slider
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS
import { motion } from "framer-motion"; // For smooth animations

const MobileNetworksSlideshow = () => {
    const mobileNetworks = [
        { name: "Verizon", logo: "/marketplace-hero.jpeg", alt: "Verizon Logo" },
        { name: "AT&T", logo: "/marketplace-hero.jpeg", alt: "AT&T Logo" },
        { name: "Jazz", logo: "/marketplace-hero.jpeg", alt: "Jazz Logo" },
        { name: "Jio", logo: "/marketplace-hero.jpeg", alt: "Jio Logo" },
    ];

    // Settings for the Slick Slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 640, // For mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                },
            },
            {
                breakpoint: 1024, // For tablets and larger devices
                settings: {
                    slidesToShow: 2, // Show 2 slides on tablets
                },
            },
        ],
    };

    return (
        <div className="bg-gray-50 py-8 px-4 max-sm:py-3 max-sm:px-0">
            <div className="w-full mx-auto space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Mobile Networks
                </h2>
                <Slider {...settings}>
                    {mobileNetworks.map((network, index) => (
                        <motion.div
                            key={index}
                            className="p-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 border border-gray-200">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src={network.logo}
                                    alt={network.alt}
                                    className="object-contain rounded-md"
                                />
                                <p className="text-lg font-semibold text-gray-700 text-center">
                                    {network.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MobileNetworksSlideshow;