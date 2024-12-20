"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import ReactChartJS from "@/app/components/ReactChartJS";
import { useState } from "react";
import ImageSlider from "@/app/components/Marketplace/ImageSlider";
import ProductSlider from "@/app/components/Marketplace/ProductsSlider";
import NearbyMarketsSlider from "@/app/components/Marketplace/NearbyMarketsSlider";
import PromotionSliders from "@/app/components/Marketplace/PromotionSliders";
import NearbyAirportsSlider from "@/app/components/Marketplace/NearbyAirports";
import NearbyATMsSlider from "@/app/components/Marketplace/NearbyATMsSlider";
import { SiFacebook, SiX, SiLinkedin } from "react-icons/si";



const Marketplace = ({ params }) => {

    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");

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

    console.log(params);

    
    // Handle category change
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setSubcategory("");
    };

    const handleSubcategoryChange = (e) => {
        setSubcategory(e.target.value);
    };

    return (
        <div className="font-sans p-4 mx-auto bg-gray-50 px-20 max-sm:px-4">
            <Navbar heading="DealBank" />

            <ImageSlider />

            {/* Profile Information (BDO) */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6 mt-12 text-center border-b-2 border-blue-500 pb-2">
                Business Development Officer
            </h2>

            <div className="flex items-center border shadow-lg rounded-xl p-6 mb-8 bg-gradient-to-r from-gray-100 to-white">
                <Image
                    width={1000}
                    height={1000}
                    src="/marketplace-hero.jpeg"
                    alt="Seller"
                    className="rounded-full mr-6 w-20 h-20 border-4 border-blue-500"
                />
                <div className="flex flex-col">
                    <h4 className="font-bold text-lg text-gray-900">John Smith</h4>
                    <p className="text-gray-700 italic mb-2 max-sm:text-xs">Empowering market success with tailored strategies.</p>
                    <Link href="tel:+923221210102" className="text-blue-600 hover:underline font-medium max-sm:text-sm">
                        +92 322 1210102
                    </Link>

                    {/* Social Media Links */}
                    <div className="mt-4 flex space-x-4">
                        <Link href="https://www.linkedin.com/in/john-smith" target="_blank">
                            <div className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110">
                                <SiLinkedin className="w-6 h-6" />
                            </div>
                        </Link>
                        <Link href="https://twitter.com/johnsmith" target="_blank">
                            <div className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-110">
                                <SiX className="w-6 h-6" />
                            </div>
                        </Link>
                        <Link href="https://www.facebook.com/johnsmith" target="_blank">
                            <div className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-110">
                                <SiFacebook className="w-6 h-6" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>



            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-center py-7 space-y-4 sm:space-y-0 sm:space-x-5">
                {/* Search Engine */}
                <div className="flex justify-between items-center w-full max-sm:w-full">
                    <input
                        type="text"
                        placeholder="🔍 Search for products"
                        className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    <button className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-700 ml-4 max-sm:px-4">
                        Search
                    </button>
                </div>
            </div>


            {/* Categories and Subcategories Filters */}
            <div className="flex justify-center items-center w-full space-x-10 max-sm:space-x-2 mb-8">
                <div className="w-full sm:w-1/2">
                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="w-full text-center p-2 rounded-md border bg-blue-500 text-white font-bold border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        <option value="" selected>
                            Category
                        </option>
                        {Object.keys(categoriesWithSub).map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Second Dropdown for Subcategories */}
                <div className="w-full sm:w-1/2">
                    <select
                        value={subcategory}
                        onChange={handleSubcategoryChange}
                        className="w-full text-center p-2 rounded-md border bg-blue-500 text-white font-bold border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                        disabled={!category} // Disable dropdown if no category is selected
                    >
                        <option value="">Product</option>
                        {category &&
                            categoriesWithSub[category].map((subcat, index) => (
                                <option key={index} value={subcat}>
                                    {subcat}
                                </option>
                            ))}
                    </select>
                </div>
            </div>



            {/* Products */}
            <ProductSlider />


            {/* Price Change Chart */}
            <div className="py-5">
                <ReactChartJS />
            </div>


            {/* Random Ads Banner Section */}
            <div className="bg-gray-200 m-4 h-48 flex items-center justify-center rounded-md shadow-md mb-10 max-sm:mx-3">
                <span className="text-gray-500 text-lg">Sponsored Banner AD</span>
            </div>


            {/* Promotions Section */}
            <div className="bg-white rounded-md shadow-md p-4 m-4 max-sm:mx-3 mb-10">
                <h2 className="text-lg font-semibold mb-2">Promotions</h2>
                <div className="border-t border-gray-300 pt-4">
                    <h3 className="text-md font-semibold mb-2">Deals and Discounts!</h3>
                    <p className="text-sm text-gray-600 mb-4 max-sm:text-xs">
                        To see the latest deals and discounts for this product, specify by choosing one below:
                    </p>

                    {/* Filter Dropdown */}
                    <div className="mb-4">
                        <label htmlFor="filter" className="block text-sm font-medium mb-1">Filter</label>
                        <select id="filter" className="block w-full border border-gray-300 rounded-md p-2 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100">
                            <option value="latest-promos">Latest promos</option>
                            <option value="deals">Deals</option>
                            <option value="discounts">Discounts</option>
                        </select>
                    </div>


                    {/* Buttons for Deals and Discounts */}
                    <div className="flex space-x-4 text-white font-bold">
                        <button className="flex-1 bg-blue-500 border border-gray-300 rounded-md py-2 px-4 hover:bg-blue-700">
                            Deals
                        </button>
                        <button className="flex-1 bg-blue-500 border border-gray-300 rounded-md py-2 px-4 hover:bg-blue-700">
                            Discounts
                        </button>
                    </div>
                </div>
            </div>


            {/* Current Promotions */}
            <PromotionSliders />
            

            {/* Market Features */}
            <div className="mb-4 p-3">
                <h2 className="text-xl font-semibold mb-4">Market Features</h2>
                {[
                    { name: 'Electricity', selected: true },
                    { name: 'Water Supply', selected: false },
                    { name: 'Access Roads', selected: false },
                    { name: 'Sewage Systems', selected: true },
                    { name: 'Waste Management Services', selected: false },
                ].map((feature) => (
                    <div key={feature.name} className="border-y bg-white border-gray-100 py-2 px-2">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                disabled
                                defaultChecked={feature.selected}
                            />
                            <span className="ml-2">{feature.name}</span>
                        </label>
                    </div>
                ))}
            </div>


            {/* Nearby Markets */}
            <NearbyMarketsSlider />

            {/* Nearby Airports */}
            <NearbyAirportsSlider />

            {/* Nearby ATMs */}
            <NearbyATMsSlider />

            <Footer />
        </div>
    );
};

export default Marketplace;