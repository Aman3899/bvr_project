"use client";
import React from "react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ReactChartJS from "@/app/components/ReactChartJS";
import ImageSlider from "@/app/components/Marketplace/ImageSlider";
import ProductSlider from "@/app/components/Marketplace/ProductsSlider";
import PromotionSliders from "@/app/components/Marketplace/PromotionSliders";
import NearbyAirportsSlider from "@/app/components/Marketplace/NearbyAirports";
import NearbyATMsSlider from "@/app/components/Marketplace/NearbyATMsSlider";
import PromotionsSearchFunc from "@/app/components/Marketplace/PromotionSearchFunc";
import Nearby_Markets from "@/app/components/Nearby_Markets";
import Market_Features_Details_Page from "@/app/components/Marketplace/MarketFeatures";
import BusinessDevelopmentOfficer from "@/app/components/Marketplace/BDO";
import SearchFilters from "@/app/components/Marketplace/ProductSearchFunc";
import FilterSection from "@/app/components/Marketplace/CategoriesFilter";
import AdBanner from "@/app/components/Marketplace/AdsBannarSection";
import MarketSlider from "@/app/components/All_Markets";
import { usePathname } from "next/navigation";



const Marketplace = ({ params }) => {

    let pathname = usePathname();

    const getCorrectPathURL = (path) => {
        const concisedURL = path.replace("/marketplace/", "");

        const url = concisedURL.replaceAll("-", " ")
        return url;
    }

    return (
        <>
            <div className="font-sans p-4 mx-auto bg-gray-50 px-20 max-sm:px-4 mt-20">
                <Navbar heading="DealBank" />

                <ImageSlider title={`${getCorrectPathURL(pathname)}`} />

                {/* Profile Information (BDO) */}
                <BusinessDevelopmentOfficer />

                {/* Search and Filters */}
                <SearchFilters />

                {/* Categories and Subcategories Filters */}
                <FilterSection />

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
                <AdBanner />

                {/* Promotions Section */}
                <PromotionsSearchFunc />

                {/* Current Promotions */}
                <PromotionSliders />

                {/* Market Features */}
                <Market_Features_Details_Page />

                {/* Nearby Markets */}
                <MarketSlider />

                {/* Nearby Airports */}
                <NearbyAirportsSlider />

                {/* Nearby ATMs */}
                <NearbyATMsSlider />
            </div>

            <Footer />
        </>
    );
};

export default Marketplace;