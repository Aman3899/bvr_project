"use client";
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloudUploadAlt, FaVideo, FaImage, FaCheck, FaTimes, FaTrash, FaPlay } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const MarketMediaAndLocation = ({ register, errors, watch }) => {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [showError, setShowError] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const videoLink = watch?.("videoLink") || "";

    const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
    const YOUTUBE_REGEX = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/;

    const getYouTubeVideoId = (url) => {
        const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        return match?.[1] || null;
    };

    const handleImageUpload = useCallback((file) => {
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setShowError("Please upload a valid image file");
            return;
        }
        
        if (file.size > MAX_IMAGE_SIZE) {
            setShowError("Image must be less than 5MB");
            return;
        }

        setIsUploading(true);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(file);
            setImagePreview(reader.result);
            setShowError("");
            setIsUploading(false);
        };
        reader.readAsDataURL(file);
    }, []);

    const handleDrag = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDragIn = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragOut = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        handleImageUpload(file);
    }, [handleImageUpload]);

    const removeImage = () => {
        setImage(null);
        setImagePreview(null);
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

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-4xl mx-auto p-1"
        >
            <div className="bg-white rounded-xl shadow-xl p-8 space-y-8">
                <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg">
                        <FaImage className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Visual and Location Data</h2>
                </motion.div>
                
                <div 
                    className={`relative border-3 border-dashed rounded-xl p-8 transition-all duration-300
                        ${isDragging 
                            ? 'border-blue-500 bg-blue-50 shadow-lg scale-102' 
                            : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-gray-100'
                        }`}
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
                        onChange={(e) => handleImageUpload(e.target.files[0])} 
                    />
                    
                    <AnimatePresence mode="wait">
                        {!imagePreview ? (
                            <motion.label 
                                htmlFor="imageUpload"
                                className="flex flex-col items-center cursor-pointer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <FaCloudUploadAlt className="h-16 w-16 text-blue-500" />
                                <p className="text-gray-600 mt-4 text-lg font-medium">
                                    {isDragging ? 'Drop your image here' : 'Drag and drop or click to upload'}
                                </p>
                                <p className="text-gray-400 text-sm">Max size: 5MB | JPG, PNG, GIF</p>
                            </motion.label>
                        ) : (
                            <motion.div 
                                className="relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                            >
                                <img 
                                    src={imagePreview} 
                                    alt="Preview" 
                                    className="max-h-64 mx-auto rounded-lg shadow-md"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={removeImage}
                                    className="absolute -top-3 -right-3 p-2 bg-red-500 text-white rounded-full shadow-lg"
                                >
                                    <FaTrash className="h-4 w-4" />
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {isUploading && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="absolute inset-0 bg-white/80 flex items-center justify-center"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
                                    <span className="text-blue-500 font-medium">Uploading...</span>
                                </div>
                            </motion.div>
                        )}
                        {showError && (
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-red-600 bg-red-50 px-4 py-2 rounded-full mt-2 flex items-center gap-2 shadow-lg"
                            >
                                <FaTimes /><span>{showError}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="space-y-4">
                    <motion.div 
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg">
                            <FaVideo className="h-6 w-6 text-white" />
                        </div>
                        <label className="text-xl font-bold text-gray-800">Video Link</label>
                    </motion.div>
                    
                    <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="relative space-y-4"
                    >
                        <input 
                            type="url" 
                            {...register("videoLink", { 
                                validate: value => !value || YOUTUBE_REGEX.test(value) || "Invalid YouTube URL"
                            })}
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg shadow-sm transition-all
                                ${errors.videoLink 
                                    ? 'border-red-500 focus:ring-red-200' 
                                    : 'border-gray-200 focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500'
                                }`}
                            placeholder="https://youtu.be/example" 
                        />
                        
                        <AnimatePresence>
                            {errors.videoLink && (
                                <motion.p 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-red-500 text-sm"
                                >
                                    {errors.videoLink.message}
                                </motion.p>
                            )}
                        </AnimatePresence>

                        {videoLink && !errors.videoLink && getYouTubeVideoId(videoLink) && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg"
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoLink)}`}
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0"
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default MarketMediaAndLocation;