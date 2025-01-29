"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// Shared slider settings
const createSliderSettings = (customSpeed = 3000) => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: customSpeed,
    pauseOnHover: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false, // Hide arrows on mobile
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                dots: true,
            },
        },
        {
            breakpoint: 1536,
            settings: {
                slidesToShow: 3,
            },
        },
    ],
});

// Shared card component
const SliderCard = ({ name, logo, alt }) => (
    <motion.div
        className="px-2 py-4 h-full"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
    >
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden border border-gray-100">
            <div className="relative p-6 flex flex-col h-full">
                <div className="relative w-full h-48 sm:h-64 mb-4 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                        src={logo}
                        alt={alt}
                        fill
                        className="object-contain p-4 transform hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mt-auto">
                    {name}
                </h3>
            </div>
        </div>
    </motion.div>
);

// Enhanced MobileNetworks component
export const MobileNetworksSlideshow = () => {
    
    const mobileNetworks = [
        { name: "Airtel Malawi", logo: "/logos/airtel_malawi.jpg", alt: "Airtel Malawi Logo" },
        { name: "TNM (Telekom Networks Malawi)", logo: "/logos/tnm.jpg", alt: "TNM Logo" },
        { name: "Access Communications Limited", logo: "/logos/access.png", alt: "Access Communications Limited Logo" },
        { name: "Malawi Digital Broadcast Network Limited", logo: "/logos/mdbnl.jpg", alt: "MDBNL Logo" },
    ];

    return (
        <section className="pt-5 lg:pt-10 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Mobile Networks
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>
                <Slider {...createSliderSettings(2500)} className="network-slider">
                    {mobileNetworks.map((network, index) => (
                        <SliderCard key={index} {...network} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default MobileNetworksSlideshow;