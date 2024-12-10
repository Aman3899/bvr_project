import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";


export default function SellerDashboard() {
    return (
        <div className="bg-gray-50 min-h-screen py-5 px-48 max-sm:px-4 max-sm:py-5">
            <Navbar heading="Seller Dashboard" />

            {/* Profile Section */}
            <div className="flex flex-col items-center text-center mb-6">
                <Image width={1000} height={1000} src="/marketplace-hero.jpeg" alt="Seller Avatar" className="w-24 h-24 rounded-full mb-2" />
                <h2 className="text-xl font-bold text-gray-800">John Smith</h2>
                <p className="text-gray-500">@johnsmith</p>
                <Link href="/add_marketplace" className="w-full mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-md">+ Add Market</Link>
            </div>

            {/* Uploaded Markets */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Uploaded Markets</h3>
                <div className="space-y-4">
                    {/* Market 1 */}
                    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                        <div>
                            <h4 className="font-medium text-gray-800">Market #1</h4>
                            <p className="text-blue-500">View Details</p>
                        </div>
                        <i className="fas fa-check text-green-500"></i>
                    </div>

                    {/* Market 2 */}
                    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                        <div className="flex items-center">
                        <Image width={100} height={100} src="/marketplace-hero.jpeg" alt="Vintage Clothing" className="w-10 h-10 rounded-full mr-4" />
                            <div>
                                <h4 className="font-medium text-gray-800">Handmade Crafts</h4>
                                <p className="text-blue-500">View Details</p>
                            </div>
                        </div>
                        <i className="fas fa-hourglass text-yellow-500"></i>
                    </div>

                    {/* Market 3 */}
                    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                        <div className="flex items-center">
                            <Image width={100} height={100} src="/marketplace-hero.jpeg" alt="Vintage Clothing" className="w-10 h-10 rounded-full mr-4" />
                            <div>
                                <h4 className="font-medium text-gray-800">Vintage Clothing</h4>
                                <p className="text-blue-500">View Details</p>
                            </div>
                        </div>
                        <i className="fas fa-times text-red-500"></i>
                    </div>
                </div>
            </section>

            {/* Customer Requests */}
            <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Requests</h3>
                <div className="space-y-4">
                    {/* Request 1 */}
                    <div className="bg-white p-4 rounded-lg shadow flex items-center">
                    <Image width={100} height={100} src="/marketplace-hero.jpeg" alt="Vintage Clothing" className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <h4 className="font-medium text-gray-800">Alice Johnson</h4>
                            <p className="text-gray-500">Budget: $200, Time: 2 days</p>
                        </div>
                    </div>

                    {/* Request 2 */}
                    <div className="bg-white p-4 rounded-lg shadow flex items-center">
                    <Image width={100} height={100} src="/marketplace-hero.jpeg" alt="Vintage Clothing" className="w-10 h-10 rounded-full mr-4" />
                        <div>
                            <h4 className="font-medium text-gray-800">Michael Brown</h4>
                            <p className="text-gray-500">Budget: $150, Time: 3 days</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Plans</h3>
                <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center mb-4">
                        <input type="radio" id="bid-plan" name="plan" className="mr-2" />
                        <label htmlFor="bid-plan" className="text-gray-700">Bid Plan</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" id="boost-plan" name="plan" className="mr-2" />
                        <label htmlFor="boost-plan" className="text-gray-700">Boost Plan</label>
                    </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
                    Go to Plan
                </button>
            </section>
        </div>
    );
}