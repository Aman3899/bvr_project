"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import ReactChartJS from "@/app/components/ReactChartJS";



function getMarketplaceNameForRouting(marketplaceName) {
    let arr = marketplaceName.split(" ");
    let Str = "";


    for (let i = 0; i < arr.length; i++) {
        if (arr.length - 1 === i) {
            Str = Str + arr[i];
        }
        else {
            Str = Str + arr[i] + "-";
        }
    }
    return Str;
}



const Marketplace = ({ params }) => {
    
    const products = [
        { id: 1, name: "Apple", price: "MWK 5000", img: "/marketplace-hero.jpeg", },
        { id: 2, name: "Banana", price: "MWK 3000", img: "/marketplace-hero.jpeg", },
        { id: 3, name: "Handmade Crafts", price: "MWK 5000", img: "/marketplace-hero.jpeg", },
        { id: 4, name: "Fresh Produce", price: "MWK 3000", img: "/marketplace-hero.jpeg", },
        { id: 5, name: "cenjisrehi", price: "MWK 3000", img: "/marketplace-hero.jpeg", },
        { id: 6, name: "aw rjnjik jb", price: "MWK 3000", img: "/marketplace-hero.jpeg", },
    ];


    const categories = [
        {
            title: "Utilities",
            options: [{ name: "Electricity", checked: true }, { name: "Water Supply", checked: false }, { name: "Parking", checked: false }, { name: "Security", checked: false },],
        },
        {
            title: "Amenities",
            options: [{ name: "Restrooms", checked: true }, { name: "Food Court", checked: false }, { name: "Wi-Fi", checked: false }, { name: "ATM", checked: false },],
        },
        {
            title: "Compliance",
            options: [{ name: "Fire Safety", checked: true }, { name: "Health Regulations", checked: false }, { name: "Accessibility", checked: false }, { name: "Licensing", checked: true },],
        },
        {
            title: "Sanitation",
            options: [{ name: "Waste Disposal", checked: true }, { name: "Cleaning Services", checked: false }, { name: "Pest Control", checked: true }, { name: "Recycling", checked: false },],
        },
    ];


    const nearbyMarkets = [
        { id: 1, name: "Market A", img: "/marketplace-hero.jpeg" },
        { id: 2, name: "Market B", img: "/marketplace-image.jpeg" },
    ];

    let router = useRouter();

    return (
        <div className="font-sans p-4 mx-auto bg-gray-50 px-20 max-sm:px-4">
            <Navbar heading="DealBank" />

            <Image
                src="/marketplace-hero.jpeg"
                alt="Marketplace Hero"
                width={1920}
                height={1080}
                className="px-12 max-sm:px-1 w-full h-[500px] object-cover rounded-3xl bg-none max-sm:h-[250px]"
            />

            <div className="mx-32 max-sm:mx-5 h-[500px] mt-[113px] max-sm:mt-[100px] max-sm:h-[250px] absolute inset-0 
                            flex flex-col justify-center items-center text-white bg-black/30 rounded-3xl max-sm:px-3">
                <h1 className="text-3xl font-bold mb-2 sm:text-3xl text-center">{params.slug[0]}</h1>
            </div>


            {/* Search Bar */}
            <div className="flex justify-center items-center">
                <input
                    type="text"
                    placeholder="🔍 Search for products"
                    className="w-5/6 p-2 mt-10 max-sm:mt-4 max-sm:mb-1 mb-6 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>

            {/* Product Cards */}
            <h2 className="text-xl font-semibold mb-2 mt-5">Current Deals</h2>
            <div className="grid grid-cols-3 gap-4 mb-6 max-sm:grid-cols-2">

                {products.map((product, index) => (
                    <Link href={"/product/" + getMarketplaceNameForRouting(product.name)} key={product.id}>
                        <div className="border border-gray-300 rounded-lg p-3 text-center hover:shadow-lg transition cursor-pointer">
                            <Image
                                width={1000}
                                height={1000}
                                src={product.img}
                                alt={product.name}
                                className="w-full rounded mb-2 h-[200px] max-sm:h-fit"
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
                <div className="flex flex-col">
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-sm text-gray-600 mb-1">Client satisfaction is my first priority!</p>
                    <Link href="tel:+923221210102" className="text-blue-500 hover:underline"> +92 322 1210102</Link>
                </div>
            </div>



            <ReactChartJS/>



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

            <Footer />
        </div>
    );
};

export default Marketplace;