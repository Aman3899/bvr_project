"use client";
import { FaAd, FaBars, FaHome, FaPhoneAlt, FaSearchLocation, FaShoppingCart, FaUser, FaLockOpen, FaLock } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";


const Navbar = (Props) => {

    const router = useRouter();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [ isAuthUser, setIsAuthUser ] = useState(false);

    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const handleLogout = async () => {
        await axios.get("/api/users/logout");
        toast.success("Logout Successfully");
        router.push("/login");
    }

    const checkAuth = async () => {
        try {
            const res = await axios.get("/api/users/me");
            if (res.status === 200) {
                setIsAuthUser(true);
            }
        } catch (error) {
            setIsAuthUser(false);
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);

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
                                    <FaShoppingCart className="inline-block mr-2" />All Markets
                                </Link>
                            </li>
                            <li>
                            {!isAuthUser && (
                                <Link href="/login" className="block px-4 py-2 hover:bg-gray-700">
                                    <FaLock className="inline-block mr-2" /> Login
                                </Link>
                            )}

                            {isAuthUser && (
                                <button className="block px-4 py-2 hover:bg-gray-700" onClick={handleLogout}>
                                    <FaLockOpen className="inline-block mr-2" /> Logout
                                </button>
                            )}
                            </li>
                            <li>
                                <Link
                                    href="/markets"
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    <FaSearchLocation className="inline-block mr-2" /> Districts
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dealbank/advertise"
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    <FaAd className="inline-block mr-2" /> Advertise
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/chat"
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    <MdOutlineChat className="inline-block mr-2" /> Chats
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dealbank/contact_us"
                                    className="block px-4 py-2 hover:bg-gray-700"
                                >
                                    <FaPhoneAlt className="inline-block mr-2" /> Contact Us
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
                            className="rounded-full max-sm:w-9 max-sm:h-9"
                        />
                        <p className="text-3xl max-sm:text-xl">{Props.heading}</p>
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
                        <Link href={"/dealbank/advertise"} className="text-sm max-sm:hidden">
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