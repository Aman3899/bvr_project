"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";



const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        responsive: [
            {
                breakpoint: 768, // For tablets
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // For mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const images = [
        { src: "/marketplace-hero.jpeg", alt: "Marketplace Hero" },
        { src: "/marketplace-image.jpeg", alt: "Marketplace Image 2" },
        { src: "/marketplace1.jpg", alt: "Marketplace Image 3" },
        { src: "/marketplace3.webp", alt: "Marketplace Image 4" },
    ];

    return (
        <section className="w-full px-12 max-sm:px-4">
            <Slider {...settings} className="rounded-3xl border-2 border-black overflow-hidden">
                {images.map((image, index) => (
                    <div key={index}>
                        <Image
                            width={1920}
                            height={1080}
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-[500px] max-sm:h-[250px] object-cover rounded-3xl"
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default ImageSlider;