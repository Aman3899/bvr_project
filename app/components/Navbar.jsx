"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
    FaAd,
    FaBars,
    FaHome,
    FaPhoneAlt,
    FaSearchLocation,
    FaShoppingBag,
    FaShoppingCart,
    FaUser,
} from "react-icons/fa";

const Navbar = (Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <div className="fixed top-0 left-0 w-full bg-gray-200 border-b border-gray-400 z-50">
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
                                    href="/markets"
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    <FaShoppingCart className="inline-block mr-2" /> Markets
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/login"
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    <FaUser className="inline-block mr-2" /> Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    <FaPhoneAlt className="inline-block mr-2" /> Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    <FaShoppingBag className="inline-block mr-2" /> All Markets
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    <FaSearchLocation className="inline-block mr-2" /> Districts
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    <FaAd className="inline-block mr-2" /> Advertise
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Drawer Toggle Button (Displayed Only When Drawer Is Closed) */}
                {!isDrawerOpen && (
                    <button
                        onClick={toggleDrawer}
                        className="absolute top-5 left-5 text-xl z-50 text-gray-800 bg-gray-200 rounded-md p-2 hover:bg-gray-300"
                    >
                        <FaBars />
                    </button>
                )}

                <div className="max-sm:text-xl flex justify-around items-center py-5 font-bold">
                    <Link href={"/"} className="flex gap-x-5">
                        <Image
                            width={45}
                            height={45}
                            src={"/favicon.ico"}
                            alt={"Logo"}
                            className="rounded-full"
                        />
                        <p className="text-3xl">{Props.heading}</p>
                    </Link>
                    <div className="flex justify-evenly items-center max-sm:hidden gap-x-10">
                        <Link href={"/"} className="text-sm max-sm:hidden">
                            Home
                        </Link>
                        <Link href={"/markets"} className="text-sm max-sm:hidden">
                            All Markets
                        </Link>
                        <Link href={"/markets"} className="text-sm max-sm:hidden">
                            Districts
                        </Link>
                        <Link href={"/ads"} className="text-sm max-sm:hidden">
                            Advertise
                        </Link>
                        <Link
                            href={"/dealbank/contact_us"}
                            className="text-sm max-sm:hidden"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;