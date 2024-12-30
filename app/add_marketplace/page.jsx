"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MarketEssentials from "../components/AddMarketPlace/MarketEssentials";
import MarketFeatures from "../components/AddMarketPlace/MarketAllFeaturesData";
import Location_NearbyATMAndAirport from "../components/AddMarketPlace/Location_NearbyATMsAndAirports";
import MarketMediaAndLocation from "../components/AddMarketPlace/MarketMediaAndLocation";
import MarketOperatingHoursAndStatus from "../components/AddMarketPlace/MarketOperatingHoursAndStatus";
import MarketForm from "../components/AddMarketPlace/MarketNameAndDetails";
import { motion } from "framer-motion";

const AddMarketPlace = () => {
    
    const [marketName, setMarketName] = useState("");
    const [marketDescription, setMarketDescription] = useState("");
    const [features, setFeatures] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [compliance, setCompliance] = useState([]);
    const [hygiene, setHygiene] = useState([]);
    const [marketType, setMarketType] = useState("");
    const [transactionMode, setTransactionMode] = useState("");
    const [language, setLanguage] = useState("");
    const [accessibility, setAccessibility] = useState("");
    const [specialDays, setSpecialDays] = useState("");
    const [operatingHours, setOperatingHours] = useState({ start: "", end: "" });
    const [isOpen, setIsOpen] = useState(true);
    const [location, setLocation] = useState({ district: "", city: "", area: "" });
    const [videoLink, setVideoLink] = useState("");
    const [image, setImage] = useState(null);
    const [nearbyATMs, setNearbyATMs] = useState([""]);
    const [nearbyAirports, setNearbyAirports] = useState([""]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedArea, setSelectedArea] = useState("");

    // Your styles
    const inputStyle = "w-full px-4 py-2 border border-gray-200 rounded-lg bg-white transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300";
    const labelStyle = "block text-gray-700 font-medium mb-2 transition-colors duration-300";

    const handleSubmit = () => {
        const marketData = {
            marketName,
            marketDescription,
            features,
            amenities,
            compliance,
            hygiene,
            marketType,
            transactionMode,
            language,
            accessibility,
            specialDays,
            operatingHours,
            isOpen,
            location,
            videoLink,
            image,
        };
        console.log("Market Data:", marketData);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="p-6 max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg mt-24 max-sm:mt-20"
        >
            <Navbar heading="Add Market" />

            {/* Market Name AND Description */}
            <MarketForm
                marketName={marketName}
                setMarketName={setMarketName}
                marketDescription={marketDescription}
                setMarketDescription={setMarketDescription}
            />

            {/* Market Features */}
            <MarketFeatures
                features={features}
                setFeatures={setFeatures}
                amenities={amenities}
                setAmenities={setAmenities}
                compliance={compliance}
                setCompliance={setCompliance}
                hygiene={hygiene}
                setHygiene={setHygiene}
            />

            {/* Market Essentials */}
            <MarketEssentials
                marketType={marketType}
                setMarketType={setMarketType}
                transactionMode={transactionMode}
                setTransactionMode={setTransactionMode}
                language={language}
                setLanguage={setLanguage}
                accessibility={accessibility}
                setAccessibility={setAccessibility}
                specialDays={specialDays}
                setSpecialDays={setSpecialDays}
                inputStyle={inputStyle}
                labelStyle={labelStyle}
            />

            {/* Operating Hours AND Open/Closed Toggle */}
            <MarketOperatingHoursAndStatus
                operatingHours={operatingHours}
                setOperatingHours={setOperatingHours}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            {/* Visual and Location Data */}
            <MarketMediaAndLocation
                image={image}
                setImage={setImage}
                videoLink={videoLink}
                setVideoLink={setVideoLink}
            />

            {/* Location Selection, Nearby ATMs & Airports */}
            <Location_NearbyATMAndAirport
                nearbyATMs={nearbyATMs}
                setNearbyATMs={setNearbyATMs}
                nearbyAirports={nearbyAirports}
                setNearbyAirports={setNearbyAirports}
                selectedDistrict={selectedDistrict}
                setSelectedDistrict={setSelectedDistrict}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                selectedArea={selectedArea}
                setSelectedArea={setSelectedArea}
            />

            {/* Submit */}
            <div className="flex justify-center mt-6">
                <button
                    className="bg-blue-500 text-white px-32 py-2 rounded font-bold hover:bg-blue-600 transition duration-300"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </motion.div>
    );
};

export default AddMarketPlace;