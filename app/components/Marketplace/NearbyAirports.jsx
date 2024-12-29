import React from 'react';
import Slider from "react-slick";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Plane, MapPin } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NearbyAirportsSlider = () => {
    const airports = [
        { id: 1, name: "Lilongwe International Airport", distance: "10", img: "/lilongwe_ariport.jpeg" },
        { id: 2, name: "LAAX International Airport", distance: "15", img: "/airport.jpg" },
        { id: 3, name: "ORD International Airport", distance: "20", img: "/lilongwe_ariport.jpeg" },
        { id: 4, name: "Kamuzu International Airport", distance: "15", img: "/airport.jpg" },
        { id: 5, name: "Chileka International Airport", distance: "25", img: "/lilongwe_ariport.jpeg" },
        { id: 6, name: "Mzuzu International Airport", distance: "30", img: "/airport.jpg" },
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
                <Plane className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Nearby Airports</h2>
            </div>

            <Slider {...settings} className="airports-slider -mx-2">
                {airports.map((airport) => (
                    <motion.div 
                        key={airport.id}
                        whileHover={{ scale: 1.02 }}
                        className="px-2"
                    >
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={airport.img}
                                    alt={airport.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold text-gray-800 mb-2 truncate">
                                    {airport.name}
                                </h4>
                                <div className="flex items-center text-gray-600">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span className="text-sm">{airport.distance} km away</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>

            <style jsx global>{`
                .airports-slider .slick-track {
                    display: flex !important;
                    gap: 1rem;
                }
                .airports-slider .slick-slide {
                    height: inherit !important;
                }
                .airports-slider .slick-slide > div {
                    height: 100%;
                }
                .airports-slider .slick-dots li button:before {
                    color: #3B82F6;
                }
                .airports-slider .slick-dots li.slick-active button:before {
                    color: #2563EB;
                }
            `}</style>
        </motion.div>
    );
};

export default NearbyAirportsSlider;