"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaTrashAlt } from 'react-icons/fa';


const AddMarket = () => {

    const [marketName, setMarketName] = useState('');
    const [marketDescription, setMarketDescription] = useState('');
    const [features, setFeatures] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [compliance, setCompliance] = useState([]);
    const [hygiene, setHygiene] = useState([]);
    const [marketType, setMarketType] = useState('');
    const [transactionMode, setTransactionMode] = useState('');
    const [language, setLanguage] = useState('');
    const [accessibility, setAccessibility] = useState('');
    const [specialDays, setSpecialDays] = useState('');
    const [operatingHours, setOperatingHours] = useState({ start: '', end: '' });
    const [isOpen, setIsOpen] = useState(true);
    const [location, setLocation] = useState({ district: '', city: '', area: '' });
    const [videoLink, setVideoLink] = useState('');
    const [image, setImage] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedArea, setSelectedArea] = useState('');


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
        console.log('Market Data:', marketData);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const [nearbyATMs, setNearbyATMs] = useState([""]);
    const [nearbyAirports, setNearbyAirports] = useState([""]);

    // Handler for adding a new field
    const addField = (setFields) => {
        setFields((prev) => [...prev, ""]);
    };

    // Handler for removing a field
    const removeField = (index, fields, setFields) => {
        setFields((prev) => prev.filter((_, i) => i !== index));
    };

    // Handler for updating field values
    const updateField = (index, value, setFields) => {
        setFields((prev) => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg">

            <Navbar heading="Add Market" />

            {/* Market Name */}
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Market Name</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
                    placeholder='Lilongwe Market'
                    value={marketName}
                    onChange={(e) => setMarketName(e.target.value)}
                />
            </div>

            {/* Market Description */}
            <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Market Description</label>
                <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
                    value={marketDescription}
                    placeholder='A Bustling Market in the heart of Lilongwe.'
                    onChange={(e) => setMarketDescription(e.target.value)}
                ></textarea>
            </div>

            {/* Market Features */}
            <div className="mb-4 bg-white p-3">
                <h2 className="text-lg font-medium mb-2">Market Features</h2>
                {['Electricity', 'Water Supply', 'Access Roads', 'Sewage Systems', 'Waste Management Services'].map(
                    (feature) => (
                        <div key={feature} className='border-y border-gray-100 py-1'>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                    value={feature}
                                    onChange={(e) =>
                                        setFeatures((prev) =>
                                            e.target.checked
                                                ? [...prev, e.target.value]
                                                : prev.filter((f) => f !== e.target.value)
                                        )
                                    }
                                />
                                <span className="ml-2">{feature}</span>
                            </label>
                        </div>
                    )
                )}
            </div>

            {/* Amenities */}
            <div className="mb-4 bg-white p-3">
                <h2 className="text-lg font-medium mb-2">Amenities</h2>
                {['Seating Areas', 'ATMs', 'Mobile Money Services', 'Internet Connectivity', 'Information Desk'].map(
                    (amenity) => (
                        <div key={amenity} className='border-y border-gray-100 py-1'>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                    value={amenity}
                                    onChange={(e) =>
                                        setAmenities((prev) =>
                                            e.target.checked
                                                ? [...prev, e.target.value]
                                                : prev.filter((a) => a !== e.target.value)
                                        )
                                    }
                                />
                                <span className="ml-2">{amenity}</span>
                            </label>
                        </div>
                    )
                )}
            </div>

            {/* Regulatory Compliance */}
            <div className="mb-4 bg-white p-3">
                <h2 className="text-lg font-medium mb-2">Regulatory Compliance</h2>
                {['Business Licensing', 'Environmental Regulation', 'Tax Compliance', 'Delivery Services', 'Security Arrangements'].map(
                    (item) => (
                        <div key={item} className='border-y border-gray-100 py-1'>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                    value={item}
                                    onChange={(e) =>
                                        setCompliance((prev) =>
                                            e.target.checked
                                                ? [...prev, e.target.value]
                                                : prev.filter((c) => c !== e.target.value)
                                        )
                                    }
                                />
                                <span className="ml-2">{item}</span>
                            </label>
                        </div>
                    )
                )}
            </div>

            {/* Sanitation & Hygiene */}
            <div className="mb-4 bg-white p-3">
                <h2 className="text-lg font-medium mb-2">Sanitation & Hygiene</h2>
                {['Public Toilets (Flush)', 'Public Toilets (Pit Latrines)', 'Showers', 'Waste Disposal Bins', 'Pest Control Services'].map(
                    (item) => (
                        <div key={item} className='border-y border-gray-100 py-1'>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                    value={item}
                                    onChange={(e) =>
                                        setHygiene((prev) =>
                                            e.target.checked
                                                ? [...prev, e.target.value]
                                                : prev.filter((h) => h !== e.target.value)
                                        )
                                    }
                                />
                                <span className="ml-2">{item}</span>
                            </label>
                        </div>
                    )
                )}
            </div>

            {/* Market Essentials */}
            <div className='mb-4 bg-white p-3'>
                <h2 className="text-lg font-medium mb-2">Market Essentails</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Market Type</label>
                    <select className="w-full text-sm px-3 py-1 border border-gray-300 rounded bg-gray-100" value={marketType} onChange={(e) => setMarketType(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Flea Market">Flea Market</option>
                        <option value="Wholesale">Wholesale</option>
                        <option value="Retail">Retail</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Mode of Transaction</label>
                    <select className="w-full text-sm px-3 py-1 border border-gray-300 rounded bg-gray-100" value={marketType} onChange={(e) => setMarketType(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Cash">Cash</option>
                        <option value="Bidding">Bidding</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Language</label>
                    <select
                        className="w-full text-sm px-3 py-1 border border-gray-300 rounded bg-gray-100"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="">Select Language</option>
                        {/* Popular Global Languages */}
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Mandarin">Mandarin</option>
                        <option value="French">French</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Russian">Russian</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Japanese">Japanese</option>
                        <option value="German">German</option>

                        {/* African Languages */}
                        <option value="Swahili">Swahili</option>
                        <option value="Amharic">Amharic</option>
                        <option value="Yoruba">Yoruba</option>
                        <option value="Igbo">Igbo</option>
                        <option value="Hausa">Hausa</option>
                        <option value="Zulu">Zulu</option>
                        <option value="Xhosa">Xhosa</option>
                        <option value="Shona">Shona</option>
                        <option value="Somali">Somali</option>
                        <option value="Afrikaans">Afrikaans</option>
                        <option value="Chichewa">Chichewa</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Accessibility</label>
                    <select className="w-full text-sm px-3 py-1 border border-gray-300 rounded bg-gray-100" value={marketType} onChange={(e) => setMarketType(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Good">Good</option>
                        <option value="Difficult">Difficult</option>
                        <option value="Very Easy">Very Easy</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Special Days</label>
                    <select className="w-full text-sm px-3 py-1 border border-gray-300 rounded bg-gray-100" value={marketType} onChange={(e) => setMarketType(e.target.value)}>
                        <option value="">Select Days</option>
                        <option value="Christmis">Christmis</option>
                        <option value="New Year">New Year</option>
                    </select>
                </div>
            </div>


            {/* Operating Hours */}
            <div className="mb-4 bg-white p-3">
                <h2 className="text-lg font-medium mb-2">Operating Hours</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium mb-1">Start Time</label>
                        <input
                            type="time"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            value={operatingHours.start}
                            onChange={(e) => setOperatingHours((prev) => ({ ...prev, start: e.target.value }))}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium mb-1">End Time</label>
                        <input
                            type="time"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            value={operatingHours.end}
                            onChange={(e) => setOperatingHours((prev) => ({ ...prev, end: e.target.value }))}
                        />
                    </div>
                </div>
            </div>


            {/* Open/Closed Toggle */}
            <div className="mb-4 bg-white p-3">
                <h2 className="text-lg font-medium mb-2">Status</h2>
                <div>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="status"
                            value="Open"
                            className="form-radio text-blue-500 focus:ring-blue-400"
                            checked={isOpen}
                            onChange={() => setIsOpen(true)}
                        />
                        <span className="ml-2">Open</span>
                    </label>
                </div>
                <div className="mt-2">
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="status"
                            value="Closed"
                            className="form-radio text-blue-500 focus:ring-blue-400"
                            checked={!isOpen}
                            onChange={() => setIsOpen(false)}
                        />
                        <span className="ml-2">Closed</span>
                    </label>
                </div>
            </div>


            {/* Visual and Location Data */}
            <div className="mb-4 bg-white p-3">
                <h2 className="text-lg font-medium mb-2">Visual and Location Data</h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="imageUpload"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                setImage(file); // Assuming `setImage` updates the state for the selected image
                            }
                        }}
                    />
                    <label htmlFor="imageUpload" className="flex flex-col items-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16v4a1 1 0 001 1h16a1 1 0 001-1v-4M16 10l-4-4m0 0L8 10m4-4v12" />
                        </svg>
                        <p className="text-gray-400 mt-2 text-sm">Click to upload image</p>
                        {image && <p className="text-sm text-green-600 mt-1">Image selected: {image.name}</p>}
                    </label>
                </div>
            </div>


            {/* Video Link */}
            <div className="mb-4 bg-white p-3">
                <label className="block text-lg font-medium mb-2">Video Link</label>
                <input
                    type="url"
                    className="w-full text-sm px-3 py-1 border border-gray-300 rounded bg-gray-100"
                    placeholder="https://youtu.be/example"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                />
            </div>


            {/* Location Selection */}
            <div className="mb-4 bg-white p-3">
                <h2 className="text-lg font-medium mb-2">Location Selection</h2>

                {/* District */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">District</label>
                    <select
                        className="w-full text-sm bg-gray-100 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                    >
                        <option value="Lilongwe">Lilongwe</option>
                        <option value="Blantyre">Blantyre</option>
                        <option value="Mzuzu">Mzuzu</option>
                    </select>
                </div>

                {/* City */}
                <div className="mb-3">
                    <label className="block text-sm font-medium mb-1">City</label>
                    <select
                        className="w-full text-sm bg-gray-100 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option value="Lilongwe">Lilongwe</option>
                        <option value="Blantyre">Blantyre</option>
                        <option value="Mzuzu">Mzuzu</option>
                    </select>
                </div>

                {/* Area */}
                <div>
                    <label className="block text-sm font-medium mb-1">Area</label>
                    <select
                        className="w-full text-sm bg-gray-100 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                        value={selectedArea}
                        onChange={(e) => setSelectedArea(e.target.value)}
                    >
                        <option value="Area 18">Area 18</option>
                        <option value="Area 49">Area 49</option>
                        <option value="Area 3">Area 3</option>
                    </select>
                </div>
            </div>

            {/* Nearby ATMs */}
            <div className="mb-4 bg-white p-3">
                <label className="block text-lg font-medium mb-2">Nearby ATMs</label>
                {nearbyATMs.map((atm, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="text"
                            className="w-full text-sm px-3 py-1 border border-gray-300 rounded bg-gray-100 mr-2"
                            placeholder="National Bank of Malawi ATM"
                            value={atm}
                            onChange={(e) => updateField(index, e.target.value, setNearbyATMs)}
                        />
                        <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeField(index, nearbyATMs, setNearbyATMs)}
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                ))}
                <button
                    className=" hover:bg-blue-700 mt-2 px-4 py-2 rounded-lg bg-blue-500 text-sm text-white font-bold"
                    onClick={() => addField(setNearbyATMs)}
                >
                    Add ATM
                </button>
            </div>

            {/* Nearby Airports */}
            <div className="mb-4 bg-white p-3">
                <label className="block text-lg font-medium mb-2">Nearby Airports</label>
                {nearbyAirports.map((airport, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="text"
                            className="w-full text-sm px-3 py-1 border border-gray-300 rounded bg-gray-100 mr-2"
                            placeholder="Lilongwe International Airport"
                            value={airport}
                            onChange={(e) => updateField(index, e.target.value, setNearbyAirports)}
                        />
                        <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeField(index, nearbyAirports, setNearbyAirports)}
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                ))}
                <button
                    className="hover:bg-blue-700 mt-2 px-4 py-2 rounded-lg bg-blue-500 text-sm text-white font-bold"
                    onClick={() => addField(setNearbyAirports)}
                >
                    Add Airport
                </button>
            </div>


            {/* Submit */}
            <div className="flex justify-center mt-6">
                <button
                    className="bg-blue-500 text-white px-32 py-2 rounded font-bold"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AddMarket;
