import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NearbyATMsSlider = () => {

    const atms = [
        { id: 1, name: "National Bank of Malawi ATM", distance: "1", img: "/atm.png" },
        { id: 2, name: "FDH Bank ATM", distance: "2", img: "/atm.png" },
        { id: 3, name: "Standard Bank Malawi ATM", distance: "3", img: "/atm.png" },
        { id: 4, name: "EcoBank ATM", distance: "2.5", img: "/atm.png" },
        { id: 5, name: "NBS Bank ATM", distance: "1.8", img: "/atm.png" },
        { id: 6, name: "XYZ Bank ATM", distance: "3.1", img: "/atm.png" },
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
            <h2 className="text-xl font-semibold mb-4">Nearby ATMs</h2>
            <Slider {...settings}>
                {atms.map((atm) => (
                    <div key={atm.id} className="px-2">
                        <div className="border border-gray-300 rounded-lg p-3 text-center hover:shadow-lg transition cursor-pointer">
                            <Image
                                width={1000}
                                height={1000}
                                src={atm.img}
                                alt={atm.name}
                                className="w-full rounded mb-2 h-[200px] max-sm:h-fit"
                            />
                            <h4 className="font-medium">{atm.name}</h4>
                            <p className="text-gray-600">{atm.distance} km away</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default NearbyATMsSlider;