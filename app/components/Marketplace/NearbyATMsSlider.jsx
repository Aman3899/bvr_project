import React from 'react';
import Slider from "react-slick";
import Image from "next/image";
import { motion } from 'framer-motion';
import { CreditCard, MapPin } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NearbyATMsSlider = () => {
    const atms = [
        { id: 1, name: "National Bank of Malawi", distance: "1", img: "/atm.png" },
        { id: 2, name: "FDH Bank ATM", distance: "2", img: "/atm.webp" },
        { id: 3, name: "Standard Bank ATM", distance: "3", img: "/atm.png" },
        { id: 4, name: "EcoBank ATM", distance: "2.5", img: "/atm.webp" },
        { id: 5, name: "NBS Bank ATM", distance: "1.8", img: "/atm.png" },
        { id: 6, name: "XYZ Bank of Malawi ATM", distance: "3.1", img: "/atm.webp" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
            <div className="flex items-center space-x-2 mb-6">
                <CreditCard className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Nearby ATMs</h2>
            </div>

            <Slider {...settings} className="atms-slider -mx-2">
                {atms.map((atm) => (
                    <motion.div 
                        key={atm.id}
                        whileHover={{ scale: 1.02 }}
                        className="px-2"
                    >
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={atm.img}
                                    alt={atm.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2 truncate">
                                    {atm.name}
                                </h4>
                                <div className="flex items-center text-gray-600">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span className="text-sm">{atm.distance} km away</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>

            <style jsx global>{`
                .atms-slider .slick-track {
                    display: flex !important;
                    gap: 1rem;
                }
                .atms-slider .slick-slide {
                    height: inherit !important;
                }
                .atms-slider .slick-slide > div {
                    height: 100%;
                }
                .atms-slider .slick-dots li button:before {
                    color: #3B82F6;
                }
                .atms-slider .slick-dots li.slick-active button:before {
                    color: #2563EB;
                }
            `}</style>
        </motion.div>
    );
};

export default NearbyATMsSlider;