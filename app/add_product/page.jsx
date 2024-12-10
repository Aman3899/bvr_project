"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaBackward } from "react-icons/fa";


const AddProductDetails = () => {

    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ category, productName, price, description });
    };

    // Handle category change
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setCategory(category);
    };

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

    let router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-64 max-sm:px-4">

            <div className="bg-white rounded-lg shadow-lg p-6 w-full mx-sm:py-5">
                <div className="flex border-b border-gray-400 mb-5">
                    <button onClick={() => { router.back() }} className="pb-3 px-1"><FaBackward/></button>
                    <h2 className="text-xl w-full text-center font-semibold mb-4">Add Product Details</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Category Dropdown */}
                    <div className="mb-6">
                        <label className="block text-gray-800 font-medium mb-2">Category</label>
                        <select
                            value={category}
                            onChange={handleCategoryChange}
                            className="w-full p-2 border rounded-md text-gray-700 bg-gray-50"
                        >
                            {Object.keys(categoriesWithSub).map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Product Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Product Name
                        </label>
                        <input
                            type="text"
                            placeholder="Samsung Galaxy S21 Ultra"
                            className="w-full p-2 border rounded-md text-gray-700 bg-gray-50"
                        />
                    </div>

                    {/* Upload Image */}
                    <div className="mb-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500">
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="imageUpload"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setImage(file); // Assuming `setImage` updates the state for the selected image
                                    }
                                }}
                            />
                            <label htmlFor="imageUpload" className="flex flex-col items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16v4a1 1 0 001 1h16a1 1 0 001-1v-4M16 10l-4-4m0 0L8 10m4-4v12" />
                                </svg>
                                <p className="text-gray-400 mt-2 text-sm">Click to upload image</p>
                                {image && <p className="text-sm text-green-600 mt-1">Image selected: {image.name}</p>}
                            </label>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price
                        </label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="$999.99"
                            className="w-full p-2 border rounded-md text-gray-700 bg-gray-50"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter product description (optional)"
                            className="w-full p-2 border rounded-md text-gray-700 bg-gray-50"
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
                        >
                            + Add
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductDetails;