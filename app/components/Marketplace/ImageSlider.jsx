"use client";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


const ImageSlider = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const images = [
        { 
            src: "/marketplace-hero.jpeg", 
            alt: "Marketplace Hero",
            title: "Discover Local Markets",
            description: "Explore the finest local products and services"
        },
        { 
            src: "/marketplace-image.jpeg", 
            alt: "Marketplace Image 2",
            title: "Fresh Products Daily",
            description: "Direct from local vendors to your doorstep"
        },
        { 
            src: "/marketplace1.jpg", 
            alt: "Marketplace Image 3",
            title: "Authentic Experiences",
            description: "Connect with trusted local sellers"
        },
        { 
            src: "/marketplace3.webp", 
            alt: "Marketplace Image 4",
            title: "Community Markets",
            description: "Supporting local businesses and artisans"
        },
    ];

    console.log(props);
    

    const CustomArrow = ({ direction, onClick }) => (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`absolute z-10 top-1/2 -translate-y-1/2 ${
                direction === 'prev' ? 'left-4' : 'right-4'
            } bg-white/80 hover:bg-white p-2 rounded-full lg:hidden md:hidden sm:visible shadow-lg transition-all max-sm:p-0 max-sm:mx-2`}
            onClick={onClick}
        >
            {direction === 'prev' ? (
                <ChevronLeft className="w-6 h-6 text-gray-800" />
            ) : (
                <ChevronRight className="w-6 h-6 text-gray-800" />
            )}
        </motion.button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        loop: true,
        beforeChange: (_, next) => setCurrentSlide(next),
        nextArrow: <CustomArrow direction="next" />,
        prevArrow: <CustomArrow direction="prev" />,
        customPaging: (i) => (
            <div className={`
                w-3 h-3 mx-1 rounded-full transition-all duration-300 max-sm:hidden
                ${currentSlide === i ? 'bg-blue-600 scale-125' : 'bg-gray-400'}
            `} />
        ),
        dotsClass: "slick-dots custom-dots !bottom-6",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        <section className="relative w-full px-12 py-6 max-sm:px-0">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
            >
                <Slider {...settings} className="marketplace-slider">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <div className="relative h-[500px] max-sm:h-[250px] overflow-hidden rounded-2xl">
                                <Image
                                    width={1920}
                                    height={1080}
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    priority={index === 0}
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                                
                                {/* Content */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute bottom-0 left-0 right-0 p-8 text-white"
                                >
                                    <h2 className="text-3xl font-bold mb-2 max-sm:text-sm">{props.title}</h2>
                                    <p className="text-lg text-gray-200 max-sm:text-xs">{image.description}</p>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                    <motion.div
                        className="h-full bg-blue-600"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    />
                </div>
            </motion.div>

            {/* Add custom styles */}
            <style jsx global>{`
                .marketplace-slider .slick-dots {
                    display: flex !important;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .marketplace-slider .slick-slide {
                    padding: 0.5rem;
                }
                
                .marketplace-slider .slick-track {
                    display: flex;
                    gap: 1rem;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                .marketplace-slider img {
                    animation: fadeIn 0.5s ease-in;
                }
            `}</style>
        </section>
    );
};

export default ImageSlider;