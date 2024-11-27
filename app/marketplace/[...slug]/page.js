"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { FaBackward } from "react-icons/fa";
import { useRouter } from "next/navigation";


function getMarketplaceNameForRouting(marketplaceName) {
    let arr = marketplaceName.split(" ");
    let Str = "";
    
    
    for (let i = 0; i < arr.length; i++) {
        if ( arr.length - 1 === i) {
            Str = Str + arr[i];
        }
        else {
            Str = Str + arr[i] + "-";
        }
    }
    return Str;
}


const Marketplace = () => {
    
    const products = [
        {
            id: 1,
            name: "Apple",
            price: "MWK 5000",
            img: "/marketplace-hero.jpeg",
        },
        {
            id: 2,
            name: "Banana",
            price: "MWK 3000",
            img: "/marketplace-hero.jpeg",
        },
        {
            id: 3,
            name: "Handmade Crafts",
            price: "MWK 5000",
            img: "/marketplace-hero.jpeg",
        },
        {
            id: 4,
            name: "Fresh Produce",
            price: "MWK 3000",
            img: "/marketplace-hero.jpeg",
        },
        {
            id: 5,
            name: "cenjisrehi",
            price: "MWK 3000",
            img: "/marketplace-hero.jpeg",
        },
        {
            id: 6,
            name: "aw rjnjik jb",
            price: "MWK 3000",
            img: "/marketplace-hero.jpeg",
        },
    ];


    const categories = [
        {
          title: "Utilities",
          options: [
            { name: "Electricity", checked: true },
            { name: "Water Supply", checked: false },
            { name: "Parking", checked: false },
            { name: "Security", checked: false },
          ],
        },
        {
          title: "Amenities",
          options: [
            { name: "Restrooms", checked: true },
            { name: "Food Court", checked: false },
            { name: "Wi-Fi", checked: false },
            { name: "ATM", checked: false },
          ],
        },
        {
          title: "Compliance",
          options: [
            { name: "Fire Safety", checked: true },
            { name: "Health Regulations", checked: false },
            { name: "Accessibility", checked: false },
            { name: "Licensing", checked: false },
          ],
        },
        {
          title: "Sanitation",
          options: [
            { name: "Waste Disposal", checked: true },
            { name: "Cleaning Services", checked: false },
            { name: "Pest Control", checked: false },
            { name: "Recycling", checked: false },
          ],
        },
      ];



    const nearbyMarkets = [
        { id: 1, name: "Market A", img: "/marketplace-hero.jpeg" },
        { id: 2, name: "Market B", img: "/marketplace-hero.jpeg" },
    ];

    let router = useRouter();

    return (
        <div className="font-sans p-4 mx-auto bg-gray-50">
            {/* Header */}
            <div className="flex items-center justify-between py-5">
                <button onClick={() => { router.back() }} className="text-xl text-gray-600"><FaBackward /></button>
                <h1 className="text-2xl font-bold text-center flex-1">Lilongwe Flea Market</h1>
            </div>
            
            <Image
                width={1000}
                height={1000}
                src="/marketplace-hero.jpeg"
                alt="Market Banner"
                className="w-full rounded-lg mb-4 h-[500px] max-sm:h-[200px]"
            />

            {/* Search Bar */}
            <input
                type="text"
                placeholder="🔍 Search for products"
                className="w-full p-2 mb-6 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            />

            {/* Product Cards */}
            <h2 className="text-xl font-semibold mb-2">Current Deals</h2>
            <div className="grid grid-cols-3 gap-4 mb-6 max-sm:grid-cols-2">

                {products.map((product, index) => (
                    <Link href={"/marketplace/" + getMarketplaceNameForRouting(product.name)} key={product.id}>
                        <div className="border border-gray-300 rounded-lg p-3 text-center hover:shadow-lg transition cursor-pointer">

                            <Image
                                width={1000}
                                height={1000}
                                src={product.img}
                                alt={product.name}
                                className="w-full rounded mb-2 h-[250px] max-sm:h-fit"
                            />
                            <h4 className="font-medium">{product.name}</h4>
                            <p className="text-green-600 font-bold">{product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Seller Profile */}
            <h2 className="text-xl font-semibold mb-2">Seller Profile</h2>
            <div className="flex items-center border border-gray-300 rounded-lg p-4 mb-6">
                <Image
                    width={1000}
                    height={1000}
                    src="/marketplace-hero.jpeg"
                    alt="Seller"
                    className="rounded-full mr-4 w-16 h-16"
                />
                <div>
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-sm text-gray-600 mb-1">
                        Client satisfaction is my first priority!
                    </p>
                    <a href="tel:+923221210102" className="text-blue-500 hover:underline">
                        +92 322 1210102
                    </a>
                </div>
            </div>

            {/* Price Change Chart */}
            <h2 className="text-xl font-semibold mb-2">Price Change Chart</h2>
            <div className="flex flex-col justify-center items-center border border-gray-300 rounded-lg p-4 mb-6">
                <h3 className="font-medium">Tomato Prices</h3>
                <p className="text-green-600 font-bold mb-2">
                    $1.20 (Last 12 hours +5%)
                </p>
                <Image
                    width={1000}
                    height={1000}
                    src="/marketplace-hero.jpeg"
                    alt="Chart"
                    className="w-[500px] rounded"
                />
            </div>

            {/* Market Features */}
            <h2 className="text-xl font-semibold mb-2">Market Features</h2>
            {categories.map((category, index) => (
                <div key={index} className="mb-6 bg-gray-200 px-6 py-3 rounded-lg">
                    <h2 className="text-lg font-semibold mb-2">{category.title}</h2>
                    <ul className="space-y-2">
                        {category.options.map((option, idx) => (
                            <li key={idx} className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={option.checked}
                                    readOnly
                                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-0 cursor-not-allowed"
                                />
                                <span className={option.checked ? "font-medium" : "text-gray-500"}>
                                    {option.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {/* Market Essentials */}
            <h2 className="text-xl font-semibold mb-2">Market Essentials</h2>
            <table className="w-full border-collapse border border-gray-300 mb-6">
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2 font-medium">
                            Market Type
                        </td>
                        <td className="border border-gray-300 p-2">Flea</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 font-medium">
                            Transaction
                        </td>
                        <td className="border border-gray-300 p-2">Cash</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 font-medium">Language</td>
                        <td className="border border-gray-300 p-2">Chichewa</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 font-medium">Hours</td>
                        <td className="border border-gray-300 p-2">09:00 AM - 05:00 PM</td>
                    </tr>
                </tbody>
            </table>

            {/* Nearby Markets */}
            <h2 className="text-xl font-semibold mb-2">Nearby Markets</h2>
            <div className="grid grid-cols-2 gap-4">
                {nearbyMarkets.map((market) => (
                    <div
                        key={market.id}
                        
                        className="border border-gray-300 rounded-lg p-3 text-center hover:shadow-lg transition cursor-pointer"
                    >
                        <Image
                            width={1000}
                            height={1000}
                            src={market.img}
                            alt={market.name}
                            className="w-full h-[300px] rounded mb-2 max-sm:h-fit"
                        />
                        <h4 className="font-medium">{market.name}</h4>
                    </div>
                ))}
            </div>

            <Footer/>
        </div>
    );
};

export default Marketplace;