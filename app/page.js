"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

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
    <div className="font-sans relative">
      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white shadow-lg z-50">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={toggleDrawer}
              className="text-white text-2xl hover:text-gray-400"
            >
              ✕
            </button>
          </div>
          <ul className="p-4 space-y-3">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-700">
                <FaHome className="inline-block mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace/Hello"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                <FaShoppingCart className="inline-block mr-2" /> Markets
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                <FaUser className="inline-block mr-2" /> Profile
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                📞 Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Drawer Toggle Button (Displayed Only When Drawer Is Closed) */}
      {!isDrawerOpen && (
        <button
          onClick={toggleDrawer}
          className="absolute top-5 left-5 text-2xl z-50 text-gray-800 bg-gray-200 rounded-md p-2 hover:bg-gray-300"
        >
          <FaBars />
        </button>
      )}

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

      {/* Search Bar */}
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="🔍 Search for products"
          className="w-5/6 p-2 mt-10 max-sm:mt-4 max-sm:mb-1 mb-6 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Nearby Markets Section */}
      <div className="mt-8 px-20 max-sm:px-3">
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

      <Footer />
    </div>
  );
}