"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import Footer from "./components/Footer";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Universities from "./components/Parters/Universities";
import Financial_Institutes from "./components/Parters/Financial_Institutes";
import MobileNetworksSlideshow from "./components/Parters/Mobile_Network";
import Nearby_Markets from "./components/Nearby_Markets";
import Expolre_Our_Sites from "./components/Parters/Expolre_Our_Sites";
import Screen_Printers from "./components/Parters/Screen_Printers";
import Hero_Section from "./components/Hero_Section";



export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
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

      <Hero_Section/>

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
        <Nearby_Markets/>

        <div className="p-6 space-y-12">
          {/* Partners Header */}
          <h1 className="text-2xl font-bold text-center py-4">Our Partners</h1>

          <Universities/>

          <Financial_Institutes/>

          <MobileNetworksSlideshow/>

          <Screen_Printers/>

          <Expolre_Our_Sites/>

        </div>
      </div>

      <Footer />
    </div>
  );
}