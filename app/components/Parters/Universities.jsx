"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Universities = () => {
    const universities = [
        {
            name: "Harvard",
            logo: "https://logo.clearbit.com/harvard.edu",
            alt: "Harvard Logo",
        },
        {
            name: "Stanford",
            logo: "https://logo.clearbit.com/stanford.edu",
            alt: "Stanford Logo",
        },
        {
            name: "MIT",
            logo: "https://logo.clearbit.com/mit.edu",
            alt: "MIT Logo",
        },
        {
            name: "Hailey",
            logo: "https://logo.clearbit.com/imperial.edu",
            alt: "Hailey Logo",
        },
        {
            name: "Facebook",
            logo: "https://logo.clearbit.com/facebook.com",
            alt: "Facebook Logo",
        },
        {
            name: "Microsoft",
            logo: "https://logo.clearbit.com/microsoft.com",
            alt: "Microsoft Logo",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="py-8 bg-gradient-to-b from-gray-100 to-gray-50">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                Top Universities
            </h2>

            {/* Carousel Slider */}
            <Slider {...settings} className="mx-auto w-full px-4">
                {universities.map((university, index) => (
                    <div
                        key={index}
                        className="p-4 transition-transform duration-500 transform hover:scale-105"
                    >
                        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center justify-center h-80 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                            {/* Logo */}
                            <div className="w-40 h-40 relative mb-4">
                                <Image
                                    src={university.logo}
                                    alt={university.alt}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-md"
                                />
                            </div>
                            {/* University Name */}
                            <p className="text-lg font-semibold text-gray-800">
                                {university.name}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Universities;