"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaBackward, FaCloudUploadAlt, FaLock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Badge } from "@/components/ui/badge";


const EditProductDetails = () => {
    
    const [productData, setProductData] = useState({
        id: "PRD-001",
        productName: "Fresh Strawberries",
        description: "Sweet and juicy strawberries fresh from the farm",
        marketplace: "Zigwagwa Market",
        category: "FRUITS",
        subCategory: "Strawberry",
        price: "25.99",
        image: "/product-image.jpg",
        createdAt: "2024-01-09",
    });

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated product:", productData);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const formFieldVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50"
        >
            <Navbar heading="Edit Product" />
            
            <div className="container mx-auto px-4 py-8 mt-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto"
                >
                    {/* Product Info Card */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100"
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                            <div className="flex justify-between items-center">
                                <motion.button 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => router.back()} 
                                    className="p-2 bg-white/20 rounded-full transition-colors text-white"
                                >
                                    <FaBackward />
                                </motion.button>
                                <h2 className="text-2xl font-bold text-white">Edit Product</h2>
                                <Badge variant="secondary" className="bg-white/20 text-white">
                                    ID: {productData.id}
                                </Badge>
                            </div>
                        </div>

                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Uneditable Fields Section */}
                                <motion.div
                                    variants={formFieldVariants}
                                    className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                                >
                                    <h3 className="text-sm font-semibold text-gray-600 mb-4 flex items-center gap-2">
                                        <FaLock className="text-gray-400" />
                                        Product Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-sm text-gray-500">Product Name</label>
                                            <div className="mt-1 p-3 bg-gray-100 rounded-lg text-gray-700 font-medium">
                                                {productData.productName}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-500">Category</label>
                                            <div className="mt-1 p-3 bg-gray-100 rounded-lg text-gray-700 font-medium">
                                                {productData.category} - {productData.subCategory}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-500">Created Date</label>
                                            <div className="mt-1 p-3 bg-gray-100 rounded-lg text-gray-700 font-medium">
                                                {productData.createdAt}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-500">Marketplace</label>
                                            <div className="mt-1 p-3 bg-gray-100 rounded-lg text-gray-700 font-medium">
                                                {productData.marketplace}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Editable Fields Section */}
                                <motion.div variants={formFieldVariants} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">
                                            Price
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-3 text-gray-500">$</span>
                                            <input
                                                type="text"
                                                value={productData.price}
                                                onChange={(e) => setProductData({...productData, price: e.target.value})}
                                                className="w-full p-3 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <textarea
                                            value={productData.description}
                                            onChange={(e) => setProductData({...productData, description: e.target.value})}
                                            rows={4}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                                        />
                                    </div>

                                    <motion.div 
                                        whileHover={{ scale: 1.02 }}
                                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 transition-all hover:border-blue-500"
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            id="imageUpload"
                                            onChange={(e) => setProductData({
                                                ...productData,
                                                image: e.target.files[0]
                                            })}
                                        />
                                        <label 
                                            htmlFor="imageUpload" 
                                            className="flex flex-col items-center cursor-pointer space-y-4"
                                        >
                                            <motion.div
                                                whileHover={{ rotate: 180 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <FaCloudUploadAlt className="w-12 h-12 text-gray-400" />
                                            </motion.div>
                                            <div className="text-center">
                                                <p className="text-gray-600 font-medium">
                                                    Update product image
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    or click to browse
                                                </p>
                                            </div>
                                        </label>
                                    </motion.div>
                                </motion.div>

                                <motion.div 
                                    variants={formFieldVariants}
                                    className="flex justify-end gap-4 pt-6 border-t"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="button"
                                        onClick={() => router.back()}
                                        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-300"
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all focus:ring-2 focus:ring-blue-300"
                                    >
                                        Save Changes
                                    </motion.button>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default EditProductDetails;