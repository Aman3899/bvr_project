"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Nearby_Markets = () => {


    function getMarketplaceNameForRouting(marketplaceName) {

        let arr = marketplaceName.split(" ");
        let Str = "";

        for (let i = 0; i < arr.length; i++) {
            if (arr.length - 1 === i) {
                Str = Str + arr[i];
            } else {
                Str = Str + arr[i] + "-";
            }
        }
        return Str;
    }

    return (
        <div>
            {/* Nearby Markets Section */}
            <h2 className="text-xl font-bold mb-4">Nearby Markets</h2>
            <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
                {[
                    { name: "Farmer's Market", image: "/marketplace-image.jpeg" },
                    { name: "Crafts Market", image: "/marketplace-image.jpeg" },
                    { name: "Fish Market", image: "/marketplace-image.jpeg" },
                    { name: "Spice Market", image: "/marketplace-image.jpeg" },
                    { name: "Clothing Market", image: "/marketplace-image.jpeg" },
                    { name: "Food Market", image: "/marketplace-image.jpeg" },
                ].map((market, index) => (
                    <Link
                        href={"/marketplace/" + getMarketplaceNameForRouting(market.name)}
                        key={index}
                    >
                        <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
                            <Image
                                src={market.image}
                                alt={market.name}
                                width={300}
                                height={200}
                                className="w-full h-40 object-cover max-sm:h-20"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-md font-semibold">{market.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Nearby_Markets;