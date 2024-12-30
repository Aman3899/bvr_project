import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { GiWashingMachine } from 'react-icons/gi';

const MarketFeatures = ({
    features,
    setFeatures,
    amenities,
    setAmenities,
    compliance,
    setCompliance,
    hygiene,
    setHygiene
}) => {
    const [activeSection, setActiveSection] = useState('features');

    const marketFeatures = [
        'Electricity',
        'Water Supply',
        'Access Roads',
        'Sewage Systems',
        'Waste Management Services'
    ];

    const marketAmenities = [
        'Seating Areas',
        'ATMs',
        'Mobile Money Services',
        'Internet Connectivity',
        'Information Desk'
    ];

    const complianceItems = [
        'Business Licensing',
        'Environmental Regulation',
        'Tax Compliance',
        'Delivery Services',
        'Security Arrangements'
    ];

    const hygieneItems = [
        'Public Toilets (Flush)',
        'Public Toilets (Pit Latrines)',
        'Showers',
        'Waste Disposal Bins',
        'Pest Control Services'
    ];

    const sections = [
        { id: 'features', title: 'Market Features', icon: <FaMapMarkerAlt />, items: marketFeatures, state: features, setState: setFeatures },
        { id: 'amenities', title: 'Amenities', icon: <BsBank2 />, items: marketAmenities, state: amenities, setState: setAmenities },
        { id: 'compliance', title: 'Regulatory Compliance', icon: <AiFillSafetyCertificate />, items: complianceItems, state: compliance, setState: setCompliance },
        { id: 'hygiene', title: 'Sanitation & Hygiene', icon: <GiWashingMachine />, items: hygieneItems, state: hygiene, setState: setHygiene }
    ];

    return (
        <div className="space-y-6 animate-fadeIn my-3">
            {/* Section Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`
                            flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                            transition-all duration-300 transform hover:scale-105
                            ${activeSection === section.id 
                                ? 'bg-blue-600 text-white shadow-lg' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }
                        `}
                    >
                        <span className={`text-lg ${activeSection === section.id ? 'text-white' : 'text-blue-600'}`}>
                            {section.icon}
                        </span>
                        {section.title}
                    </button>
                ))}
            </div>

            {/* Section Content */}
            {sections.map((section) => (
                <div
                    key={section.id}
                    className={`
                        transition-all duration-500 transform
                        ${activeSection === section.id 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-8 hidden'
                        }
                    `}
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
                                    className={`
                                        relative flex items-center space-x-3 p-4 rounded-xl
                                        border-2 cursor-pointer
                                        transform transition-all duration-300
                                        hover:scale-[1.02]
                                        ${section.state.includes(item)
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:border-blue-300'
                                        }
                                    `}
                                >
                                    <input
                                        type="checkbox"
                                        checked={section.state.includes(item)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                section.setState([...section.state, item]);
                                            } else {
                                                section.setState(section.state.filter(i => i !== item));
                                            }
                                        }}
                                        className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out"
                                    />
                                    <span className={`text-sm font-medium ${
                                        section.state.includes(item) ? 'text-blue-700' : 'text-gray-700'
                                    }`}>
                                        {item}
                                    </span>
                                    <div className={`
                                        absolute inset-0 rounded-xl pointer-events-none
                                        transition-opacity duration-300
                                        ${section.state.includes(item) ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
                                    `} />
                                </label>
                            ))}
                        </div>

                        {/* Selected Items Summary */}
                        {section.state.length > 0 && (
                            <div className="mt-4 p-3 bg-blue-50 rounded-lg animate-fadeIn">
                                <p className="text-sm text-blue-700">
                                    Selected {section.title}: {section.state.length}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MarketFeatures;