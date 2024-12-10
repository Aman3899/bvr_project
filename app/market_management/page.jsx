"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaEdit, FaNotesMedical, FaBackward } from "react-icons/fa";
import Link from "next/link";


const MarketManagement = () => {

    let router = useRouter();

    const options = [
        {
            name: "Edit Market Details",
            icon: <FaEdit/>,
            link: "/add_marketplace",
        },
        {
            name: "Manage Products",
            icon: <FaNotesMedical/>,
            link: "/manage_products",
        },
    ];

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center px-64 max-sm:px-3">
            <div className="w-full h-screen bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                <div className="flex border-b border-gray-400 w-full">
                    <button onClick={() => { router.back() }} className="pb-3 px-1"><FaBackward/></button>
                    <h2 className="text-xl w-full text-center font-semibold mb-4 max-sm:text-md">Customer Request Details</h2>
                </div>

                    <div className="flex space-x-4">
                        <button>
                            <i className="fas fa-store text-gray-600"></i>
                        </button>
                        <button>
                            <i className="fas fa-cog text-gray-600"></i>
                        </button>
                    </div>
                </div>

                <ul>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between py-4 px-4 border-b text-gray-700 hover:bg-gray-50 cursor-pointer"
                        >
                        <Link href={option.link}>
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">{option.icon}</span>
                                <span className="font-medium">{option.name}</span>
                            </div>
                            <i className="fas fa-chevron-right text-gray-400"></i>
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MarketManagement;