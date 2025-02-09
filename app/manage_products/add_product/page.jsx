"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaBackward, FaCloudUploadAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form"; // Import useForm

const AddProductDetails = () => {
    const [image, setImage] = useState(null);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm(); // Hook initialization

    const onSubmit = (data) => {
        console.log(data);
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

    const markets = [
        { name: "Zigwagwa Market", distance: "2 km", image: "/marketplace-image.jpeg" },
        { name: "Salisbury Market", distance: "3 km", image: "/marketplace-image.jpeg" },
        { name: "Luwinga Market", distance: "5 km", image: "/marketplace-image.jpeg" },
        { name: "Mzuzu Market", distance: "7 km", image: "/marketplace-image.jpeg" },
        { name: "Limbe Market", distance: "4 km", image: "/marketplace-image.jpeg" },
        { name: "Kamuzu Market", distance: "6 km", image: "/marketplace-image.jpeg" },
        { name: "Bwaila Market", distance: "8 km", image: "/marketplace-image.jpeg" },
        { name: "Chichiri Market", distance: "9 km", image: "/marketplace-image.jpeg" },
        { name: "Mulanje Market", distance: "10 km", image: "/marketplace-image.jpeg" },
        { name: "Dedza Market", distance: "11 km", image: "/marketplace-image.jpeg" },
    ];

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
                            <h2 className="text-2xl font-bold text-white">Add Product</h2>
                            <Badge variant="secondary" className="bg-white/20 text-white">
                                Insert
                            </Badge>
                        </div>
                    </div>
                    <div className="p-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <motion.div
                                variants={formFieldVariants}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Category</label>
                                    <select
                                        {...register("category", { required: "Category is required" })}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                                    >
                                        <option value="">Select Category</option>
                                        {Object.keys(categoriesWithSub).map((cat) => (
                                            <option key={cat} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                                </motion.div>

                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Product Name</label>
                                    <input
                                        {...register("productName", { required: "Product name is required" })}
                                        type="text"
                                        placeholder="Enter product name"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                                    />
                                    {errors.productName && <p className="text-red-500 text-sm">{errors.productName.message}</p>}
                                </motion.div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Marketplace</label>
                                <select
                                    {...register("marketplace", { required: "Marketplace is required" })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                                >
                                    <option value="">Select Marketplace</option>
                                    {markets.map((market) => (
                                        <option key={market.name} value={market.name}>
                                            {market.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.marketplace && <p className="text-red-500 text-sm">{errors.marketplace.message}</p>}
                            </motion.div>

                            <motion.div variants={formFieldVariants} className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Upload Image</label>
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
                                        <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                                            <FaCloudUploadAlt className="w-12 h-12 text-gray-400" />
                                        </motion.div>
                                        <div className="text-center">
                                            <p className="text-gray-600 font-medium">Drag and drop your image here</p>
                                            <p className="text-sm text-gray-500">or click to browse</p>
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

                            <motion.div variants={formFieldVariants} className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Price</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                                    <input
                                        {...register("price", { required: "Price is required" })}
                                        type="text"
                                        placeholder="0.00"
                                        className="w-full p-3 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                                    />
                                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={formFieldVariants}
                                className="space-y-2"
                            >
                                <label className="text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    {...register("description")}
                                    placeholder="Enter product description"
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
                                />
                            </motion.div>

                            <motion.div variants={formFieldVariants}>
                                <button
                                    type="submit"
                                    className="w-full p-4 bg-blue-600 text-white rounded-lg shadow-lg transition-all hover:bg-blue-500"
                                >
                                    Submit Product Details
                                </button>
                            </motion.div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AddProductDetails;