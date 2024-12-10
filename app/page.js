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
    <div>

        <Navbar heading="DealBank" />

        <Hero_Section />

        {/* Search Bar */}
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="🔍 Search for products"
            className="w-5/6 p-2 mt-10 max-sm:mt-4 max-sm:mb-1 mb-6 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mt-8 px-20 max-sm:px-3">
          <Nearby_Markets />

          <div className="p-6 space-y-12">
            <h1 className="text-2xl font-bold text-center py-4">
              Our Partners
            </h1>

            <Universities />

            <Financial_Institutes />

            <MobileNetworksSlideshow />

            <Screen_Printers />

            <Expolre_Our_Sites />
          </div>
        </div>

        <Footer />
      </div>
  );
}