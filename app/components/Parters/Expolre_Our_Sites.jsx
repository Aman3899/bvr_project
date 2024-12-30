"use client";
import { useState } from 'react';
import { FaAd, FaHammer, FaInfoCircle, FaLock, FaPhone, FaQuestionCircle } from "react-icons/fa";
import { motion } from 'framer-motion';

const ExploreCard = ({ label, link, icon: Icon, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`
        relative 
        overflow-hidden
        bg-gradient-to-br from-white to-gray-50
        rounded-xl
        p-6
        group
        transition-all duration-300
        transform
        ${isHovered ? 'scale-105' : 'scale-100'}
        hover:shadow-lg
        border border-gray-100
      `}
        >
            {/* Background animation */}
            <div className={`
        absolute inset-0
        bg-gradient-to-r from-blue-50 to-purple-50
        transition-opacity duration-300
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `} />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-3">
                <Icon className={`
          text-3xl
          transition-all duration-300
          ${isHovered ? 'text-blue-600 transform scale-110' : 'text-gray-600'}
        `} />

                <span className={`
          font-medium
          transition-colors duration-300
          ${isHovered ? 'text-blue-600' : 'text-gray-700'}
        `}>
                    {label}
                </span>
            </div>

            {/* Hover effect overlay */}
            <div className={`
        absolute inset-0
        bg-gradient-to-br from-blue-600/5 to-purple-600/5
        transition-opacity duration-300
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `} />
        </motion.a>
    );
};

const Explore_Our_Sites = () => {
    const items = [
        { label: "About", link: "/dealbank/about_us", icon: FaInfoCircle },
        { label: "Contact", link: "/dealbank/contact_us", icon: FaPhone },
        { label: "Advertise", link: "/dealbank/advertise", icon: FaAd },
        { label: "Privacy", link: "/dealbank/privacy", icon: FaLock },
        { label: "How", link: "/dealbank/how", icon: FaQuestionCircle },
        { label: "Terms", link: "/dealbank/terms", icon: FaHammer }
    ];

    return (
        <div className="py-12 px-4">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold mb-8 text-center"
            >
                Explore Our Site
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <ExploreCard
                        key={index}
                        index={index}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Explore_Our_Sites;