"use client";
import React, { useState } from "react";
import Image from "next/image";

const Screen_Printers = () => {
    const printers = [
        { name: "Print Masters", location: "Lilongwe", image: "/marketplace-hero.jpeg" },
        { name: "Screen Pro", location: "Lilongwe", image: "/marketplace-hero.jpeg" },
        { name: "Elite Prints", location: "Blantyre", image: "/marketplace-hero.jpeg" },
        { name: "Zomba Prints", location: "Zomba", image: "/marketplace-hero.jpeg" },
    ];

    const [selectedLocation, setSelectedLocation] = useState("");

    // Filter printers by location
    const filteredPrinters = selectedLocation
        ? printers.filter((printer) => printer.location === selectedLocation)
        : printers;

    return (
        <div className="bg-gray-50 p-2 rounded-lg shadow-sm">
            {/* Section Header */}
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
                Screen Printers
            </h2>

            {/* District Selector */}
            <div className="mb-6">
                <select
                    className="w-full p-3 border rounded-lg bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                >
                    <option value="">Select District</option>
                    <option value="Lilongwe">Lilongwe</option>
                    <option value="Blantyre">Blantyre</option>
                    <option value="Mzuzu">Mzuzu</option>
                    <option value="Zomba">Zomba</option>
                </select>
            </div>

            {/* Printers List */}
            <div className="space-y-4">
                {filteredPrinters.length > 0 ? (
                    filteredPrinters.map((printer, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition-shadow"
                        >
                            {/* Circle Image */}
                            <div className="w-16 h-16 relative">
                                <Image
                                    src={printer.image}
                                    alt={`${printer.name} logo`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full border border-gray-200"
                                />
                            </div>

                            {/* Printer Details */}
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">{printer.name}</h3>
                            </div>
                            
                            <p className="text-sm text-gray-500 mr-4">{printer.location}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No printers available for the selected district.</p>
                )}
            </div>
        </div>
    );
};

export default Screen_Printers;