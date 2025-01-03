"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchSection from '../components/AllMarkets/SearchFunc';
import MarketSlider from '../components/All_Markets';


const Page = () => {
  return (
    <div className="font-sans mt-20">
      <Navbar heading="DealBank" />

      {/* Hero Section */}
      <motion.div
        className="relative h-[400px] bg-cover bg-center bg-[url('https://th.bing.com/th/id/OIP.klafwZiq4OvQC15BEEsqBgHaJn?pid=ImgDet&w=184&h=239&c=7&dpr=1.3')]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Your City
            </h1>
            <p className="text-xl text-gray-200">
              Let&apos;s uncover the best places to eat, drink, and shop nearest to you.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Search Section */}
      <div className="relative -mt-24">
        <SearchSection />
      </div>

      {/* Market Section */}
      <MarketSlider />

      <Footer />
    </div>
  );
};

export default Page;