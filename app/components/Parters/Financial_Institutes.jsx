"use client"; // Ensure this directive is at the top for client-side rendering

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick'; // Import Slick Slider
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS

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
        slidesToShow: 3, // Default for mobile
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
                breakpoint: 1024, // For tablets and larger devices
                settings: {
                    slidesToShow: 2, // Show 2 slides on larger devices
                },
            },
            {
                breakpoint: 1280, // For larger screens like desktops
                settings: {
                    slidesToShow: 3, // Show 3 slides on larger screens
                },
            },
        ],
    };

    return (
        <div>
            {/* Financial Institutions Section */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Financial Institutions</h2>
                <Slider {...settings} className="w-full">
                    {financialInstitutions.map((institution, index) => (
                        <div key={index} className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
                            <Image
                                width={1920}
                                height={1080}
                                src={institution.logo}
                                alt={institution.alt}
                                className="object-contain mb-2 rounded-xl"
                            />
                            <p className="font-medium text-center max-sm:py-4">{institution.name}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default FinancialInstitutes;