"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

function getMarketplaceNameForRouting(marketplaceName) {
    return marketplaceName.split(" ").join("-");
}

const PromotionList = () => {
    const pathname = usePathname();

    const promotions = [
        { id: 1, name: "Discounted Apple", img: "/marketplace-hero.jpeg" },
        { id: 2, name: "Banana Bundle", img: "/marketplace-hero.jpeg" },
        { id: 3, name: "Discounted BlueBarries Bundle", img: "/marketplace-image.jpeg" },
        { id: 4, name: "Melon Bundle", img: "/marketplace-hero.jpeg" },
        { id: 5, name: "Discounted Grapes", img: "/marketplace-image.jpeg" },
        { id: 6, name: "Friuts Bundle", img: "/marketplace-hero.jpeg" },
    ];

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
            className="py-12 w-full mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h2 
                className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Current Promotions
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promotions.map((promotion) => (
                    <motion.div
                        key={promotion.id}
                        className="px-4 py-2"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <Link
                            href={`${pathname}/discounted_product/${getMarketplaceNameForRouting(promotion.name)}`}
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
                                            src={promotion.img}
                                            alt={promotion.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>
                                <div className="px-6 py-4 max-sm:px-3">
                                    <h4 className="font-semibold text-gray-800 text-xl mb-2 text-wrap">{promotion.name}</h4>
                                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                                        On Sale
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default PromotionList;
