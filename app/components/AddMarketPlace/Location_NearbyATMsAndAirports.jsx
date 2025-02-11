import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaMapMarkerAlt, FaTrashAlt } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { GiAirplaneArrival } from "react-icons/gi";

const Location_NearbyATMAndAirport = () => {
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      areaId: "",
      atms: [{ bankName: "" }],
      airports: [{ airportName: "" }]
    }
  });

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [districtsData, setDistricts] = useState([]);
  const [nearbyATMs, setNearbyATMs] = useState([{ bankName: "" }]);
  const [nearbyAirports, setNearbyAirports] = useState([{ airportName: "" }]);

  // Watch areaId for debugging/validation
  const areaId = watch("areaId");

  const addField = (setFields, key) => {
    setFields((prev) => [...prev, { [key]: "" }]);
  };

  const removeField = (index, fields, setFields) => {
    setFields((prev) => prev.filter((_, i) => i !== index));
  };

  const updateField = (index, value, key, setFields) => {
    setFields((prev) => {
      const updated = [...prev];
      updated[index][key] = value;
      return updated;
    });
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    setSelectedCity("");
    setValue("areaId", ""); // Reset areaId when district changes
  };

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);
    setValue("areaId", ""); // Reset areaId when city changes
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
      } catch (err) {
        console.error("Error fetching districts:", err);
      }
    };

    fetchDistricts();
  }, []);

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    // The data object will contain:
    // {
    //   areaId: "selected-area-id",
    //   atms: [...],
    //   airports: [...]
    // }
  };

  // Get the selected district object
  const districtObj = districtsData.find((d) => d.id.toString() === selectedDistrict);
  // Get the selected city object
  const cityObj = districtObj?.cities.find((c) => c.id.toString() === selectedCity);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-fadeIn my-3">
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
            <Controller
              name="areaId"
              control={control}
              rules={{ required: "Area is required" }}
              render={({ field }) => (
                <select
                  {...field}
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
              )}
            />
          </div>
        </div>
      </div>

      {/* Nearby ATMs */}
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <BsBank2 className="text-blue-600" /> Nearby ATMs
        </h3>
        {nearbyATMs.map((atm, index) => (
          <div key={index} className="flex items-center gap-2 mb-3">
            <Controller
              name={`atms.${index}.bankName`}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Bank Name"
                />
              )}
            />
            <button 
              type="button"
              className="p-2 text-red-500" 
              onClick={() => removeField(index, nearbyATMs, setNearbyATMs)}
            >
              <FaTrashAlt className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button 
          type="button"
          onClick={() => addField(setNearbyATMs, "bankName")} 
          className="py-2 px-4 text-white bg-blue-500 rounded-md"
        >
          Add ATM
        </button>
      </div>

      {/* Nearby Airports */}
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <GiAirplaneArrival className="text-blue-600" /> Nearby Airports
        </h3>
        {nearbyAirports.map((airport, index) => (
          <div key={index} className="flex items-center gap-2 mb-3">
            <Controller
              name={`airports.${index}.airportName`}
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Airport Name"
                />
              )}
            />
            <button 
              type="button"
              className="p-2 text-red-500" 
              onClick={() => removeField(index, nearbyAirports, setNearbyAirports)}
            >
              <FaTrashAlt className="h-5 w-5" />
            </button>
          </div>
        ))}
        <button 
          type="button"
          onClick={() => addField(setNearbyAirports, "airportName")} 
          className="py-2 px-4 text-white bg-blue-500 rounded-md"
        >
          Add Airport
        </button>
      </div>
    </form>
  );
};

export default Location_NearbyATMAndAirport;