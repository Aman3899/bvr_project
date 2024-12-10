"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaHome, FaShoppingCart, FaUser } from 'react-icons/fa';


const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <div className="flex flex-col justify-center items-center bg-gray-200">

            <div className="font-sans relative w-full max-sm:w-full bg-white">
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
            </div>
        </div>
    )
}

export default Navbar;