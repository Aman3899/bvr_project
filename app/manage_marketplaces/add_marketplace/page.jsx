"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "@/app/components/Navbar";
import MarketEssentials from "@/app/components/AddMarketPlace/MarketEssentials";
import MarketFeatures from "@/app/components/AddMarketPlace/MarketAllFeaturesData";
import Location_NearbyATMAndAirport from "@/app/components/AddMarketPlace/Location_NearbyATMsAndAirports";
import MarketMediaAndLocation from "@/app/components/AddMarketPlace/MarketMediaAndLocation";
import MarketOperatingHoursAndStatus from "@/app/components/AddMarketPlace/MarketOperatingHoursAndStatus";
import MarketForm from "@/app/components/AddMarketPlace/MarketNameAndDetails";
import { motion } from "framer-motion";

const AddMarketPlace = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        console.log("Market Data:", data);
    
        try {
            const response = await fetch("/api/manage_marketplaces/add_marketplace", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();

            console.log("Response:", result);
    
            if (response.ok) {
                alert("Market added successfully!");
                console.log("Response:", result);
            } else {
                alert("Failed to add market: " + result.error);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className="p-6 max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg mt-24 max-sm:mt-20"
        >
            <Navbar heading="Add Market" />

            {/* Market Name & Description */}
            <MarketForm register={register} errors={errors}
            />

            {/* Market Features */}
            <MarketFeatures register={register} errors={errors} />

            {/* Market Essentials */}
            <MarketEssentials register={register} errors={errors} />

            {/* Operating Hours & Status */}
            <MarketOperatingHoursAndStatus register={register} errors={errors} />

            {/* Media & Location */}
            <MarketMediaAndLocation register={register} errors={errors} />

            {/* Location & Nearby Services */}
            <Location_NearbyATMAndAirport register={register} errors={errors} />

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
                <button
                    className="bg-blue-500 text-white px-32 py-2 rounded font-bold hover:bg-blue-600 transition duration-300"
                    onClick={handleSubmit(onSubmit)}
                >
                    Submit
                </button>
            </div>
        </motion.div>
    );
};

export default AddMarketPlace;