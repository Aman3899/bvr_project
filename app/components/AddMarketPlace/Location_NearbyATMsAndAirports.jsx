import React from 'react';
import { FaMapMarkerAlt, FaTrashAlt } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';
import { GiAirplaneArrival } from 'react-icons/gi';

const Location_NearbyATMAndAirport = ({
  nearbyATMs,
  setNearbyATMs,
  nearbyAirports,
  setNearbyAirports,
  selectedDistrict,
  setSelectedDistrict,
  selectedCity,
  setSelectedCity,
  selectedArea,
  setSelectedArea
}) => {
  const addField = (setFields) => {
    setFields((prev) => [...prev, ""]);
  };

  const removeField = (index, fields, setFields) => {
    setFields((prev) => prev.filter((_, i) => i !== index));
  };

  const updateField = (index, value, setFields) => {
    setFields((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  // Dropdown options
  const districts = ['Lilongwe', 'Blantyre', 'Mzuzu'];
  const cities = ['Lilongwe', 'Blantyre', 'Mzuzu'];
  const areas = ['Area 18', 'Area 49', 'Area 3'];

  return (
    <div className="space-y-6 animate-fadeIn my-3">
      {/* Location Selection */}
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <FaMapMarkerAlt className="text-blue-600" />
          Location Selection
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* District Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">District</label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>Select District</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          {/* City Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Area Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Area</label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>Select Area</option>
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Nearby ATMs */}
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <BsBank2 className="text-blue-600" />
          Nearby ATMs
        </h3>

        {nearbyATMs.map((atm, index) => (
          <div key={index} className="flex items-center gap-2 mb-3">
            <input
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="National Bank of Malawi ATM"
              value={atm}
              onChange={(e) => updateField(index, e.target.value, setNearbyATMs)}
            />
            <button
              className="p-2 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={() => removeField(index, nearbyATMs, setNearbyATMs)}
            >
              <FaTrashAlt className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button
          onClick={() => addField(setNearbyATMs)}
          className="w-full md:w-auto py-2 px-4 text-white bg-blue-500 hover:bg-blue-700 rounded-md"
        >
          Add ATM
        </button>
      </div>

      {/* Nearby Airports */}
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <GiAirplaneArrival className="text-blue-600" />
          Nearby Airports
        </h3>

        {nearbyAirports.map((airport, index) => (
          <div key={index} className="flex items-center gap-2 mb-3">
            <input
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Lilongwe International Airport"
              value={airport}
              onChange={(e) => updateField(index, e.target.value, setNearbyAirports)}
            />
            <button
              className="p-2 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={() => removeField(index, nearbyAirports, setNearbyAirports)}
            >
              <FaTrashAlt className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button
          onClick={() => addField(setNearbyAirports)}
          className="w-full md:w-auto py-2 px-4 text-white bg-blue-500 hover:bg-blue-700 rounded-md"
        >
          Add Airport
        </button>
      </div>
    </div>
  );
};

export default Location_NearbyATMAndAirport;
