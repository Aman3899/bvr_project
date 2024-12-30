"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaBackward, FaCloudUploadAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const AddProductDetails = () => {
    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ category, productName, price, description });
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        }
    };

    const formFieldVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    const buttonVariants = {
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    };

    const categoriesWithSub = {
        GRAIN: ["Maize", "Oats", "Barley", "Rice", "Quinoa", "Rye", "Wheat", "Millet", "Sorghum"],
        FRUITS: ["Strawberry", "Blueberries", "Raspberries", "Cranberries", "Oranges"],
        VEGETABLES: ["Lettuce", "Spinach", "Kale", "Aragula", "Chinese"],
        LEGUMES: ["Kidney beans", "Black beans", "Pinto beans", "Lentils", "Cowpeas"],
        "NUTS & SEEDS": ["Walnut", "Almond", "Pecans", "Hazel nuts", "Pistachio"],
        HERBS: ["Rosemary", "Thyme", "Parsley", "Cilantro", "Lavender"],
        MEATS: ["Beef", "Pork", "Lamb", "Turkey", "Ham"],
        "SEA FOOD": ["Fish", "Salmon", "Tuna", "Tilapia", "Chambo"],
        OTHER: ["Mandasi", "Eggs", "Honey", "Cheese", "Milk"],
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
        >
            <Navbar heading="Add Product Details" />
            
            <div className="container mx-auto px-4 py-8 mt-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
                >
                    <div className="p-6">
                        <motion.div 
                            variants={itemVariants}
                            className="flex items-center border-b border-gray-200 pb-4 mb-6"
                        >
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => router.back()} 
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <FaBackward className="text-gray-600" />
                            </motion.button>
                            <motion.h2 
                                variants={itemVariants}
                                className="text-2xl font-bold text-center text-gray-800 flex-1"
                            >
                                Add Product Details
                            </motion.h2>
                        </motion.div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div 
                                variants={formFieldVariants}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Category
                                    </label>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                                    >
                                        <option value="">Select Category</option>
                                        {Object.keys(categoriesWithSub).map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </motion.div>

                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        placeholder="Enter product name"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                                    />
                                </motion.div>
                            </motion.div>

                            <motion.div 
                                variants={formFieldVariants}
                                className="space-y-2"
                            >
                                <label className="text-sm font-medium text-gray-700">
                                    Upload Image
                                </label>
                                <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 transition-all hover:border-blue-500"
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        id="imageUpload"
                                        onChange={(e) => setImage(e.target.files[0])}
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
                                                Drag and drop your image here
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                or click to browse
                                            </p>
                                        </div>
                                        <AnimatePresence>
                                            {image && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="text-sm text-green-600"
                                                >
                                                    Selected: {image.name}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </label>
                                </motion.div>
                            </motion.div>

                            <motion.div 
                                variants={formFieldVariants}
                                className="space-y-2"
                            >
                                <label className="text-sm font-medium text-gray-700">
                                    Price
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                                    <input
                                        type="text"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full p-3 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                                    />
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={formFieldVariants}
                                className="space-y-2"
                            >
                                <label className="text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter product description"
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                                />
                            </motion.div>

                            <motion.div 
                                variants={formFieldVariants}
                                className="flex justify-between pt-4"
                            >
                                <motion.button
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    type="button"
                                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors focus:ring-2 focus:ring-gray-300"
                                >
                                    + Add Another
                                </motion.button>
                                <motion.button
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    type="submit"
                                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-blue-300"
                                >
                                    Submit Product
                                </motion.button>
                            </motion.div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AddProductDetails;