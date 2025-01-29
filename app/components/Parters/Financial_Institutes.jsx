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


// Enhanced FinancialInstitutes component
export const FinancialInstitutes = () => {
    const financialInstitutions = [
      { name: "National Bank of Malawi", logo: "/logos/nbm.jpg", alt: "National Bank of Malawi Logo" },
      { name: "Standard Bank Malawi", logo: "/logos/standard_bank.jpg", alt: "Standard Bank Malawi Logo" },
      { name: "FDH Bank", logo: "/logos/fdh_bank.jpg", alt: "FDH Bank Logo" },
      { name: "Ecobank Malawi", logo: "/logos/ecobank.jpg", alt: "Ecobank Malawi Logo" },
      { name: "First Capital Bank", logo: "/logos/first_capital_bank.jpg", alt: "First Capital Bank Logo" },
      { name: "MyBucks Banking Corporation", logo: "/logos/mybucks.jpg", alt: "MyBucks Banking Corporation Logo" },
      { name: "Opportunity International Bank", logo: "/logos/opportunity_bank.jpg", alt: "Opportunity International Bank Logo" },
    ];
  
    return (
      <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Financial Institutions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <Slider {...createSliderSettings(3000)} className="financial-slider">
            {financialInstitutions.map((institution, index) => (
              <SliderCard key={index} {...institution} />
            ))}
          </Slider>
        </div>
      </section>
    );
  };

export default FinancialInstitutes;