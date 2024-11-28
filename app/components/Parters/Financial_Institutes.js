"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';


const Financial_Institutes = () => {


    const financialInstitutions = [
        { name: "Chase", logo: "/marketplace-hero.jpeg", alt: "Chase Logo" },
        { name: "HSBC", logo: "/marketplace-hero.jpeg", alt: "HSBC Logo" },
        { name: "ABC", logo: "/marketplace-hero.jpeg", alt: "HSBC Logo" },
        { name: "DEF", logo: "/marketplace-hero.jpeg", alt: "HSBC Logo" },
        { name: "GHI", logo: "/marketplace-hero.jpeg", alt: "HSBC Logo" },
        { name: "JHL", logo: "/marketplace-hero.jpeg", alt: "HSBC Logo" },
        { name: "sjdnjk", logo: "/marketplace-hero.jpeg", alt: "HSBC Logo" },
    ];

    return (
        <div>
            {/* Financial Institutions Section */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Financial Institutions</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    autoplay={{ delay: 3000 }}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full"
                >
                    {financialInstitutions.map((institution, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src={institution.logo}
                                    alt={institution.alt}
                                    className="object-contain mb-2 rounded-xl"
                                />
                                <p className="font-medium text-center max-sm:py-4">{institution.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Financial_Institutes;