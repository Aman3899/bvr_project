"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronDown } from 'lucide-react';

const SearchSection = ({Location_And_Search_Data}) => {

    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const dataToPass = { city: selectedDistrict, area: selectedCity, search: searchQuery };

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const districts = [
        'Blantyre', 'Lilongwe', 'Mzimba', 'Zomba', 'Mangochi', 'Mulanje', 'Salima',
    ];

    const cities = {
        "Blantyre": ["Limbe", "Chilomoni", "Soche"],
        "Lilongwe": ["Area 25", "Area 18", "Kawale"],
        "Mzimba": ["Mzimba Boma", "Euthini", "Enukweni"],
        "Zomba": ["Zomba City", "Thondwe", "Chancellor College Area"],
        "Mangochi": ["Mangochi Town", "Monkey Bay", "Malindi"],
        "Mulanje": ["Mulanje Boma", "Lujeri", "Phalombe"],
        "Salima": ["Salima Boma", "Senga Bay", "Nkhotakota"],
        "Machinga": ["Machinga Boma", "Liwonde", "Mbenjere"],
        "Nsanje": ["Nsanje Boma", "Mkomanize", "Chikwawa"],
        "Chitipa": ["Chitipa Boma", "Ituzi", "Katoto"],
        "Kasungu": ["Kasungu Boma", "Chankhungu", "Kanyenda"],
        "Karonga": ["Karonga Town", "Chitipa", "Nkhotakota"],
        "Dowa": ["Dowa Boma", "Nkhamenya", "Chibavi"],
        "Ntcheu": ["Ntcheu Boma", "Chintheche", "Mwimba"],
        "Phalombe": ["Phalombe Boma", "Chonde", "Mambo"],
        "Balaka": ["Balaka Boma", "Chikowa", "Mpondasi"],
        "Rumphi": ["Rumphi Boma", "Chiwengo", "Mlowe"],
        "Likoma": ["Likoma Island", "Lakeside", "Chizumulu"]
    };

    const handleSubmit = () => {
        console.log(selectedDistrict, selectedCity, searchQuery);
        Location_And_Search_Data(dataToPass);
    }

    return (
        <div className="w-full px-4 py-8 md:py-16">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Search Container */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                    <div className="flex flex-col gap-6">
                        {/* Location Selection */}
                        <div className="relative flex-1">
                            <motion.button
                                className="w-full flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-xl p-4 text-left transition-colors"
                                onClick={() => setIsLocationOpen(!isLocationOpen)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="font-medium">
                                            {selectedDistrict && selectedCity
                                                ? `${selectedCity}, ${selectedDistrict}`
                                                : 'Select location'}
                                        </p>
                                    </div>
                                </div>
                                <ChevronDown className={`w-5 h-5 transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
                            </motion.button>

                            {/* Dropdown Panel */}
                            {isLocationOpen && (
                                <motion.div
                                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg p-4 z-50"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <div className="space-y-4">
                                        {/* District Selection */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                                            <select
                                                value={selectedDistrict}
                                                onChange={(e) => {
                                                    setSelectedDistrict(e.target.value);
                                                    setSelectedCity('');
                                                }}
                                                className="w-full border border-gray-200 rounded-lg p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="">Select District</option>
                                                {districts.map((district) => (
                                                    <option key={district} value={district}>{district}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* City Selection */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                            <select
                                                value={selectedCity}
                                                onChange={(e) => setSelectedCity(e.target.value)}
                                                disabled={!selectedDistrict}
                                                className="w-full border border-gray-200 rounded-lg p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            >
                                                <option value="">Select City</option>
                                                {selectedDistrict && cities[selectedDistrict]?.map((city) => (
                                                    <option key={city} value={city}>{city}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Search Input */}
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleChange}
                                    placeholder="Search for products..."
                                    className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white rounded-xl pl-12 pr-4 py-4 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        {/* Search Button */}
                        <motion.button
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-4 font-medium shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSubmit}
                        >
                            Search
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SearchSection;