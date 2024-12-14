"use client"
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";


const ProductPage = ({ params }) => {

    console.log({ params });

    return (
        <div className="font-sans py-4 max-sm:mx-4 mx-64 px-4">
            {/* Navbar */}
            <Navbar heading="DealBank" />

            {/* Product Image */}
            <div className="flex flex-col justify-center items-center overflow-hidden">
                <Image
                    src="/iphone.jpeg"
                    alt="iPhone 13"
                    width={1080}
                    height={720}
                    className="w-5/6 max-sm:w-full h-[300px] max-sm:h-[150px] object-cover rounded-t-2xl"
                />
                {/* Product Details */}
                <div className="flex justify-between px-6 pt-3 bg-gray-200 w-5/6 rounded-b-2xl max-sm:w-full">
                    <h2 className="text-lg font-bold text-gray-800 mb-2">iPhone 13</h2>
                    <h2 className="text-2xl font-bold text-blue-600 mb-2">$999</h2>
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

export default ProductPage;