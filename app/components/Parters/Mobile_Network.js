"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Correctly import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const MobileNetworksSlideshow = () => {
    const mobileNetworks = [
        { name: "Verizon", logo: "/marketplace-hero.jpeg", alt: "Verizon Logo" },
        { name: "AT&T", logo: "/marketplace-hero.jpeg", alt: "AT&T Logo" },
        { name: "Jazz", logo: "/marketplace-hero.jpeg", alt: "AT&T Logo" },
        { name: "Jio", logo: "/marketplace-hero.jpeg", alt: "AT&T Logo" },
    ];

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Mobile Networks</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                }}
                autoplay={{ delay: 3000 }}
                navigation
                pagination={{ clickable: true }}
                className="w-full"
            >
                {mobileNetworks.map((network, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
                            <Image
                                width={1920}
                                height={1080}
                                src={network.logo}
                                alt={network.alt}
                                className="object-contain mb-2 rounded-xl"
                            />
                            <p className="font-medium text-center max-sm:py-4">{network.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MobileNetworksSlideshow;