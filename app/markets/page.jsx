"use client";
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import MarketSlider from '../components/All_Markets';

const Page = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const districts = [
    'Blantyre', 'Lilongwe', 'Mzimba', 'Zomba', 'Mangochi', 'Mulanje', 'Salima',
  ];

  const cities = {
    Blantyre: ['Limbe', 'Chilomoni', 'Soche'],
    Lilongwe: ['Area 25', 'Area 18', 'Kawale'],
    Mzimba: ['Mzimba Boma', 'Euthini', 'Enukweni'],
    Zomba: ['Zomba City', 'Thondwe', 'Chancellor College Area'],
    Mangochi: ['Mangochi Town', 'Monkey Bay', 'Malindi'],
    Mulanje: ['Mulanje Boma', 'Lujeri', 'Phalombe'],
    Salima: ['Salima Boma', 'Senga Bay', 'Nkhotakota'],
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedCity(''); // Reset city when district changes
  };

  return (
    <div className="font-sans mt-20">
      <Navbar heading="DealBank" />

      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center h-[400px] bg-cover bg-center bg-[url('https://th.bing.com/th/id/OIP.klafwZiq4OvQC15BEEsqBgHaJn?pid=ImgDet&w=184&h=239&c=7&dpr=1.3')]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Explore Your City</h1>
          <p className="text-gray-200 mt-2">
            Let’s uncover the best places to eat, drink, and shop nearest to you.
          </p>
        </div>

        {/* Search Section */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* District Dropdown */}
          <div className="mb-4">
            <label htmlFor="district" className="block text-gray-500 text-sm font-semibold mb-1">
              District
            </label>
            <motion.select
              id="district"
              value={selectedDistrict}
              onChange={handleDistrictChange}
              className="w-full border border-gray-300 rounded-lg bg-gray-100 p-2 text-gray-600"
              whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </motion.select>
          </div>

          {/* City Dropdown */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-500 text-sm font-semibold mb-1">
              City
            </label>
            <motion.select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg bg-gray-100 p-2 text-gray-600"
              disabled={!selectedDistrict}
              whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <option value="">Select City</option>
              {selectedDistrict &&
                cities[selectedDistrict]?.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </motion.select>
          </div>

          {/* Search Bar */}
          <motion.div
            className="flex justify-center items-center mt-6"
            whileHover={{ scale: 1.05 }}
          >
            <input
              type="text"
              placeholder="🔍 Search for products"
              className="w-4/5 lg:w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm text-sm"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Page Title */}
      <motion.h1
        className="text-4xl text-center py-5 font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        DealBank
      </motion.h1>

      {/* Market Section */}
      <MarketSlider />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;