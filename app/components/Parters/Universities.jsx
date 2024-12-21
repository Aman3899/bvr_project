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
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="py-8">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-6">Universities</h2>

            {/* Carousel Slider */}
            <Slider {...settings} className="mx-auto max-w-7xl">
                {universities.map((university, index) => (
                    <div key={index} className="px-3">
                        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center h-64">
                            {/* Logo */}
                            <div className="w-32 h-32 relative mb-4">
                                <Image
                                    src={university.logo}
                                    alt={university.alt}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-lg"
                                />
                            </div>
                            {/* University Name */}
                            <p className="font-medium text-center text-lg">{university.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Universities;