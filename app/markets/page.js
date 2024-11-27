"use client"
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';


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

  function getMarketplaceNameForRouting(marketplaceName) {
    let arr = marketplaceName.split(" ");
    let Str = "";
    
    
    for (let i = 0; i < arr.length; i++) {
      if ( arr.length - 1 === i) {
        Str = Str + arr[i];
      }
      else {
        Str = Str + arr[i] + "-";
      }
    }
    return Str;
  }



  return (
    <div className="font-sans">

    <div 
      className="flex flex-col items-center justify-center h-[400px] bg-cover bg-center bg-[url('https://th.bing.com/th/id/OIP.klafwZiq4OvQC15BEEsqBgHaJn?pid=ImgDet&w=184&h=239&c=7&dpr=1.3')]"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
  }}
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white">Explore Your City</h1>
        <p className="text-gray-200 mt-2">
          Let’s uncover the best places to eat, drink, and shop nearest to you.
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4 w-11/12 max-w-md">

        {/* "District" Dropdown */}
        <div className="mb-4">
          <label htmlFor="district" className="block text-gray-500 text-sm font-semibold mb-1">
            District
          </label>
          <select
            id="district"
            value={selectedDistrict}
            onChange={handleDistrictChange}
            className="w-full border border-gray-300 rounded-lg bg-gray-100 p-2 text-gray-600"
          >
            <option value="">Select District</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>


        {/* "City" Dropdown */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-500 text-sm font-semibold mb-1">
            City
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full border border-gray-300 rounded-lg bg-gray-100 p-2 text-gray-600"
            disabled={!selectedDistrict} // Disable if no district selected
          >
            <option value="">Select City</option>
            {selectedDistrict &&
              cities[selectedDistrict]?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>


        {/* Search Button */}
        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg font-semibold text-lg hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 3a5 5 0 013.89 8.032l3.267 3.267a1 1 0 01-1.415 1.415l-3.267-3.267A5 5 0 118 3zm2 5a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
          </svg>
          Search
        </button>
      </div>
    </div>

      {/* Page Title */}
      <h1 className="text-4xl text-center py-5 font-bold">DealBank</h1>
      
      {/* Search Bar */}
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="🔍 Search for products"
          className="w-5/6 p-2 mt-10 max-sm:mt-4 max-sm:mb-1 mb-6 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Market Section */}
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
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg"
              >
              <Link href={"/marketplace/" + getMarketplaceNameForRouting(market.name)}>
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
