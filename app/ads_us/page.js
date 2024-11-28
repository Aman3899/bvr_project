"use client";
import React, { useState } from "react";

const AdvertiseWithUs = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        email: "",
        phone: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        // Logic to submit the form
        console.log("Form Data Submitted:", formData);
        setFormData({
            companyName: "",
            email: "",
            phone: "",
            description: "",
        });
    };

    const handleCancel = () => {
        setFormData({
            companyName: "",
            email: "",
            phone: "",
            description: "",
        });
    };

    return (
        <div className="mx-auto p-6 w-3/4 bg-gray-50 min-h-screen max-sm:w-full">
            {/* Header */}
            <h1 className="text-2xl font-bold mb-6">Advertise with Us</h1>

            {/* Form */}
            <div className="space-y-4 bg-white p-4 rounded-md shadow-md">
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="companyName">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="phone">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Please provide all the details about the ad you wish to run on our platform, including your goals, target audience, and any creative materials or specifications."
                        rows={4}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </div>

            {/* Footer Links */}
            <div className="text-center mt-6 text-sm text-gray-600">
                <p>For any questions, please refer to our FAQs or contact support.</p>

                <div className="flex justify-center space-x-4 mt-2">
                    <a href="/faqs" className="text-blue-600 hover:underline">
                        FAQs
                    </a>
                    <a href="/guidelines" className="text-blue-600 hover:underline">
                        Guidelines
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseWithUs;