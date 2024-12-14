import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NearbyAirportsSlider = () => {

    const airports = [
        { id: 1, name: "Lilongwe Airport", distance: "10", img: "/lingowe_nearby_airport.jpeg" },
        { id: 2, name: "LAX Airport", distance: "15", img: "/airplane.png" },
        { id: 3, name: "ORD Airport", distance: "20", img: "/airplane.png" },
        { id: 4, name: "Kamuzu International Airport", distance: "15", img: "/airplane.png" },
        { id: 5, name: "Chileka International Airport", distance: "25", img: "/airplane.png" },
        { id: 6, name: "Mzuzu Airport", distance: "30", img: "/airplane.png" },
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
                                className="w-full rounded mb-2 h-[200px] max-sm:h-fit"
                            />
                            <h4 className="font-medium">{airport.name}</h4>
                            <p className="text-gray-600">{airport.distance} km away</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default NearbyAirportsSlider;