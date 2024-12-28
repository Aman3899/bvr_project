"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

function getMarketplaceNameForRouting(marketplaceName) {
    return marketplaceName.split(" ").join("-");
}

const ProductSlider = () => {
    const pathname = usePathname();

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
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: { 
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        },
        hover: { 
            scale: 1.03,
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div 
            className="px-4 py-12 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h2 
                className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-black to-emerald-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Featured Products
            </motion.h2>
            <Slider {...settings} className="px-2">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        className="px-4 py-2"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <Link
                            href={`${pathname}/product/${getMarketplaceNameForRouting(product.name)}`}
                            className="block"
                        >
                            <motion.div 
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "50px" }}
                            >
                                <div className="relative overflow-hidden h-48">
                                    <motion.div
                                        variants={imageVariants}
                                        whileHover="hover"
                                        className="h-full"
                                    >
                                        <Image
                                            width={1000}
                                            height={1000}
                                            src={product.img}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h4 className="font-semibold text-gray-800 text-xl mb-2">{product.name}</h4>
                                    <div className="flex items-center justify-between">
                                        <p className="text-green-600 font-bold text-lg">{product.price}</p>
                                        <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                                            Available
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </Slider>
        </motion.div>
    );
};

export default ProductSlider;