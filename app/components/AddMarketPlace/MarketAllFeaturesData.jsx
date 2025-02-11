import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { GiWashingMachine } from 'react-icons/gi';

const MarketFeatures = ({ register, errors }) => {
    // State to hold the values of selected items
    const [selectedItems, setSelectedItems] = useState({
        marketFeatures: {
            electricity: false,
            waterSupply: false,
            accessRoads: false,
            sewageSystems: false,
            wasteManagementServices: false,
        },
        amenities: {
            seatingAreas: false,
            atms: false,
            mobileMoneyServices: false,
            internetConnectivity: false,
            informationDesk: false,
        },
        regulatoryCompliance: {
            businessLicensing: false,
            environmentalRegulation: false,
            taxCompliance: false,
            deliveryServices: false,
            securityArrangements: false,
        },
        sanitationHygiene: {
            ptFlush: false,
            ptPitLatrines: false,
            showers: false,
            wasteDisposalBins: false,
            pestControlServices: false,
        },
    });

    const handleCheckboxChange = (section, item) => {
        setSelectedItems((prevState) => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [item]: !prevState[section][item], // Toggle between true/false
            },
        }));
    };

    const sections = [
        {
            id: 'marketFeatures',
            title: 'Market Features',
            icon: <FaMapMarkerAlt />,
            items: ['electricity', 'waterSupply', 'accessRoads', 'sewageSystems', 'wasteManagementServices'],
        },
        {
            id: 'amenities',
            title: 'Amenities',
            icon: <BsBank2 />,
            items: ['seatingAreas', 'atms', 'mobileMoneyServices', 'internetConnectivity', 'informationDesk'],
        },
        {
            id: 'regulatoryCompliance',
            title: 'Regulatory Compliance',
            icon: <AiFillSafetyCertificate />,
            items: ['businessLicensing', 'environmentalRegulation', 'taxCompliance', 'deliveryServices', 'securityArrangements'],
        },
        {
            id: 'sanitationHygiene',
            title: 'Sanitation & Hygiene',
            icon: <GiWashingMachine />,
            items: ['ptFlush', 'ptPitLatrines', 'showers', 'wasteDisposalBins', 'pestControlServices'],
        },
    ];

    return (
        <div className="space-y-6 animate-fadeIn my-3">
            {/* Section Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-gray-100 text-gray-600 hover:bg-gray-200"
                    >
                        <span className="text-lg text-blue-600">{section.icon}</span>
                        {section.title}
                    </button>
                ))}
            </div>

            {/* Section Content */}
            {sections.map((section) => (
                <div
                    key={section.id}
                    className="transition-all duration-500 transform opacity-100 translate-x-0"
                >
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="text-2xl text-blue-600">{section.icon}</span>
                            <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.items.map((item) => (
                                <label
                                    key={item}
                                    className="relative flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] border-gray-200 hover:border-blue-300"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedItems[section.id][item]}
                                        onChange={() => handleCheckboxChange(section.id, item)}
                                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out"
                                    />
                                    <span className="text-sm font-medium text-gray-700">{item}</span>
                                    <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300" />
                                </label>
                            ))}
                        </div>

                        {/* Error Message */}
                        {errors[section.id] && (
                            <p className="text-red-600 text-sm mt-2">{errors[section.id].message}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MarketFeatures;