import React from 'react';
import { FaAd, FaHammer, FaInfoCircle, FaLock, FaPhone, FaQuestionCircle } from "react-icons/fa";



const Expolre_Our_Sites = () => {
    return (
        <div>
            {/* Explore Our Site Section */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Explore Our Site</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { label: "About", link: "/about", icon: FaInfoCircle },
                        { label: "Contact", link: "/contact", icon: FaPhone },
                        { label: "Advertise", link: "/advertise", icon: FaAd },
                        { label: "Privacy", link: "/privacy", icon: FaLock },
                        { label: "How", link: "/how", icon: FaQuestionCircle },
                        { label: "Terms", link: "/terms", icon: FaHammer },
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="bg-gray-100 hover:bg-gray-200 shadow-md rounded-md p-4 text-center"
                        >
                            <div className="text-md">{item.icon && <item.icon className="text-xl inline-block mr-2" />} {item.label}</div>

                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Expolre_Our_Sites;