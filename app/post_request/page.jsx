import React from "react";
import Link from "next/link";
import { FaUser, FaBars } from "react-icons/fa";
import Navbar from "../components/Navbar";



const PostRequestPage = () => {

    return (
        <div className="min-h-screen bg-gray-100 px-48 py-6 max-sm:px-4">

            <Navbar heading="Customer Dashboard" />
            
            {/* Post Activity Section */}
            <section className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Post Activity</h2>

                {/* Post Cards */}
                {["Request 1", "Request B", "Request A"].map((request, index) => (
                    <div
                        key={index}
                        className="bg-white shadow rounded-lg p-4 mb-4 flex justify-between items-center"
                    >
                        <div>
                            <h3 className="text-gray-800 font-semibold">{request}</h3>
                            <p className="text-sm text-gray-500">Bids: 3</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <button
                                className={`text-white px-3 py-1 text-sm font-medium rounded-md ${index === 0
                                        ? "bg-cyan-500"
                                        : index === 1
                                            ? "bg-gray-500"
                                            : "bg-red-500"
                                    }`}
                            >
                                {index === 0 ? "Active" : index === 1 ? "Completed" : "Expired"}
                            </button>
                            <button className="bg-cyan-500 text-white px-4 py-1 text-sm font-medium rounded-md">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            {/* Subscription Plans Section */}
            <section className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Subscription Plans</h2>

                {/* Subscription Options */}
                <div className="bg-white shadow rounded-lg p-4">
                    {[
                        { label: "10 Posts - MWK 500", value: "10" },
                        { label: "30 Posts - MWK 1000", value: "30" },
                        { label: "50 Posts - MWK 1500", value: "50" },
                    ].map((plan, index) => (
                        <label
                            key={index}
                            className="flex items-center gap-3 mb-3 last:mb-0"
                        >
                            <input
                                type="radio"
                                name="subscription"
                                value={plan.value}
                                className="form-radio text-cyan-500"
                            />
                            <span className="text-gray-800">{plan.label}</span>
                        </label>
                    ))}
                </div>
            </section>

            {/* Buttons */}
            <div className="flex flex-col text-center gap-4">
                <Link href="/" className="bg-red-500 text-white py-2 rounded-md font-medium">Subscribe</Link>
                <Link href="/submit_request" className="bg-cyan-500 text-white py-2 rounded-md font-medium">Submit Request</Link>
            </div>
        </div>
    );
};

export default PostRequestPage;