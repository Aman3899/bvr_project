import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaTrashAlt } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { GiAirplaneArrival } from "react-icons/gi";

// Malawi Location Data
const malawiData = {
    "Lilongwe": {
      "cities": ["Lilongwe City", "Kanengo", "Lumbadzi", "Namitete"],
      "areas": {
        "Lilongwe City": ["Area 18", "Area 49", "Area 3", "Area 25", "Area 47", "Area 43", "Area 36", "Area 23", "Area 15", "Area 10", "Area 6"],
        "Kanengo": ["Industrial Area", "Kanengo Market", "Kanengo Northgate", "Kanengo Trading"],
        "Lumbadzi": ["Airport Area", "Lumbadzi Trading", "Lumbadzi Market", "Chileka"],
        "Namitete": ["Namitete Trading", "Namitete Market", "Nsalu Trading"]
      }
    },
    "Blantyre": {
      "cities": ["Blantyre City", "Limbe", "Chileka", "Lunzu"],
      "areas": {
        "Blantyre City": ["Chilomoni", "Sunnyside", "Ndirande", "Nyambadwe", "Nkolokoti", "Namiwawa", "Manja", "Zingwangwa", "Naperi", "Mount Pleasant"],
        "Limbe": ["Limbe Market", "Mpingwe", "Bangwe", "Chigumula", "Machinjiri", "Kanjedza"],
        "Chileka": ["Airport Area", "Chileka Trading", "Chileka Market"],
        "Lunzu": ["Lunzu Trading", "Lunzu Market", "Lunzu Station"]
      }
    },
    "Mzuzu": {
      "cities": ["Mzuzu City", "Ekwendeni", "Chikangawa"],
      "areas": {
        "Mzuzu City": ["Katoto", "Luwinga", "Chibavi", "Zolozolo", "Msongwe", "Green City", "Mzuzu Market", "Moyale Barracks", "Mzuzu University"],
        "Ekwendeni": ["Ekwendeni Trading", "Ekwendeni Market", "Ekwendeni Hospital"],
        "Chikangawa": ["Timber Area", "Chikangawa Market", "Forest Area"]
      }
    },
    "Zomba": {
      "cities": ["Zomba City", "Chingale", "Jali", "Thondwe"],
      "areas": {
        "Zomba City": ["Chancellor College", "Sadzi", "Mulunguzi", "Chinamwali", "Matawale", "Old Town", "Zomba Plateau", "Mponda", "Air Wing"],
        "Chingale": ["Chingale Boma", "Mpasa", "Chingale Trading"],
        "Jali": ["Jali Trading", "Jali Market", "Jali Mission"],
        "Thondwe": ["Thondwe Trading", "Thondwe Market", "Thondwe Mission"]
      }
    },
    "Mangochi": {
      "cities": ["Mangochi Town", "Monkey Bay", "Nkopola", "Namwera"],
      "areas": {
        "Mangochi Town": ["Mangochi Boma", "Cape Maclear", "Mangochi Market", "Mission Area", "Fort Johnston"],
        "Monkey Bay": ["Monkey Bay Market", "Lakeshore", "Naval Base", "Cape Maclear"],
        "Nkopola": ["Nkopola Lodge Area", "Club Makokola", "Nkopola Trading"],
        "Namwera": ["Namwera Trading", "Namwera Market", "Chilipa"]
      }
    },
    "Machinga": {
      "cities": ["Liwonde", "Ntaja", "Machinga Boma"],
      "areas": {
        "Liwonde": ["Liwonde Trading", "Liwonde National Park", "Mvera", "Ulongwe"],
        "Ntaja": ["Ntaja Trading", "Ntaja Market", "Nsanama"],
        "Machinga Boma": ["Boma Area", "District Office", "Machinga Market"]
      }
    },
    "Dedza": {
      "cities": ["Dedza Town", "Linthipe", "Lobi"],
      "areas": {
        "Dedza Town": ["Dedza Boma", "Dedza Trading", "Pottery Area", "Mountain View"],
        "Linthipe": ["Linthipe Trading", "Linthipe Market", "Mayani"],
        "Lobi": ["Lobi Trading", "Lobi Market", "Golomoti"]
      }
    },
    "Ntcheu": {
      "cities": ["Ntcheu Boma", "Biriwiri", "Kasinje"],
      "areas": {
        "Ntcheu Boma": ["Ntcheu Trading", "District Office", "Ntcheu Market", "Mphepozikhoza"],
        "Biriwiri": ["Biriwiri Trading", "Biriwiri Market", "Kandeu"],
        "Kasinje": ["Kasinje Trading", "Kasinje Market", "Border Area"]
      }
    },
    "Salima": {
      "cities": ["Salima Town", "Senga Bay", "Lifuwu"],
      "areas": {
        "Salima Town": ["Salima Boma", "Salima Trading", "District Office", "Kamuzu Road"],
        "Senga Bay": ["Senga Bay Resort", "Senga Trading", "Lakeshore Area"],
        "Lifuwu": ["Lifuwu Trading", "Lifuwu Rice Scheme", "Chipoka"]
      }
    },
    "Nkhotakota": {
      "cities": ["Nkhotakota Town", "Dwangwa", "Benga"],
      "areas": {
        "Nkhotakota Town": ["Nkhotakota Boma", "Lake Shore", "Mission Area", "Game Reserve"],
        "Dwangwa": ["Dwangwa Trading", "Sugar Estate", "Dwangwa Market"],
        "Benga": ["Benga Trading", "Benga Market", "Lake Area"]
      }
    },
    "Dowa": {
      "cities": ["Dowa Boma", "Mponela", "Madisi"],
      "areas": {
        "Dowa Boma": ["Dowa Trading", "District Office", "Dowa Market", "Mission Area"],
        "Mponela": ["Mponela Trading", "Mponela Market", "Mvera"],
        "Madisi": ["Madisi Trading", "Madisi Market", "Chankhungu"]
      }
    },
    "Mchinji": {
      "cities": ["Mchinji Boma", "Kamwendo", "Mkanda"],
      "areas": {
        "Mchinji Boma": ["Mchinji Trading", "Border Area", "District Office"],
        "Kamwendo": ["Kamwendo Trading", "Kamwendo Market", "Tembwe"],
        "Mkanda": ["Mkanda Trading", "Mkanda Market", "Kapiri"]
      }
    },
    "Thyolo": {
      "cities": ["Thyolo Town", "Luchenza", "Bvumbwe"],
      "areas": {
        "Thyolo Town": ["Thyolo Boma", "Tea Estate Area", "District Office"],
        "Luchenza": ["Luchenza Trading", "Luchenza Market", "Railway Area"],
        "Bvumbwe": ["Bvumbwe Trading", "Research Station", "Bvumbwe Market"]
      }
    },
    "Phalombe": {
      "cities": ["Phalombe Boma", "Migowi", "Chiringa"],
      "areas": {
        "Phalombe Boma": ["Phalombe Trading", "District Office", "Phalombe Market"],
        "Migowi": ["Migowi Trading", "Migowi Market", "Nambazo"],
        "Chiringa": ["Chiringa Trading", "Chiringa Market", "Mauzi"]
      }
    },
    "Chiradzulu": {
      "cities": ["Chiradzulu Boma", "Namadzi", "Mbulumbuzi"],
      "areas": {
        "Chiradzulu Boma": ["Chiradzulu Trading", "District Office", "Chiradzulu Market"],
        "Namadzi": ["Namadzi Trading", "Namadzi Market", "Thumbwe"],
        "Mbulumbuzi": ["Mbulumbuzi Trading", "Mbulumbuzi Market", "Ndunde"]
      }
    },
    "Balaka": {
      "cities": ["Balaka Town", "Ulongwe", "Liwonde"],
      "areas": {
        "Balaka Town": ["Balaka Trading", "District Office", "Balaka Market", "Sosola"],
        "Ulongwe": ["Ulongwe Trading", "Ulongwe Market", "Phalula"],
        "Liwonde": ["Liwonde Trading", "National Park Area", "Railway Station"]
      }
    },
    "Neno": {
      "cities": ["Neno Boma", "Ligowe", "Chifunga"],
      "areas": {
        "Neno Boma": ["Neno Trading", "District Office", "Neno Market"],
        "Ligowe": ["Ligowe Trading", "Ligowe Market", "Lisungwi"],
        "Chifunga": ["Chifunga Trading", "Chifunga Market", "Zalewa"]
      }
    },
    "Chitipa": {
      "cities": ["Chitipa Boma", "Karonga", "Misuku"],
      "areas": {
        "Chitipa Boma": ["Chitipa Trading", "District Office", "Border Area"],
        "Karonga": ["Karonga Trading", "Karonga Market", "Wiliro"],
        "Misuku": ["Misuku Trading", "Misuku Hills", "Misuku Market"]
      }
    },
    "Likoma": {
      "cities": ["Likoma Island", "Chizumulu"],
      "areas": {
        "Likoma Island": ["Mbamba", "Ulisa", "Chipyela"],
        "Chizumulu": ["Chizumulu Trading", "Chizumulu Market", "Port Area"]
      }
    },
    "Nsanje": {
      "cities": ["Nsanje Boma", "Bangula", "Sorgin"],
      "areas": {
        "Nsanje Boma": ["Nsanje Trading", "District Office", "Port Area"],
        "Bangula": ["Bangula Trading", "Bangula Market", "Railway Area"],
        "Sorgin": ["Sorgin Trading", "Sorgin Market", "Border Area"]
      }
    }
};

const Location_NearbyATMAndAirport = ({ register, errors }) => {
  const { handleSubmit } = useForm();

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const [nearbyATMs, setNearbyATMs] = useState([""]);
  const [nearbyAirports, setNearbyAirports] = useState([""]);

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
    setSelectedDistrict(e.target.value);
    setSelectedCity(""); // Reset city
    setSelectedArea(""); // Reset area
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedArea(""); // Reset area
  };

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
              {...register("district", { required: "District is required" })}
              value={selectedDistrict}
              onChange={handleDistrictChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>Select District</option>
              {Object.keys(malawiData).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
          </div>

          {/* City Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">City</label>
            <select
              {...register("city", { required: "City is required" })}
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!selectedDistrict}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>Select City</option>
              {selectedDistrict &&
                malawiData[selectedDistrict].cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>

          {/* Area Dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Area</label>
            <select
              {...register("area", { required: "Area is required" })}
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              disabled={!selectedCity}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="" disabled>Select Area</option>
              {selectedCity &&
                malawiData[selectedDistrict].areas[selectedCity].map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
            </select>
            {errors.area && <p className="text-red-500 text-sm">{errors.area.message}</p>}
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
