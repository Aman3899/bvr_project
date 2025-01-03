"use client";
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { FiTrendingUp } from 'react-icons/fi';
import Footer from "./components/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Universities from "./components/Parters/Universities";
import Financial_Institutes from "./components/Parters/Financial_Institutes";
import MobileNetworksSlideshow from "./components/Parters/Mobile_Network";
import Expolre_Our_Sites from "./components/Parters/Expolre_Our_Sites";
import Screen_Printers from "./components/Parters/Screen_Printers";
import Hero_Section from "./components/Hero_Section";
import Navbar from "./components/Navbar";
import About_Dealbank from "./components/About_Dealbank";
import HowWeDoIt from "./components/How_We_Do_It";
import InternshipProgram from "./components/Internship_Program";
import MarketSlider from './components/All_Markets';



const FuturisticSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const trendingSearches = [
    'Electronics', 'Fashion', 'Home Decor', 'Books', 'Local Markets'
  ];

  const handleClear = () => {
    setSearchValue('');
    setIsExpanded(false);
  };

  return (
    <div className="relative w-4/5 lg:w-2/3 mx-auto">
      <div className={`
        relative 
        transition-all duration-500 ease-out
        ${isExpanded ? 'scale-105' : 'scale-100'}
        ${isFocused ? 'translate-y-2' : ''}
      `}>
        <div className={`
          flex items-center
          bg-white
          rounded-full
          border-2
          transition-all duration-300
          ${isFocused 
            ? 'border-blue-500 shadow-lg shadow-blue-200' 
            : 'border-gray-200 shadow-md'
          }
          relative
          overflow-hidden
        `}>
          <div className={`
            absolute inset-0
            bg-gradient-to-r from-blue-50 to-purple-50
            opacity-0 transition-opacity duration-300
            ${isFocused ? 'opacity-100' : ''}
          `} />

          <BsSearch className={`
            absolute left-4
            text-xl
            transition-all duration-300
            ${isFocused ? 'text-blue-500 scale-110' : 'text-gray-400'}
          `} />

          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => {
              setIsFocused(true);
              setIsExpanded(true);
            }}
            onBlur={() => {
              setIsFocused(false);
              setTimeout(() => setIsExpanded(false), 200);
            }}
            placeholder="Search for products, markets, or services..."
            className={`
              w-full
              py-4 pl-12 pr-12
              bg-transparent
              text-gray-800
              placeholder-gray-400
              focus:outline-none
              relative z-10
              transition-all duration-300
              ${isFocused ? 'text-lg' : 'text-base'}
            `}
          />

          {searchValue && (
            <button
              onClick={handleClear}
              className="absolute right-4 p-1 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              <IoClose className="text-gray-500 text-xl" />
            </button>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className={`
          absolute w-full
          mt-4
          bg-white
          rounded-2xl
          shadow-xl
          border border-gray-100
          p-4
          z-50
          transition-all duration-300
          animate-slideDown
        `}>
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FiTrendingUp className="text-blue-500" />
                <span className="text-sm font-medium text-gray-600">
                  Trending Searches
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {trendingSearches.map((item) => (
                  <div
                    key={item}
                    className={`
                      p-2
                      rounded-lg
                      cursor-pointer
                      transition-all duration-300
                      hover:bg-blue-50
                      hover:text-blue-600
                      text-gray-600
                      text-sm
                      flex items-center gap-2
                    `}
                  >
                    <BsSearch className="text-xs" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-white text-gray-800 mt-20">
      <Navbar heading="DealBank" />
      <Hero_Section />
      
      {/* Enhanced Search Bar */}
      <div className="mt-10">
        <FuturisticSearch />
      </div>

      <div className="px-6 max-sm:px-0">
        <MarketSlider />
      </div>

      <About_Dealbank />
      <HowWeDoIt />
      <InternshipProgram />

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

      <Footer />
    </div>
  );
}