import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const StylishFilter = () => {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [isOpenCategory, setIsOpenCategory] = useState(false);
    const [isOpenSubcategory, setIsOpenSubcategory] = useState(false);

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

    const dropdownVariants = {
        closed: { height: 0, opacity: 0, overflow: 'hidden' },
        open: { height: 'auto', opacity: 1, overflow: 'visible' },
    };

    return (
        <div className="w-full mx-auto p-4 max-sm:p-1 space-y-6 md:space-y-0 md:space-x-6 flex flex-col md:flex-row">
            {/* Category Dropdown */}
            <motion.div className="relative flex-1">
                <div className="relative w-full bg-white rounded-xl shadow-lg">
                    <button
                        onClick={() => setIsOpenCategory((prev) => !prev)}
                        className="w-full h-14 px-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-100"
                    >
                        <span className="text-gray-700 font-medium">
                            {category || "Select Category"}
                        </span>
                        <motion.div
                            animate={{ rotate: isOpenCategory ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {isOpenCategory && (
                            <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={dropdownVariants}
                                transition={{ duration: 0.3 }}
                                className="absolute w-full bg-white border-t border-gray-100 rounded-b-xl shadow-xl z-50"
                            >
                                {Object.keys(categoriesWithSub).map((cat) => (
                                    <div
                                        key={cat}
                                        className="px-4 py-3 cursor-pointer hover:bg-gray-100"
                                        onClick={() => {
                                            setCategory(cat);
                                            setIsOpenCategory(false);
                                            setSubcategory('');
                                        }}
                                    >
                                        <span className="text-gray-700">{cat}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Subcategory Dropdown */}
            <motion.div className="relative flex-1">
                <div className="relative w-full bg-white rounded-xl shadow-lg">
                    <button
                        onClick={() => category && setIsOpenSubcategory((prev) => !prev)}
                        className={`w-full h-14 px-4 flex items-center justify-between bg-gradient-to-r ${category ? 'from-purple-50 to-pink-50' : 'from-gray-50 to-gray-100'
                            } border border-gray-100 ${!category && 'opacity-75 cursor-not-allowed'}`}
                    >
                        <span className="text-gray-700 font-medium">
                            {subcategory || "Select Product"}
                        </span>
                        <motion.div
                            animate={{ rotate: isOpenSubcategory ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {isOpenSubcategory && category && (
                            <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={dropdownVariants}
                                transition={{ duration: 0.3 }}
                                className="absolute w-full bg-white border-t border-gray-100 rounded-b-xl shadow-xl z-50"
                            >
                                {categoriesWithSub[category].map((subcat) => (
                                    <div
                                        key={subcat}
                                        className="px-4 py-3 cursor-pointer hover:bg-gray-100"
                                        onClick={() => {
                                            setSubcategory(subcat);
                                            setIsOpenSubcategory(false);
                                        }}
                                    >
                                        <span className="text-gray-700">{subcat}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default StylishFilter;
