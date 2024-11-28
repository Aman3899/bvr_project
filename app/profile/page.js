"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBackward } from "react-icons/fa";
import { useRouter } from "next/navigation";


const UserProfile = () => {

    let router = useRouter();

    const [profile, setProfile] = useState({
        name: "Aman Ullah",
        birthday: "2004-01-10", // Default date value in 'YYYY-MM-DD' format
        phone: "+92 309 1297936",
        instagram: "@amanullah0830",
        email: "m.amanullah0830@gmail.com",
        password: "***********",
    });

    const handleChange = (e, field) => {
        setProfile({ ...profile, [field]: e.target.value });
    };

    const handleSave = () => {
        // Add logic to handle saving the edited info
        console.log("Profile saved:", profile);
        alert("Profile information saved successfully!");
    };

    return (
        <>
        <div className="flex items-center justify-between py-7 px-8">
            <button onClick={() => { router.back() }} className="text-xl text-gray-600"><FaBackward /></button>
            <h1 className="text-2xl font-bold text-center flex-1">User Profile</h1>
        </div>

        <div className="flex flex-col justify-center items-center h-5/6">

            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-6">
                {/* Header with Image and Name */}
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-500 mb-4">
                        <Image
                            width={1920}
                            height={1080}
                            src="/marketplace-hero.jpeg"
                            alt="Profile"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => handleChange(e, "name")}
                        className="text-xl font-bold text-gray-700 text-center focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    />
                </div>

                {/* Profile Details */}
                <div className="mt-6 space-y-4">
                    {Object.keys(profile).map((field, index) =>
                        field !== "name" ? (
                            <div key={index} className="flex justify-between items-center">
                                <label
                                    className="text-gray-600 font-medium capitalize"
                                    htmlFor={field}
                                >
                                    {field}
                                </label>
                                <input
                                    type={field === "birthday" ? "date" : "text"}
                                    id={field}
                                    value={profile[field]}
                                    onChange={(e) => handleChange(e, field)}
                                    className="flex-1 ml-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-80 max-sm:w-fit"
                                />
                            </div>
                        ) : null
                    )}
                </div>

                {/* Save Button */}
                <div className="mt-6 text-center">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default UserProfile;