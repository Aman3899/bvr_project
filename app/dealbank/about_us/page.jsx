"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

const AboutUs = () => {

    return (
        <>
            <Navbar heading="DealBank" />
            <div className=" p-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Text Section */}
                    <div className="text-gray-800">
                        <h1 className="text-4xl font-bold mb-4 max-sm:text-2xl max-sm:text-center">About DealBank</h1>
                        <p className="text-lg leading-7 mb-4 text-justify max-sm:text-sm">
                            Dealbank is the largest database of prices of farm produce in all forms e.g. fresh, dry and
                            all measurements e.g. 250g, 1kg from all markets across Malawi.
                            We also provide a platform for sellers to promote and sell their products through Deals & Discounts,
                            Bids & Tenders giving our buyers much needed information on pricing availability of products and
                            smart way to do business near them and beyond.
                        </p>
                        <p className="text-lg leading-7 text-justify max-sm:text-sm">
                            Our commitment to sustainability and quality ensures that you get the best products while supporting
                            ethical and eco-friendly practices.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <Image
                            src="/favicon.ico"
                            alt="About DealBank"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;