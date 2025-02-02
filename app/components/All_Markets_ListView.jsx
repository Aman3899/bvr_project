"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

function getMarketplaceNameForRouting(marketplaceName) {
    return marketplaceName.split(" ").join("-");
}

const MarketListView = ({ searchQuery }) => {
    const markets = [
        { name: "Zigwagwa Market", distance: "2 km", image: "/marketplace-image.jpeg", city: "Mzuzu", area: "Mzuzu City" },
        { name: "Salisbury Market", distance: "3 km", image: "/marketplace-image.jpeg", city: "Lilongwe", area: "Area 18" },
        { name: "Luwinga Market", distance: "5 km", image: "/marketplace-image.jpeg", city: "Mzuzu", area: "Luwinga" },
        { name: "Mzuzu Market", distance: "7 km", image: "/marketplace-image.jpeg", city: "Mzuzu", area: "Mzuzu Town" },
        { name: "Limbe Market", distance: "4 km", image: "/marketplace-image.jpeg", city: "Blantyre", area: "Limbe" },
        { name: "Kamuzu Market", distance: "6 km", image: "/marketplace-image.jpeg", city: "Lilongwe", area: "Kamuzu" },
        { name: "Bwaila Market", distance: "8 km", image: "/marketplace-image.jpeg", city: "Lilongwe", area: "Bwaila" },
        { name: "Chichiri Market", distance: "9 km", image: "/marketplace-image.jpeg", city: "Blantyre", area: "Chichiri" },
        { name: "Mulanje Market", distance: "10 km", image: "/marketplace-image.jpeg", city: "Mulanje", area: "Mulanje Town" },
        { name: "Dedza Market", distance: "11 km", image: "/marketplace-image.jpeg", city: "Dedza", area: "Dedza Town" },
    ];

    // Function to filter markets based on search query
    const filteredMarkets = markets.filter(market => {
        const { city, area, search } = searchQuery;
        return (
            (city ? market.city.toLowerCase().includes(city.toLowerCase()) : true) &&
            (area ? market.area.toLowerCase().includes(area.toLowerCase()) : true) &&
            (search ? market.name.toLowerCase().includes(search.toLowerCase()) : true)
        );
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
        hover: {
            scale: 1.05,
            y: -5,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
            },
        },
    };

    const imageVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            className="px-4 py-12 w-full mx-auto mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h2
                className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-black to-amber-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Nearby Markets
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                {filteredMarkets.map((market, index) => (
                    <motion.div
                        key={index}
                        className="px-4 py-2"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <Link
                            href={"/marketplace/" + getMarketplaceNameForRouting(market.name)}
                            className="block"
                        >
                            <motion.div
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "50px" }}
                            >
                                <div className="relative overflow-hidden h-56">
                                    <motion.div
                                        variants={imageVariants}
                                        whileHover="hover"
                                        className="h-full"
                                    >
                                        <Image
                                            src={market.image}
                                            alt={market.name}
                                            width={1000}
                                            height={1000}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                                        <MapPin className="w-4 h-4 text-orange-500" />
                                        <span className="text-sm font-medium text-gray-800">
                                            {market.distance}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {market.name}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                                            Open Now
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default MarketListView;