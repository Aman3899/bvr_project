"use client"; // Ensure this directive is at the top for client-side rendering

import React from "react";
import Image from "next/image";
import Slider from "react-slick"; // Import Slick Slider
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme CSS

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
        slidesToShow: 2, // Default for mobile
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 640, // For small devices (mobile)
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                },
            },
            {
                breakpoint: 1024, // For medium devices (tablets)
                settings: {
                    slidesToShow: 2, // Show 2 slides on larger devices
                },
            },
        ],
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Mobile Networks</h2>
            <Slider {...settings} className="w-full">
                {mobileNetworks.map((network, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
                        <Image
                            width={1920}
                            height={1080}
                            src={network.logo}
                            alt={network.alt}
                            className="object-contain mb-2 rounded-xl"
                        />
                        <p className="font-medium text-center max-sm:py-4">{network.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MobileNetworksSlideshow;