"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from 'next/link';



function getMarketplaceNameForRouting(marketplaceName) {
    return marketplaceName.split(" ").join("-");
}

const ProductSlider = () => {

    const products = [
        { id: 1, name: "Apple", price: "MWK 5000", img: "/marketplace-hero.jpeg" },
        { id: 2, name: "Banana", price: "MWK 3000", img: "/marketplace-hero.jpeg" },
        { id: 3, name: "Handmade Crafts", price: "MWK 5000", img: "/marketplace-hero.jpeg" },
        { id: 4, name: "Fresh Produce", price: "MWK 3000", img: "/marketplace-image.jpeg" },
        { id: 5, name: "ABCDED", price: "MWK 4000", img: "/marketplace-image.jpeg" },
        { id: 6, name: "asnjdji Produce", price: "MWK 1000", img: "/marketplace-image.jpeg" },
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
        <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="px-2">
                        <Link href={`/product/${getMarketplaceNameForRouting(product.name)}`}>
                            <div className="border border-gray-300 rounded-lg p-3 text-center hover:shadow-lg transition cursor-pointer">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full rounded mb-2 h-[200px] max-sm:h-fit"
                                />
                                <h4 className="font-medium">{product.name}</h4>
                                <p className="text-green-600 font-bold">{product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductSlider;