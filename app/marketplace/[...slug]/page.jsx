"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import ReactChartJS from "@/app/components/ReactChartJS";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function getMarketplaceNameForRouting(marketplaceName) {
    return marketplaceName.split(" ").join("-");
}



const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        responsive: [
            {
                breakpoint: 768, // For tablets
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // For mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const images = [
        { src: "/marketplace-hero.jpeg", alt: "Marketplace Hero" },
        { src: "/marketplace-image.jpeg", alt: "Marketplace Image 2" },
        { src: "/marketplace1.jpg", alt: "Marketplace Image 3" },
        { src: "/marketplace3.webp", alt: "Marketplace Image 4" },
    ];

    return (
        <section className="w-full px-12 max-sm:px-4">
            <Slider {...settings} className="rounded-3xl border-2 border-black overflow-hidden">
                {images.map((image, index) => (
                    <div key={index}>
                        <Image
                            width={1920}
                            height={1080}
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-[500px] max-sm:h-[250px] object-cover rounded-3xl"
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};



const Marketplace = ({ params }) => {
    const products = [
        { id: 1, name: "Apple", price: "MWK 5000", img: "/marketplace-hero.jpeg" },
        { id: 2, name: "Banana", price: "MWK 3000", img: "/marketplace-hero.jpeg" },
        { id: 3, name: "Handmade Crafts", price: "MWK 5000", img: "/marketplace-hero.jpeg" },
        { id: 4, name: "Fresh Produce", price: "MWK 3000", img: "/marketplace-image.jpeg" },
        { id: 5, name: "ABCDED", price: "MWK 4000", img: "/marketplace-image.jpeg" },
        { id: 6, name: "asnjdji Produce", price: "MWK 1000", img: "/marketplace-image.jpeg" },
    ];

    const promotions = [
        { id: 1, name: "Discounted Apple", price: "MWK 4500", img: "/marketplace-hero.jpeg" },
        { id: 2, name: "Banana Bundle", price: "MWK 2500", img: "/marketplace-hero.jpeg" },
        { id: 3, name: "Discounted BlueBarries Bundle", price: "MWK 4500", img: "/marketplace-image.jpeg" },
        { id: 4, name: "Melon Bundle", price: "MWK 2500", img: "/marketplace-hero.jpeg" },
        { id: 5, name: "Discounted Grapes", price: "MWK 4500", img: "/marketplace-image.jpeg" },
        { id: 6, name: "Friuts Bundle", price: "MWK 2500", img: "/marketplace-hero.jpeg" },
    ];

    const categories = [
        {
            title: "Filters",
            options: [
                { name: "Under MWK 4000", checked: false },
                { name: "Organic", checked: true },
                { name: "Local Products", checked: false },
            ],
        },
    ];

    const nearbyMarkets = [
        { id: 1, name: "Market A", img: "/marketplace-hero.jpeg" },
        { id: 2, name: "Market B", img: "/marketplace-image.jpeg" },
    ];

    const router = useRouter();

    return (
        <div className="font-sans p-4 mx-auto bg-gray-50 px-20 max-sm:px-4">
            <Navbar heading="DealBank" />

            <ImageSlider />

            {/* Profile Information (BDO) */}
            <h2 className="text-xl font-semibold mb-4 mt-10">Business Development Officer</h2>
            <div className="flex items-center border border-gray-300 rounded-lg p-4 mb-6 pb-4">
                <Image
                    width={1000}
                    height={1000}
                    src="/marketplace-hero.jpeg"
                    alt="Seller"
                    className="rounded-full mr-4 w-16 h-16"
                />
                <div className="flex flex-col">
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-sm text-gray-600 mb-1">Empowering market success with tailored strategies.</p>
                    <Link href="tel:+923221210102" className="text-blue-500 hover:underline">+92 322 1210102</Link>
                </div>
            </div>


            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-center py-7 space-y-4 sm:space-y-0 sm:space-x-5">
                {/* Search Engine */}
                <div className="flex justify-between items-center w-full sm:w-5/6">
                    <input
                        type="text"
                        placeholder="🔍 Search for products"
                        className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                    />
                    <button className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-700 ml-4 max-sm:px-4">
                        Search
                    </button>
                </div>

                {/* Product Filters Dropdown */}
                <div className="w-full sm:w-1/6">
                    <select className="w-full text-center p-2 rounded-md border bg-blue-500 text-white font-bold border-gray-300 focus:outline-none focus:ring focus:ring-blue-200">
                        <option value="" selected>
                            Select Filter
                        </option>
                        {categories.map((category, index) => (
                            <optgroup key={index} label={category.title}>
                                {category.options.map((option, idx) => (
                                    <option key={idx} value={option.name}>
                                        {option.name}
                                    </option>
                                ))}
                            </optgroup>
                        ))}
                    </select>
                </div>
            </div>



            {/* Products */}
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <div className="grid grid-cols-3 gap-4 mb-6 max-sm:grid-cols-2">
                {products.map((product) => (
                    <Link href={`/product/${getMarketplaceNameForRouting(product.name)}`} key={product.id}>
                        <div className="border border-gray-300 rounded-lg p-3 text-center hover:shadow-lg transition cursor-pointer">
                            <Image
                                width={1000}
                                height={1000}
                                src={product.img}
                                alt={product.name}
                                className="w-full rounded mb-2 h-[200px] max-sm:h-fit"
                            />
                            <h4 className="font-medium">{product.name}</h4>
                            <p className="text-green-600 font-bold">{product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Price Change Chart */}
            <div className="py-5">
                <ReactChartJS />
            </div>

            {/* Current Promotions */}
            <h2 className="text-xl font-semibold mb-4">Current Promotions</h2>
            <div className="grid grid-cols-3 gap-4 mb-6 max-sm:grid-cols-2">
                {promotions.map((promotion) => (
                    <div key={promotion.id} className="border border-gray-300 rounded-lg p-3 text-center hover:shadow-lg transition cursor-pointer">
                        <Image
                            width={1000}
                            height={1000}
                            src={promotion.img}
                            alt={promotion.name}
                            className="w-full rounded mb-2 h-[200px] max-sm:h-fit"
                        />
                        <h4 className="font-medium">{promotion.name}</h4>
                        <p className="text-red-600 font-bold">{promotion.price}</p>
                    </div>
                ))}
            </div>


            {/* Filter for Current Promotion Section */}
            <section className="py-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Current Promotions</h2>
                <div className="flex justify-center mb-6">
                    <select
                        className="p-2 border border-gray-300 rounded-lg"
                        onChange={(e) => console.log(`Selected promotion: ${e.target.value}`)}
                    >
                        <option value="all">All Promotions</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="furniture">Furniture</option>
                    </select>
                </div>
                <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1">
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">Discount on Electronics</h3>
                        <p className="text-sm text-gray-600">Save big on the latest gadgets.</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">Buy 1 Get 1 Free</h3>
                        <p className="text-sm text-gray-600">Shop your favorite fashion items now.</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">Flash Sale on Furniture</h3>
                        <p className="text-sm text-gray-600">Upgrade your home at amazing prices.</p>
                    </div>
                </div>
            </section>


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
            <h2 className="text-xl font-semibold mb-4">Nearby Markets</h2>
            <div className="grid grid-cols-2 gap-4">
                {nearbyMarkets.map((market) => (
                    <div
                        key={market.id}
                        className="border border-gray-300 rounded-lg p-3 text-center hover:shadow-lg transition cursor-pointer"
                    >
                        <Image
                            width={1000}
                            height={1000}
                            src={market.img}
                            alt={market.name}
                            className="w-full h-[300px] rounded mb-2 max-sm:h-fit"
                        />
                        <h4 className="font-medium">{market.name}</h4>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Marketplace;
