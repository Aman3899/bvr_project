"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaTrashAlt,
    FaShoppingBasket,
    FaCalendarAlt,
    FaClock,
    FaComments,
    FaPlus,
    FaWallet,
    FaBox
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";


const SubmitAnCreateShoppingListRequest = () => {

    const router = useRouter();
    const categoriesWithSub = {
        GRAIN: ["Maize", "Oats", "Barley", "Rice", "Quinoa", "Rye", "Wheat", "Millet", "Sorghum"],
        FRUITS: ["Strawberry", "Blueberries", "Raspberries", "Cranberries", "Oranges", "Tangerines", "Limes", "Grapefruits", "Mangoes", "Pineapples", "Papayas", "Kiwi", "Peaches", "Plums", "Quince", "Watermelons", "Cantaloupe", "Honeydew", "Casaba", "Figs", "Pomegranates", "Loquats", "Grapes", "Avocado"],
        VEGETABLES: ["Lettuce", "Spinach", "Kale", "Aragula", "Chinese", "Rape", "Broccoli", "Cauliflower", "Cabbage", "Carrots", "Beets", "Turnips", "Onions", "Garlic", "Shallots", "Leeks", "Oyster mushrooms", "Button mushrooms", "Zucchini", "Pumpkins", "Tomatoes", "Peppers", "Cucumber", "Okra", "Eggplant"],
        LEGUMES: ["Kidney beans", "Black beans", "Pinto beans", "Lentils", "Cowpeas"],
        "NUTS & SEEDS": ["Walnut", "Almond", "Pecans", "Hazel nuts", "Pistachio", "Sunflower seeds", "Pumpkin seeds", "Chia seeds", "Hemp seeds"],
        HERBS: ["Rosemary", "Thyme", "Parsley", "Cilantro", "Lavender", "Chamomile", "Ginger", "Dandelion", "Turmeric"],
        MEATS: ["Beef", "Pork", "Lamb", "Turkey", "Ham", "Duck", "Bacon", "Mbewa"],
        "SEA FOOD": ["Fish", "Salmon", "Tuna", "Tilapia", "Chambo", "Mcheni", "Bonya", "Usipa", "Oyster", "Catfish"],
        OTHER: ["Mandasi", "Eggs", "Honey", "Cheese", "Milk", "Yogurt", "Mozzarella", "Jam", "Scones", "Bwemba", "Malambe"],
    };

    const [selectedCategory, setSelectedCategory] = useState("GRAIN");
    const [subCategories, setSubCategories] = useState(categoriesWithSub[selectedCategory]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        setSubCategories(categoriesWithSub[category]);
    };

    const handleAddProduct = (productName) => {
        setSelectedProducts((prevProducts) => {
            // Check if the product is already in the list
            const existingProduct = prevProducts.find((item) => item.name === productName);
            if (existingProduct) {
                // If the product exists, increment the quantity
                return prevProducts.map((item) =>
                    item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // If it's a new product, add it to the list with quantity 1
                return [...prevProducts, { name: productName, quantity: 1 }];
            }
        });
    };

    const handleRemoveProduct = (productName) => {
        setSelectedProducts((prevProducts) =>
            prevProducts.filter((item) => item.name !== productName)
        );
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const handlePostShoppingList = (data) => {
        router.push("/");
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-48 py-6 mt-20">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-4xl mx-auto"
            >
                <Navbar heading="Create Shopping List" />

                {/* Main Form Container */}
                <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
                    {/* Category Selection */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <label className="flex items-center gap-2 text-gray-800 font-medium mb-2">
                            <FaBox className="text-cyan-500" />
                            Category
                        </label>
                        <select
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            className="w-full border border-gray-200 rounded-lg p-3 bg-white text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                        >
                            {Object.keys(categoriesWithSub).map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </motion.div>

                    {/* Sub-Category Selection */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <label className="flex items-center gap-2 text-gray-800 font-medium mb-2">
                            <FaShoppingBasket className="text-cyan-500" />
                            Sub-category
                        </label>
                        <select className="w-full border border-gray-200 rounded-lg p-3 bg-white text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200">
                            {subCategories.map((subCategory, index) => (
                                <option key={index} value={subCategory}>{subCategory}</option>
                            ))}
                        </select>
                    </motion.div>

                    {/* Products List */}
                    <motion.div variants={itemVariants} className="mb-6">
                        {subCategories.map((product) => (
                            <motion.div
                                key={product}
                                whileHover={{ scale: 1.02 }}
                                className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-4 rounded-lg mb-2 transition-colors duration-200"
                            >
                                <span className="text-gray-800 font-medium flex items-center">
                                    <FaPlus className="text-cyan-500 mr-2" /> {product}
                                </span>
                                <button
                                    onClick={() => handleAddProduct(product)}
                                    className="bg-cyan-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-cyan-600 transition-colors duration-200"
                                >
                                    Add
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Selected Products */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Selected Products</h2>
                        <AnimatePresence>
                            {selectedProducts.map((product) => (
                                <motion.div
                                    key={product.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="flex items-center bg-white border border-gray-100 p-4 rounded-lg mb-2 hover:shadow-md transition-all duration-200"
                                >
                                    <button
                                        onClick={() => handleRemoveProduct(product.name)}
                                        className="p-2 hover:bg-red-50 rounded-lg group transition-colors duration-200"
                                    >
                                        <FaTrashAlt className="text-gray-400 group-hover:text-red-500 transition-colors duration-200" />
                                    </button>
                                    <div className="ml-4 flex-1">
                                        <p className="text-gray-800 font-medium">{product.name}</p>
                                        <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Budget Input */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <label className="flex items-center gap-2 text-gray-800 font-medium mb-2">
                            <FaWallet className="text-cyan-500" />
                            Budget
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your budget"
                            className="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                        />
                    </motion.div>

                    {/* Delivery Date and Time */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="flex items-center gap-2 text-gray-800 font-medium mb-2">
                                <FaCalendarAlt className="text-cyan-500" />
                                Delivery Date
                            </label>
                            <input
                                type="date"
                                className="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>
                        <div>
                            <label className="flex items-center gap-2 text-gray-800 font-medium mb-2">
                                <FaClock className="text-cyan-500" />
                                Delivery Time
                            </label>
                            <input
                                type="time"
                                className="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>
                    </motion.div>

                    {/* Comments */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <label className="flex items-center gap-2 text-gray-800 font-medium mb-2">
                            <FaComments className="text-cyan-500" />
                            Comments
                        </label>
                        <textarea
                            placeholder="Add any additional comments or special instructions..."
                            className="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 min-h-[100px]"
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                    <button onClick={handlePostShoppingList} className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-3 rounded-lg font-medium shadow-lg shadow-cyan-500/20 transition-all duration-200">
                        Post Shopping List
                    </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default SubmitAnCreateShoppingListRequest;
