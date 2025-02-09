"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEdit, FaNotesMedical, FaBackward } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Image from "next/image";

const MarketManagement = () => {
  let router = useRouter();

  // State to track the hovered option
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      name: "Manage Marketplaces",
      icon: <FaEdit />,
      link: "/manage_marketplaces",
      image: "/marketplace-image.jpeg", // Image for hover
      description: "Edit the details of your market including name, description, and other related information.",
    },
    {
      name: "Manage Products",
      icon: <FaNotesMedical />,
      link: "/manage_products",
      image: "/marketplace-hero.jpeg", // Image for hover
      description: "Manage the products in your marketplace, update pricing, inventory, and more.",
    },
  ];

  return (
    <>
      <Navbar header="Market Management" />
      <motion.div
        className="flex h-screen bg-gray-100 mt-[87px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section: Options List */}
        <div className="w-full md:w-1/3 h-full bg-gradient-to-r from-blue-600 to-teal-500 p-6 rounded-tl-xl shadow-xl flex flex-col space-y-6">
          {/* Go Back Button */}
          <button
            onClick={() => router.back()}
            className="text-white text-xl hover:text-gray-200 transition duration-300"
          >
            <FaBackward />
          </button>

          {/* Option List */}
          <ul className="space-y-6">
            {options.map((option, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-between py-4 px-6 bg-white rounded-lg shadow-md text-gray-800 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
                whileHover={{ scale: 1.05, rotate: 2 }}
                onMouseEnter={() => setSelectedOption(index)} // Set selected on hover
                onMouseLeave={() => setSelectedOption(null)} // Reset on leave
              >
                <Link href={option.link} className="flex items-center space-x-3">
                  <span className="text-2xl text-teal-600">{option.icon}</span>
                  <span className="font-medium">{option.name}</span>
                </Link>
                <i className="fas fa-chevron-right text-gray-400"></i>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section: Detailed Information (Hidden on mobile and tablets) */}
        <div className="hidden md:block w-2/3 h-full bg-white p-6 rounded-tr-xl shadow-xl flex flex-col items-center justify-center">
          {selectedOption !== null ? (
            <>
              {/* Display Image and Details based on selected option */}
              <Image
                width={1920}
                height={1080}
                src={options[selectedOption].image}
                alt={options[selectedOption].name}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <h2 className="mt-4 text-2xl font-semibold text-gray-800">{options[selectedOption].name}</h2>
              <p className="mt-2 text-lg text-gray-600">{options[selectedOption].description}</p>
            </>
          ) : (
            <p className="text-lg text-gray-600">Hover over an option to view details.</p>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default MarketManagement;
