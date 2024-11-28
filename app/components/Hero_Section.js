"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Hero_Section = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative">
                <Image
                    src="/marketplace-hero.jpeg"
                    alt="Marketplace Hero"
                    width={1920}
                    height={1080}
                    className="w-full h-[400px] object-cover rounded-3xl bg-none max-sm:h-[275px] max-sm:px-5"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/20 max-sm:px-5">
                    <h1 className="text-4xl font-bold mb-2 max-sm:text-3xl">
                        Discover, Trade, Connect
                    </h1>
                    <p className="text-lg mb-4 max-sm:text-sm">
                        Explore the vibrant markets of Malawi
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href={"/postRequest"}
                            className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100"
                        >
                            Post Request
                        </Link>
                        <Link
                            href={"/listMarket"}
                            className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700"
                        >
                            List Market
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero_Section;