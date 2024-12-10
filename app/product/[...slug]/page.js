"use client"
import React from "react";
import { FaPhoneAlt, FaBackward } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";


const ProductPage = ({ params }) => {

    console.log({ params });
    let router = useRouter();

    return (
        <div className="font-sans px-5 py-4">

            <Navbar heading="DealBank" SubHeading={params.slug[0]} />



            <div className="mt-5">
                <Image
                    src="/marketplace-hero.jpeg"
                    alt="Marketplace Hero"
                    width={1920}
                    height={1080}
                    className="px-10 max-sm:px-0 w-full h-[500px] object-cover rounded-3xl bg-none max-sm:h-[250px]"
                />

                <div className="mx-16 max-sm:mx-5 h-[500px] mt-[119px] max-sm:mt-[103px] max-sm:h-[250px] absolute inset-0 
                            flex flex-col justify-center items-center text-white bg-black/30 rounded-3xl max-sm:px-2">
                    <h1 className="text-3xl font-bold mb-2 sm:text-3xl text-center">{params.slug[0]}</h1>
                </div>

                <p className="text-lg font-medium text-center mt-2">{params.slug[0]}</p>
            </div>

            {/* Product Description */}
            <div className="mt-6">
                <h2 className="text-xl font-bold">Product Description</h2>
                <p className="text-gray-600 mt-3">
                    Our Margherita Pizza is made with the freshest ingredients, including
                    hand-tossed dough, vine-ripened tomatoes, fresh basil, and creamy
                    mozzarella cheese.
                </p>
            </div>

            {/* Product Details */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                    <h3 className="font-semibold text-gray-600">Category</h3>
                    <p className="font-medium">Pizza</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-600">Unit</h3>
                    <p className="font-medium">1 piece</p>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-600">Price</h3>
                    <p className="font-medium">$12.99</p>
                </div>
            </div>

            {/* Seller Information */}
            <div className="mt-8 flex items-center">
                <Image
                    width={1000}
                    height={500}
                    src="/marketplace-hero.jpeg" // Replace with your seller image path
                    alt="John Smith"
                    className="rounded-full w-16 h-16 object-cover"
                />
                <div className="ml-4">
                    <h3 className="text-lg font-bold">John Smith</h3>
                    <p className="text-gray-600 text-sm">
                        Client satisfaction is my first priority!
                    </p>
                    <div className="flex items-center mt-2">
                        <FaPhoneAlt className="text-green-600 mr-2" />
                        <a
                            href="tel:+923231210102"
                            className="text-blue-500 font-medium hover:underline"
                        >
                            +92 323 1210102
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;