"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloudUploadAlt, FaVideo, FaImage, FaCheck, FaTimes } from 'react-icons/fa';

const MarketMediaAndLocation = ({ image, setImage, videoLink, setVideoLink }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                setImage(file);
                setShowError(false);
            } else {
                setShowError(true);
                setTimeout(() => setShowError(false), 3000);
            }
        }
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            setImage(file);
            setShowError(false);
        } else {
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const successVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full max-w-4xl mx-auto p-1"
        >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl p-6 space-y-8">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-500 rounded-lg">
                        <FaImage className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Visual and Location Data</h2>
                </div>

                {/* Image Upload Section */}
                <div 
                    className={`relative border-3 border-dashed rounded-xl p-8
                        ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'}
                        transition-all duration-200 ease-in-out`}
                    onDragEnter={handleDragIn}
                    onDragLeave={handleDragOut}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                >
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="imageUpload"
                        onChange={handleImageUpload}
                    />
                    <label 
                        htmlFor="imageUpload" 
                        className="flex flex-col items-center cursor-pointer"
                    >
                        <motion.div 
                            animate={{ y: isDragging ? -10 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaCloudUploadAlt className="h-16 w-16 text-blue-500" />
                        </motion.div>
                        <p className="text-gray-600 mt-4 text-lg font-medium">
                            {isDragging ? 'Drop your image here' : 'Drag and drop or click to upload'}
                        </p>
                        <p className="text-gray-400 mt-2 text-sm">
                            Supported formats: JPG, PNG, GIF
                        </p>
                        <AnimatePresence>
                            {image && (
                                <motion.div
                                    variants={successVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className="flex items-center gap-2 mt-4 text-green-600 bg-green-50 px-4 py-2 rounded-full"
                                >
                                    <FaCheck className="h-4 w-4" />
                                    <span className="text-sm font-medium">{image.name}</span>
                                </motion.div>
                            )}
                            {showError && (
                                <motion.div
                                    variants={successVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className="flex items-center gap-2 mt-4 text-red-600 bg-red-50 px-4 py-2 rounded-full"
                                >
                                    <FaTimes className="h-4 w-4" />
                                    <span className="text-sm font-medium">Please upload an image file</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </label>
                </div>

                {/* Video Link Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-purple-500 rounded-lg">
                            <FaVideo className="h-6 w-6 text-white" />
                        </div>
                        <label className="text-xl font-bold text-gray-800">Video Link</label>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="relative"
                    >
                        <input
                            type="url"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
                                     shadow-sm transition-all duration-200 
                                     focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 focus:outline-none
                                     hover:border-purple-400"
                            placeholder="https://youtu.be/example"
                            value={videoLink}
                            onChange={(e) => setVideoLink(e.target.value)}
                        />
                        {videoLink && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                <FaCheck className="h-5 w-5 text-green-500" />
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default MarketMediaAndLocation;