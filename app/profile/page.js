import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';


const UserProfile = () => {

    return (
        <>
        <div className="flex justify-center items-center h-[85vh]">
            
            <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
                
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 text-center">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto border-4 border-white">
                        <Image
                            width={1920}
                            height={1080}
                            src="/marketplace-hero.jpeg"
                            alt="User Avatar" 
                            className="rounded-full w-full h-full"
                        />
                    </div>
                    <h2 className="text-white text-xl font-semibold mt-3">Anna Avetisyan</h2>
                </div>

                
                <div className="p-4 space-y-4">
                    <div className="flex items-center gap-3 border-b pb-2">
                        <i className="fas fa-user text-purple-500"></i>
                        <span className="text-gray-700 text-sm flex-grow">Anna Avetisyan</span>
                    </div>
                    <div className="flex items-center gap-3 border-b pb-2">
                        <i className="fas fa-calendar text-purple-500"></i>
                        <span className="text-gray-700 text-sm flex-grow">Birthday</span>
                    </div>
                    <div className="flex items-center gap-3 border-b pb-2">
                        <i className="fas fa-phone text-purple-500"></i>
                        <span className="text-gray-700 text-sm flex-grow">+123 456 789</span>
                    </div>
                    <div className="flex items-center gap-3 border-b pb-2">
                        <i className="fas fa-instagram text-purple-500"></i>
                        <span className="text-gray-700 text-sm flex-grow">Instagram account</span>
                    </div>
                    <div className="flex items-center gap-3 border-b pb-2">
                        <i className="fas fa-envelope text-purple-500"></i>
                        <span className="text-gray-700 text-sm flex-grow">info@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <i className="fas fa-lock text-purple-500"></i>
                        <span className="text-gray-700 text-sm flex-grow">Password</span>
                    </div>
                </div>

                {/* Edit Profile Button */}
                <div className="p-4">
                    <button className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition duration-300">
                        Edit Profile
                    </button>
                </div>
            </div>

        </div>
        <Footer />
        </>
    );
};

export default UserProfile;