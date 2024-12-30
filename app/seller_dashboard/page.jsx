"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SellerDashboard() {
    return (
        <>
            <div className="bg-gray-50 min-h-screen py-5 px-4 sm:px-6 lg:px-48 max-sm:px-4 max-sm:py-5 mt-[80px]">
                <Navbar heading="Seller Dashboard" />

                {/* Profile Section */}
                <div className="flex flex-col items-center text-center mb-8 animate__animated animate__fadeIn">
                    <Image
                        width={1000}
                        height={1000}
                        src="/marketplace-hero.jpeg"
                        alt="Seller Avatar"
                        className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
                    />
                    <h2 className="text-2xl font-bold text-gray-800">John Smith</h2>
                    <p className="text-gray-500">@johnsmith</p>
                    <Link
                        href="/add_marketplace"
                        className="w-full mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
                    >
                        + Add Market
                    </Link>
                </div>

                {/* Uploaded Markets Section */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Uploaded Markets</h3>
                    <div className="space-y-4">
                        {["Market #1", "Handmade Crafts", "Vintage Clothing"].map((market, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between transform transition duration-300 ease-in-out hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div>
                                    <h4 className="font-medium text-gray-800">{market}</h4>
                                    <p className="text-blue-500">View Details</p>
                                </div>
                                <i className={`fas ${index === 0 ? "fa-check text-green-500" : index === 1 ? "fa-hourglass text-yellow-500" : "fa-times text-red-500"}`}></i>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Customer Requests Section */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Customer Requests</h3>
                    <div className="space-y-4">
                        {["Alice Johnson", "Michael Brown"].map((customer, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 hover:bg-gray-100 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    src="/marketplace-hero.jpeg"
                                    alt="Customer Avatar"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h4 className="font-medium text-gray-800">{customer}</h4>
                                    <p className="text-gray-500">Budget: ${index === 0 ? 200 : 150}, Time: {index === 0 ? "2 days" : "3 days"}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Plans Section */}
                <section>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Plans</h3>
                    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
                        {["Bid Plan", "Boost Plan"].map((plan, index) => (
                            <div key={index} className="flex items-center">
                                <input type="radio" id={`plan-${index}`} name="plan" className="mr-2" />
                                <label htmlFor={`plan-${index}`} className="text-gray-700">{plan}</label>
                            </div>
                        ))}
                    </div>
                    <motion.button
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                    >
                        Go to Plan
                    </motion.button>
                </section>
            </div>
            <Footer />

        </>
    );
}
