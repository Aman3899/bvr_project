"use client";
import Footer from "./components/Footer";
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
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <Navbar heading="DealBank" />

      {/* Hero Section */}
      <Hero_Section />

      {/* Search Bar */}
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="🔍 Search for products"
          className="w-4/5 lg:w-5/6 p-3 mt-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm text-sm"
        />
      </div>

      {/* Nearby Markets Section */}
      <div className="mt-12 px-6 lg:px-20">
        <Nearby_Markets />
      </div>

      {/* Partners Section */}
      <div className="mt-12 p-6 lg:px-20 bg-gray-50 shadow-sm rounded-lg">
        <h1 className="text-3xl font-bold text-center py-6">
          Our Trusted Partners
        </h1>

        <div className="space-y-12">
          <Universities />
          <Financial_Institutes />
          <MobileNetworksSlideshow />
          <Screen_Printers />
          <Expolre_Our_Sites />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
