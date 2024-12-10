"use client"
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";



const SubmitAnCreateShoppingListRequest = () => {


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

    // Handle category change
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        setSubCategories(categoriesWithSub[category]);
    };

    const [selectedProducts, setSelectedProducts] = useState([
        { name: "Apple", quantity: 2 },
        { name: "Banana", quantity: 5 },
    ]);

    const handleAddProduct = (product) => {
        const exists = selectedProducts.find((item) => item.name === product.name);
        if (!exists) {
            setSelectedProducts([...selectedProducts, { name: product.name, quantity: 1 }]);
        }
    };

    const handleRemoveProduct = (productName) => {
        setSelectedProducts(selectedProducts.filter((item) => item.name !== productName));
    };


    return (
        <div className="min-h-screen px-48 py-6 max-sm:px-4">
            {/* <div className="py-4"> */}
            <Navbar heading="Create Shopping List" />

            {/* Category Dropdown */}
            <div className="mb-6">
                <label className="block text-gray-800 font-medium mb-2">Category</label>
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-700"
                >
                    {Object.keys(categoriesWithSub).map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Sub-Category Dropdown */}
            <div className="mb-6">
                <label className="block text-gray-800 font-medium mb-2">Sub-category</label>
                <select className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-700">
                    {subCategories.map((subCategory, index) => (
                        <option key={index} value={subCategory}>
                            {subCategory}
                        </option>
                    ))}
                </select>
            </div>

            {/* Products List */}
            <div className="mb-6">
                {["Apple", "Banana"].map((product) => (
                    <div
                        key={product}
                        className="flex justify-between items-center bg-white shadow p-4 rounded-md mb-2"
                    >
                        <span className="text-gray-800 font-medium"><span className="text-2xl pr-2">+</span> {product}</span>
                        <button onClick={() => handleAddProduct({ name: product })} className=" bg-gray-200 py-1 px-4 rounded-lg font-bold">Add</button>
                    </div>
                ))}
            </div>

            {/* Selected Products */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Selected Products</h2>
                {selectedProducts.map((product) => (
                    <div
                        key={product.name}
                        className="flex items-center bg-white shadow p-4 rounded-md mb-2"
                    >
                        <button onClick={() => handleRemoveProduct(product.name)} className="font-semibold p-3 bg-gray-200 rounded-lg">
                            <FaTrashAlt className="text-xl" />
                        </button>
                        <div className="ml-5">
                            <p className="text-gray-800 font-medium">{product.name}</p>
                            <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Budget Input */}
            <div className="mb-6">
                <label className="block text-gray-800 font-medium mb-2">Budget</label>
                <input
                    type="text"
                    placeholder="Enter your budget"
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
                />
            </div>

            {/* Delivery Date and Time */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block text-gray-800 font-medium mb-2">Delivery Date</label>
                    <input
                        type="date"
                        className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
                    />
                </div>
                <div>
                    <label className="block text-gray-800 font-medium mb-2">Delivery Time</label>
                    <input
                        type="time"
                        className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
                    />
                </div>
            </div>

            {/* Comments */}
            <div className="mb-6">
                <label className="block text-gray-800 font-medium mb-2">Comments</label>
                <textarea
                    placeholder="Add any additional comments or special instructions..."
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
                />
            </div>

            {/* Submit Button */}
            <Link href="/add_marketplace" passHref>
                <button className="w-full bg-cyan-500 text-white py-2 rounded-md font-medium">
                    Post Shopping List
                </button>
            </Link>
        </div>
    );
};

export default SubmitAnCreateShoppingListRequest;