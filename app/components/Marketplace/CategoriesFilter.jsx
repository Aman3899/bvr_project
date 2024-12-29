"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FilterSection = () => {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
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

    // Handle category change
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setSubcategory(""); // Reset subcategory when category changes
    };

    // Handle subcategory change
    const handleSubcategoryChange = (e) => {
        setSubcategory(e.target.value);
    };

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center w-full space-y-6 sm:space-y-0 sm:space-x-10 mb-8">
            {/* Category Dropdown */}
            <motion.div
                className="w-full sm:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="w-full text-center p-3 rounded-md border bg-blue-500 text-white font-bold border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    <option value="" disabled>
                        Select Category
                    </option>
                    {Object.keys(categoriesWithSub).map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </motion.div>

            {/* Subcategory Dropdown */}
            <motion.div
                className="w-full sm:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <select
                    value={subcategory}
                    onChange={handleSubcategoryChange}
                    className="w-full text-center p-3 rounded-md border bg-blue-500 text-white font-bold border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 transition-all duration-300 ease-in-out transform hover:scale-105"
                    disabled={!category} // Disable dropdown if no category is selected
                >
                    <option value="" disabled>
                        Select Product
                    </option>
                    {category &&
                        categoriesWithSub[category].map((subcat, index) => (
                            <option key={index} value={subcat}>
                                {subcat}
                            </option>
                        ))}
                </select>
            </motion.div>
        </div>
    );
};

export default FilterSection;