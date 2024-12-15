import React from "react";
import Slider from "react-slick";
import Image from "next/image";
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="mb-6 py-10">
            <h2 className="text-xl font-semibold mb-4">Nearby Airports</h2>
            <Slider {...settings}>
                {airports.map((airport) => (
                    <div key={airport.id} className="px-2">
                        <div className="border border-gray-300 rounded-lg p-3 text-center hover:shadow-lg transition cursor-pointer">
                            <Image
                                width={1000}
                                height={1000}
                                src={airport.img}
                                alt={airport.name}
                                className="w-full rounded mb-2 h-[200px] max-sm:h-[100px]"
                            />
                            <h4 className="font-medium"
                                style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} // Prevents text overflow
                            >
                                {airport.name}
                            </h4>
                            <p className="text-gray-600">{airport.distance} km away</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default NearbyAirportsSlider;