"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const DealPage = () => {
    const [timeLeft, setTimeLeft] = useState({});

    // Function to calculate remaining time
    function calculateTimeLeft(endTime) {
        const now = new Date().getTime();
        const difference = endTime - now;

        let time = {};
        if (difference > 0) {
            time = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return time;
    }

    useEffect(() => {
        // Calculate sale end time once when the component mounts
        const saleEndTime = new Date().getTime() + 12 * 60 * 60 * 1000;

        // Initialize the timer
        setTimeLeft(calculateTimeLeft(saleEndTime));

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(saleEndTime));
        }, 1000);

        return () => clearInterval(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div className="font-sans py-4 max-sm:mx-4 mx-64 px-4 mt-24">
            {/* Navbar */}
            <Navbar heading="DealBank" />

            {/* Product Image */}
            <div className="flex flex-col justify-center items-center overflow-hidden">
                <Image
                    src="/airport.jpg"
                    alt="iPhone 13"
                    width={1080}
                    height={720}
                    className="w-5/6 max-sm:w-full h-[300px] max-sm:h-[150px] object-cover rounded-t-2xl"
                />
                {/* Product Details */}
                <div className="p-4 bg-gray-200 w-5/6 rounded-b-2xl max-sm:w-full">
                    <h2 className="text-lg font-bold text-gray-800 mb-2">iPhone 13</h2>
                    <div className="flex items-center rounded-br-2xl">
                        <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-l-2xl">
                            Sale
                        </span>
                        <span className="text-blue-500 text-xs font-semibold bg-blue-50 px-3 py-1 rounded-r-2xl">
                            {timeLeft.hours || 0}:{String(timeLeft.minutes || 0).padStart(2, "0")}:
                            {String(timeLeft.seconds || 0).padStart(2, "0")}
                        </span>
                        <span className="text-blue-500 font-semibold text-xs ml-3 px-4 py-1 bg-blue-50 rounded-2xl">
                            20%
                        </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-2xl font-bold text-blue-600">$799</span>
                        <span className="text-gray-400 line-through">$999</span>
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <div className="mt-6 px-20 max-sm:px-0">
                <h2 className="text-xl font-bold">Product Description</h2>
                <p className="text-gray-600 mt-3 leading-relaxed max-sm:text-sm max-sm:text-justify">
                    Get the latest iPhone 13 at an unbeatable price. This limited-time
                    offer includes cutting-edge features, sleek design, and powerful
                    performance. Don’t miss this opportunity to upgrade your smartphone
                    experience today!
                </p>
            </div>

            {/* Product Details */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm px-20 max-sm:px-0">
                <div>
                    <h3 className="font-semibold text-gray-600">Category</h3>
                    <p className="font-medium">Electronics</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-600">Unit</h3>
                    <p className="font-medium">1 piece</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-600">Original Price</h3>
                    <p className="font-medium line-through text-gray-400">$999</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-600">Discounted Price</h3>
                    <p className="font-medium text-blue-600">$799</p>
                </div>
            </div>

            {/* Seller Information */}
            <div className="mx-20 max-sm:mx-0 mt-8 flex items-center border-2 border-gray-300 rounded-3xl px-6 py-2 max-sm:px-3">
                <Image
                    width={1000}
                    height={500}
                    src="/marketplace-hero.jpeg" // Replace with the seller's image
                    alt="John Smith"
                    className="rounded-full w-16 h-16 object-cover"
                />
                <div className="ml-4">
                    <h3 className="text-lg font-bold">John Smith</h3>
                    <p className="text-gray-600 text-sm">
                        Client satisfaction is my first priority!
                    </p>
                    <div className="flex items-center mt-2">
                        <FaPhoneAlt className="text-green-600 mr-2" />
                        <Link
                            href="tel:+923231210102"
                            className="text-blue-500 font-medium hover:underline"
                        >
                            +92 323 1210102
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealPage;