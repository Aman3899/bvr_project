"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const Universities = () => {

    const universities = [
        { name: "Harvard", logo: "https://logo.clearbit.com/harvard.com", alt: "Harvard Logo" },
        { name: "Stanford", logo: "/marketplace-hero.jpeg", alt: "Stanford Logo" },
        { name: "MIT", logo: "/marketplace-image.jpeg", alt: "MIT Logo" },
        { name: "Hailey", logo: "https://logo.clearbit.com/hailey.com", alt: "Hailey Logo" },
        { name: "Facebook", logo: "https://logo.clearbit.com/facebook.com", alt: "Facebook Logo" },
        { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", alt: "Microsoft Logo" },
    ];

    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 4, // Number of slides visible
        slidesToScroll: 1, // Number of slides to scroll per swipe
        autoplay: true, // Enable auto-slide
        autoplaySpeed: 2000, // Auto-slide every 3 seconds
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
        <div>
            {/* Universities Section */}
            <h2 className="text-xl font-semibold">Universities</h2>
            <Slider {...settings} className="w-full">
                {universities.map((university, index) => (
                    <div key={index} className="p-4">
                        <div key={index} className="bg-white shadow-md rounded-md p-4 flex flex-col items-center h-[260px]">
                            <Image
                                width={200}
                                height={200}
                                src={university.logo}
                                alt={university.alt}
                                className="object-cover mb-2 rounded-xl"
                            />
                            <p className="font-medium text-center max-sm:py-4">{university.name}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Universities;
