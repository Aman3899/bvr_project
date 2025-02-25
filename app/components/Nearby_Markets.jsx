"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Nearby_Markets = () => {
    function getMarketplaceNameForRouting(marketplaceName) {
        return marketplaceName.split(" ").join("-");
    }

    // Slider settings for react-slick
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768, // For tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // For mobile devices
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const markets = [
        { name: "Zigwagwa Market", distance: "2 km", image: "/marketplace-image.jpeg" },
        { name: "Salisbury Market", distance: "3 km", image: "/marketplace-image.jpeg" },
        { name: "Luwinga Market", distance: "5 km", image: "/marketplace-image.jpeg" },
        { name: "Mzuzu Market", distance: "7 km", image: "/marketplace-image.jpeg" },
        { name: "Limbe Market", distance: "4 km", image: "/marketplace-image.jpeg" },
        { name: "Kamuzu Market", distance: "6 km", image: "/marketplace-image.jpeg" },
        { name: "Bwaila Market", distance: "8 km", image: "/marketplace-image.jpeg" },
        { name: "Chichiri Market", distance: "9 km", image: "/marketplace-image.jpeg" },
        { name: "Mulanje Market", distance: "10 km", image: "/marketplace-image.jpeg" },
        { name: "Dedza Market", distance: "11 km", image: "/marketplace-image.jpeg" },
        { name: "Karonga Market", distance: "12 km", image: "/marketplace-image.jpeg" },
        { name: "Monkey Bay Market", distance: "13 km", image: "/marketplace-image.jpeg" },
        { name: "Mangochi Market", distance: "14 km", image: "/marketplace-image.jpeg" },
        { name: "Balaka Market", distance: "15 km", image: "/marketplace-image.jpeg" }
    ];

    return (
        <div className="my-8">
            {/* Nearby Markets Section */}
            <h2 className="text-2xl font-bold text-center mb-6">Nearby Markets</h2>
            <Slider {...sliderSettings}>
                {markets.map((market, index) => (
                    <Link
                        href={"/marketplace/" + getMarketplaceNameForRouting(market.name)}
                        key={index}
                    >
                        <div className="p-4">
                            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300">
                                <Image
                                    src={market.image}
                                    alt={market.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 bg-gray-100 text-black text-center">
                                    <h3 className="text-lg font-semibold">{market.name}</h3>
                                    <p className="text-sm mt-1">Approx Distance: {market.distance}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
};

export default Nearby_Markets;