import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaTrashAlt } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { GiAirplaneArrival } from "react-icons/gi";


const Location_NearbyATMAndAirport = ({ register, errors }) => {
  const { handleSubmit } = useForm();

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const [nearbyATMs, setNearbyATMs] = useState([""]);
  const [nearbyAirports, setNearbyAirports] = useState([""]);

  const [districtsData, setDistricts] = useState([]);

  const addField = (setFields) => setFields((prev) => [...prev, ""]);
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

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    setSelectedCity(""); // Reset city when district changes
    setSelectedArea(""); // Reset area when district changes
  };

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);
    setSelectedArea(""); // Reset area when city changes
  };

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch("/api/manage_marketplaces/districts");
        if (!response.ok) {
          throw new Error("Failed to fetch districts");
        }
        const data = await response.json();
        setDistricts(data);

        console.log("Districts:", data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDistricts();
  }, []);

  // Get the selected district object
  const districtObj = districtsData.find((d) => d.id.toString() === selectedDistrict);
  // Get the selected city object
  const cityObj = districtObj?.cities.find((c) => c.id.toString() === selectedCity);

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="space-y-6 animate-fadeIn my-3">
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
              onChange={handleDistrictChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>Select District</option>
              {districtsData.map((district) => (
                <option key={district.id} value={district.id}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>

          {/* City Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">City</label>
            <select
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!selectedDistrict}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>Select City</option>
              {districtObj?.cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
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
              disabled={!selectedCity}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>Select Area</option>
              {cityObj?.areas.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.name}
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
              {...register(`atm_${index}`)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="National Bank of Malawi ATM"
              value={atm}
              onChange={(e) => updateField(index, e.target.value, setNearbyATMs)}
            />
            <button className="p-2 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => removeField(index, nearbyATMs, setNearbyATMs)}>
              <FaTrashAlt className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button onClick={() => addField(setNearbyATMs)} className="w-full md:w-auto py-2 px-4 text-white bg-blue-500 hover:bg-blue-700 rounded-md">
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
              {...register(`airport_${index}`)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="National Bank of Malawi ATM"
              value={airport}
              onChange={(e) => updateField(index, e.target.value, setNearbyAirports)}
            />
            <button className="p-2 rounded-full text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => removeField(index, nearbyAirports, setNearbyAirports)}>
              <FaTrashAlt className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button onClick={() => addField(setNearbyAirports)} className="w-full md:w-auto py-2 px-4 text-white bg-blue-500 hover:bg-blue-700 rounded-md">
          Add Airport
        </button>
      </div>
    </form>
  );
};

export default Location_NearbyATMAndAirport;