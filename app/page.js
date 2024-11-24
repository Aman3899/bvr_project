"use client"
import Image from "next/image";
import Link from "next/link";
import {  } from "react-icons/si";
import { FaHome, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa"
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="font-sans">

      <h1 className="text-4xl text-center py-5 font-bold">DealBank</h1>

      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/marketplace-hero.jpeg"
          alt="Marketplace Hero"
          width={1920}
          height={1080}
          className="w-full h-[400px] object-cover rounded-3xl bg-none max-sm:h-[275px] max-sm:px-5"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center rounded-3xl text-white bg-black/40 max-sm:px-5">
          <h1 className="text-4xl font-bold mb-2 max-sm:text-3xl">Discover, Trade, Connect</h1>
          <p className="text-lg mb-4 max-sm:text-sm">Explore the vibrant markets of Malawi</p>
          <div className="flex gap-4">
            <Link href={"/postRequest"} className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">
              Post Request
            </Link>
            <Link href={"/listMarket"} className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700">
              List Market
            </Link>
          </div>
        </div>
      </div>

        <div className="flex items-center justify-center w-full mt-6 border rounded-lg text-gray-600 placeholder-gray-400 max-sm:w-80 max-sm:ml-6">
          <FaSearch className="text-2xl text-black ml-5"/>

          <input
            type="text"
            placeholder="Search markets and products"
            className="px-1 py-3 ml-5 w-full"
          />

        </div>



      {/* Nearby Markets Section */}
      <div className="mt-8 px-20 max-sm:px-3">
        <h2 className="text-xl font-bold mb-4">Nearby Markets</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Farmer's Market", image: "/marketplace-image.jpeg" },
            { name: "Crafts Market", image: "/marketplace-image.jpeg" },
            { name: "Fish Market", image: "/marketplace-image.jpeg" },
            { name: "Spice Market", image: "/marketplace-image.jpeg" },
            { name: "Clothing Market", image: "/marketplace-image.jpeg" },
            { name: "Food Market", image: "/marketplace-image.jpeg" },
          ].map((market, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg"
            >
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
          ))}
        </div>
      </div>

      
      <Footer />
    </div>
  );
}