"use client";
import React from 'react';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePathname } from 'next/navigation';
import Link from 'next/link';


function getMarketplaceNameForRouting(marketplaceName) {
    return marketplaceName.split(" ").join("-");
}


const PromotionSliders = () => {

    const pathname = usePathname();

    const promotions = [
        { id: 1, name: "Discounted Apple", price: "MWK 4500", img: "/marketplace-hero.jpeg" },
        { id: 2, name: "Banana Bundle", price: "MWK 2500", img: "/marketplace-hero.jpeg" },
        { id: 3, name: "Discounted BlueBarries Bundle", price: "MWK 4500", img: "/marketplace-image.jpeg" },
        { id: 4, name: "Melon Bundle", price: "MWK 2500", img: "/marketplace-hero.jpeg" },
        { id: 5, name: "Discounted Grapes", price: "MWK 4500", img: "/marketplace-image.jpeg" },
        { id: 6, name: "Friuts Bundle", price: "MWK 2500", img: "/marketplace-hero.jpeg" },
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
        <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Current Promotions</h2>
            <Slider {...settings}>
                {promotions.map((promotion) => (
                    <div key={promotion.id} className="px-2">
                        <Link href={`${pathname}/discounted_product/${getMarketplaceNameForRouting(promotion.name)}`}
                            className="border border-gray-300 rounded-lg p-3 text-center hover:shadow-lg transition cursor-pointer">
                            <Image
                                width={1000}
                                height={1000}
                                src={promotion.img}
                                alt={promotion.name}
                                className="w-full rounded mb-2 h-[200px] max-sm:h-fit"
                            />
                            <h4 className="font-medium">{promotion.name}</h4>
                            <p className="text-red-600 font-bold">{promotion.price}</p>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PromotionSliders;