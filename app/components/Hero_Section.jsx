"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Hero_Section = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative flex justify-center max-sm:mx-3">
                <Image
                    src="/marketplace-hero.jpeg"
                    alt="Marketplace Hero"
                    width={1920}
                    height={1080}
                    className="mx-16 max-sm:mx-4 w-full h-[500px] object-cover rounded-3xl bg-none max-sm:h-[300px] border-2 border-black"
                />
                <div className="mx-16 max-sm:mx-0 max-sm:h-[300px] absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30 rounded-3xl px-4 sm:px-3">
                    <h1 className="text-4xl font-bold mb-2 sm:text-3xl text-center">
                        Discover, Trade, Connect
                    </h1>
                    <p className="text-lg mb-4 sm:text-sm text-center">
                        Explore the vibrant markets of Malawi
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href={"/post_request"}
                            className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100"
                        >
                            Post Request
                        </Link>
                        <Link
                            href={"/list_market"}
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