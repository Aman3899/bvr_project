"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const Screen_Printers = () => {
    return (
        <div>
            {/* Screen Printers Section */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Screen Printers</h2>
                <select className="w-full p-2 border rounded-md bg-white shadow-sm">
                    <option>Select District</option>
                    <option>Lilongwe</option>
                    <option>Blantyre</option>
                    <option>Mzuzu</option>
                    <option>Zomba</option>
                </select>
                <div className="space-y-4">
                    {[
                        { name: "Print Masters", location: "Lilongwe", image: "/marketplace-hero.jpeg" },
                        { name: "Screen Pro", location: "Lilongwe", image: "/marketplace-hero.jpeg" },
                    ].map((printer, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-white shadow-md rounded-md p-4"
                        >
                            <Image width={80} height={100} src={printer.image} alt="PHOTO" className="rounded-full" />
                            <p className="font-medium">{printer.name}</p>
                            <span className="text-sm text-gray-500">{printer.location}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Screen_Printers;