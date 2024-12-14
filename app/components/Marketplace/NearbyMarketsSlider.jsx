"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from 'next/link';



const NearbyMarketsSlider = () => {

    const nearbyMarkets = [
        { id: 1, name: "Market A", img: "/marketplace-hero.jpeg" },
        { id: 2, name: "Market B", img: "/marketplace-image.jpeg" },
        { id: 3, name: "Market C", img: "/marketplace-image.jpeg" },
        { id: 4, name: "Market D", img: "/marketplace-hero.jpeg" },
        { id: 5, name: "Market E", img: "/marketplace-image.jpeg" },
        { id: 6, name: "Market F", img: "/marketplace-image.jpeg" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640, // Mobile breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="mb-6 mt-4">
            <h2 className="text-xl font-semibold mb-4">Nearby Markets</h2>
            <Slider {...settings}>
                {nearbyMarkets.map((market) => (
                    <div key={market.id} className="px-2">
                        <div className="border border-gray-300 rounded-lg p-3 text-center hover:shadow-lg transition cursor-pointer">
                            <Image
                                width={1000}
                                height={1000}
                                src={market.img}
                                alt={market.name}
                                className="w-full h-[225px] rounded mb-2 max-sm:h-fit"
                            />
                            <h4 className="font-medium">{market.name}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default NearbyMarketsSlider;