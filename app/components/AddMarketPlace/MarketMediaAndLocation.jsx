"use client";
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloudUploadAlt, FaVideo, FaImage, FaTrash } from 'react-icons/fa';
import { useForm, Controller } from 'react-hook-form';
import Image from 'next/image';

const MarketMediaAndLocation = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [showError, setShowError] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    const MAX_FILE_SIZE = 3 * 1024 * 1024; // 5MB
    const MAX_FILES = 3; //Maximum number of files
    const YOUTUBE_REGEX = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+/;

    const { register, control, watch, formState: { errors }, setValue } = useForm({
        defaultValues: {
            videoLink: "",
            media: []
        }
    });

    const videoLink = watch("videoLink");
    const media = watch("media");

    const getYouTubeVideoId = (url) => {
        const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        return match?.[1] || null;
    };

    const handleFileUpload = useCallback(async (file) => {
        if (!file) return;

        if (!file.type.startsWith("image/") && !file.type.startsWith("application/")) {
            setShowError("Please upload a valid image or document file");
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setShowError("File must be less than 3MB");
            return;
        }

        if (media.length >= MAX_FILES) {
            setShowError(`You can only upload a maximum of ${MAX_FILES} files.`);
            return;
        }

        setIsUploading(true);
        try {
            // Simulate file upload - Replace with your actual upload logic
            await new Promise(resolve => setTimeout(resolve, 1000));

            // In a real application, you would upload to your server here
            // and get back a file path. For now, we'll create a mock path
            const mockFilePath = `/uploads/${file.name}`;

            setValue("media", [...media, {
                mediaType: file.type.startsWith("image/") ? "image" : "document",
                filePath: mockFilePath,
                preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null
            }]);

            setShowError("");
        } catch (error) {
            setShowError("Error uploading file");
            console.error("Upload error:", error);
        } finally {
            setIsUploading(false);
        }
    }, [media, setValue]);

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
        handleFileUpload(file);
    }, [handleFileUpload]);

    const removeMedia = (index) => {
        const newMedia = [...media];
        newMedia.splice(index, 1);
        setValue("media", newMedia);
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
            className="w-full max-w-4xl mx-auto p-4"
        >
            <div className="bg-white rounded-xl shadow-xl p-8 space-y-8">
                {/* Media Upload Section */}
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
                    <Controller
                        name="media"
                        control={control}
                        rules={{
                            validate: {
                                fileType: (value) => {
                                    if (value && value.length > 0) {
                                        for (let file of value) {
                                            if (!file.mediaType || (!file.mediaType.startsWith("image/") && file.mediaType !== "document")) {
                                                return "Each file must be a valid image or document.";
                                            }
                                        }
                                    }
                                    return true;
                                },
                                fileSize: (value) => {
                                    if (value && value.length > 0) {
                                        for (let file of value) {
                                            if (file.size > MAX_FILE_SIZE) {
                                                return "Each file must be less than 3.";
                                            }
                                        }
                                    }
                                    return true;
                                },
                                maxFiles: (value) => {
                                    if (value && value.length > MAX_FILES) {
                                        return `You can upload a maximum of ${MAX_FILES} files.`;
                                    }
                                    return true;
                                },
                                minFiles: (value) => {
                                    if (!value || value.length < 1) {
                                        return "At least one media file is required.";
                                    }
                                    return true;
                                }
                            }
                        }}
                        render={({ field }) => (
                            <>
                                <input
                                    type="file"
                                    accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    className="hidden"
                                    id="fileUpload"
                                    multiple // Enable multiple file selection
                                    {...register("media", {
                                        validate: {
                                            fileType: (files) => {
                                                if (files && files.length > 0) {
                                                    for (let file of files) {
                                                        if (!file.type.startsWith("image/") && !file.type.startsWith("application/")) {
                                                            return "Each file must be a valid image or document.";
                                                        }
                                                    }
                                                }
                                                return true;
                                            },
                                            fileSize: (files) => {
                                                if (files && files.length > 0) {
                                                    for (let file of files) {
                                                        if (file.size > MAX_FILE_SIZE) {
                                                            return "Each file must be less than 3MB.";
                                                        }
                                                    }
                                                }
                                                return true;
                                            },
                                            maxFiles: (files) => {
                                                if (files && files.length > MAX_FILES) {
                                                    return `You can upload a maximum of ${MAX_FILES} files.`;
                                                }
                                                return true;
                                            }
                                        },
                                        onChange: (e) => {
                                            const files = Array.from(e.target.files); // Convert FileList to array
                                            Promise.all(files.map(async (file) => {
                                                if (!file.type.startsWith("image/") && !file.type.startsWith("application/")) {
                                                    setShowError("Please upload a valid image or document file");
                                                    return null;
                                                }

                                                if (file.size > MAX_FILE_SIZE) {
                                                    setShowError("File must be less than 3MB");
                                                    return null;
                                                }
                                                setIsUploading(true);
                                                try {
                                                    await new Promise(resolve => setTimeout(resolve, 1000));
                                                    const mockFilePath = `/uploads/${file.name}`;
                                                    return {
                                                        mediaType: file.type.startsWith("image/") ? "image" : "document",
                                                        filePath: mockFilePath,
                                                        size: file.size,
                                                        preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null
                                                    };
                                                }
                                                catch (error) {
                                                    setShowError("Error uploading file");
                                                    console.error("Upload error:", error);
                                                    return null;
                                                } finally {
                                                    setIsUploading(false);
                                                }
                                            })).then((processedFiles) => {
                                                const validFiles = processedFiles.filter(file => file !== null);
                                                setValue("media", [...media, ...validFiles]);
                                            });
                                        }
                                    })}
                                />

                                <motion.label
                                    htmlFor="fileUpload"
                                    className="flex flex-col items-center cursor-pointer"
                                >
                                    <FaCloudUploadAlt className="h-16 w-16 text-blue-500" />
                                    <p className="text-gray-600 mt-4 text-lg font-medium">
                                        {isDragging ? 'Drop your files here' : 'Drag and drop or click to upload'}
                                    </p>
                                    <p className="text-gray-400 text-sm">Max size: 3MB | Images and Documents</p>
                                </motion.label>
                            </>
                        )}
                    />
                    {errors.media && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm"
                        >
                            {errors.media.message}
                        </motion.p>
                    )}
                    {/* Media Preview Grid */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {Array.isArray(media) && media.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                {item.mediaType === "image" ? (
                                    <Image
                                        width={300}
                                        height={200}
                                        src={item.preview}
                                        alt={`Upload ${index + 1}`}
                                        className="w-full h-40 object-cover rounded-lg shadow-md"
                                    />
                                ) : (
                                    <div className="w-full h-40 bg-gray-100 rounded-lg shadow-md flex items-center justify-center">
                                        <FaImage className="h-8 w-8 text-gray-400" />
                                    </div>
                                )}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => removeMedia(index)}
                                    className="absolute -top-3 -right-3 p-2 bg-red-500 text-white rounded-full shadow-lg"
                                >
                                    <FaTrash className="h-4 w-4" />
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>

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
                                <span>{showError}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {/* Video Link Section */}
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