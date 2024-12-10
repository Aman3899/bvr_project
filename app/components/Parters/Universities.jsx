"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';



const Universities = () => {

    const universities = [
        { name: "Harvard", logo: "/marketplace-hero.jpeg", alt: "Harvard Logo" },
        { name: "Stanford", logo: "/marketplace-hero.jpeg", alt: "Stanford Logo" },
        { name: "MIT", logo: "/marketplace-hero.jpeg", alt: "MIT Logo" },
        { name: "Hailey", logo: "/marketplace-hero.jpeg", alt: "Hailey Logo" },
        { name: "Facebook", logo: "/marketplace-hero.jpeg", alt: "Facebook Logo" },
        { name: "Microsoft", logo: "/marketplace-hero.jpeg", alt: "Microsoft Logo" },
    ];


    return (
        <div>
            {/* Universities Section */}
            <h2 className="text-xl font-semibold">Universities</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1} // Number of slides visible
                breakpoints={{
                    640: { slidesPerView: 2 }, // 2 slides on small screens
                    768: { slidesPerView: 3 }, // 3 slides on medium screens
                    1024: { slidesPerView: 4 }, // 4 slides on large screens
                }}
                autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
                navigation // Show navigation arrows
                pagination={{ clickable: true }} // Add pagination dots
                className="w-full"
            >
                {universities.map((university, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
                            <Image
                                width={1920}
                                height={1080}
                                src={university.logo}
                                alt={university.alt}
                                className="object-contain mb-2 rounded-xl"
                            />
                            <p className="font-medium text-center max-sm:py-4">{university.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Universities;