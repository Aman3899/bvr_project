"use client";
import React, { useState } from "react";
import { FaBackward } from "react-icons/fa";
import { useRouter } from "next/navigation";


const CustomerRequestDetails = () => {

    const [price, setPrice] = useState("");
    const [margin, setMargin] = useState("");
    const [deliveryDuration, setDeliveryDuration] = useState("");
    const [comments, setComments] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ price, margin, deliveryDuration, comments });
    };

    const requestedItems = [
        { name: "Organic Apples", quantity: "10 kg" },
        { name: "Free-range Eggs", quantity: "5 dozen" },
    ];

    let router = useRouter();


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-10 py-5 max-sm:px-3 max-sm:py-2">

            <div className="bg-white rounded-lg shadow-lg p-6">
            
                <div className="mb-4">
                <div className="flex border-b border-gray-400 mb-5">
                    <button onClick={() => { router.back() }} className="pb-3 px-1"><FaBackward/></button>
                    <h2 className="text-xl w-full text-center font-semibold mb-4">Customer Request Details</h2>
                </div>
                    <p className="text-sm text-gray-700">
                        Customer Comments: Please ensure all vegetables are fresh and
                        organically certified. Delivery should be made in eco-friendly
                        packaging.
                    </p>
                </div>

                <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">Requested Items</h3>
                    <ul className="text-md text-gray-700 ">
                    {requestedItems.map((item, index) => (
                        <li key={item.name} className="flex justify-between py-1 border-y border-gray-100">
                            <span>{item.name}</span>
                            <span>{item.quantity}</span>
                        </li>
                    ))}
                    </ul>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <h3 className="text-lg font-medium mb-2">Seller Response</h3>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Your Price
                        </label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="$90"
                            className="w-full p-2 border rounded-md text-gray-700 bg-gray-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Margin (Profit)</label>
                        <input
                            type="text"
                            value={margin}
                            onChange={(e) => setMargin(e.target.value)}
                            placeholder="15%"
                            className="w-full p-2 border rounded-md text-gray-700 bg-gray-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Delivery Duration
                        </label>
                        <input
                            type="text"
                            value={deliveryDuration}
                            onChange={(e) => setDeliveryDuration(e.target.value)}
                            placeholder="2 days"
                            className="w-full p-2 border rounded-md text-gray-700 bg-gray-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Additional Comments
                        </label>
                        <textarea
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            placeholder="All items are fresh."
                            className="w-full p-2 border rounded-md text-gray-700 bg-gray-50"
                        ></textarea>
                    </div>
                    <div className="flex justify-between mb-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md"
                        >
                            Submit Bid
                        </button>
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="w-full bg-gray-200 text-gray-700 py-2 rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-sm text-gray-700">
                    Summary: Your proposed price is $90 with a 15% profit margin.
                    Delivery will be made within 2 days. Additional comments: All items
                    are fresh.
                </div>
            </div>
        </div>
    );
};

export default CustomerRequestDetails;