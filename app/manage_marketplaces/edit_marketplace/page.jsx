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


const EditMarketPlace = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        console.log("Market Data:", data);
    };
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            className="p-6 max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg mt-24 max-sm:mt-20"
        >
            <Navbar heading="Edit Market" />

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

export default EditMarketPlace;