"use client"
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';


const Page = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Data for districts and cities
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
    <div className="font-sans">
      {/* Page Title */}
      <h1 className="text-4xl text-center py-5 font-bold">DealBank</h1>

      {/* Dropdowns for District and City */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        {/* District Dropdown */}
        <select
          value={selectedDistrict}
          onChange={handleDistrictChange}
          className="border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="" disabled>
            Select District
          </option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>

        {/* City Dropdown */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
          disabled={!selectedDistrict}
        >
          <option value="" disabled>
            {selectedDistrict ? 'Select City' : 'Select a District First'}
          </option>
          {selectedDistrict &&
            cities[selectedDistrict]?.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center w-full mt-6 border rounded-lg text-gray-600 placeholder-gray-400 max-sm:w-80 max-sm:ml-6">
        <FaSearch className="text-2xl text-black ml-5" />
        <input
          type="text"
          placeholder="Search markets and products"
          className="px-1 py-3 ml-5 w-full"
        />
      </div>

      {/* Market Section */}
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
              <Link href={"/product/grain"}>
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
              </Link>
              </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
