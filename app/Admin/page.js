"use client";
import React, { useState } from "react";


const AddCategory = () => {
    const [categoryName, setCategoryName] = useState("");
    const [parentCategory, setParentCategory] = useState("");

    const handleSave = () => {
        // Logic to save category
        console.log("Category Name:", categoryName);
        console.log("Parent Category:", parentCategory);
        setCategoryName("");
        setParentCategory("");
    };

    const handleCancel = () => {
        setCategoryName("");
        setParentCategory("");
    };

    const categories = [
        { name: "Electronics", description: "Devices and gadgets" },
        { name: "Books", description: "Literature and novels" },
        { name: "Clothing", description: "Apparel and accessories" },
        { name: "Home & Kitchen", description: "Furniture and appliances" },
        { name: "Sports", description: "Sporting goods" },
        { name: "Toys", description: "Children's toys" },
    ];

    return (
        <div className="mx-auto p-6 bg-gray-50 w-3/4">
            {/* Header */}
            <h1 className="text-2xl font-bold mb-6">Categories Management</h1>

            {/* Add Category Form */}
            <div className="space-y-4 bg-white p-4 rounded-md shadow-md">
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="categoryName">
                        Category Name
                    </label>
                    <input
                        type="text"
                        id="categoryName"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        placeholder="Enter category name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="parentCategory">
                        Parent Category
                    </label>
                    <select
                        id="parentCategory"
                        value={parentCategory}
                        onChange={(e) => setParentCategory(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select parent category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat.name}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Save
                    </button>
                </div>
            </div>

            {/* Existing Categories */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-4">Existing Categories</h2>
                <div className="space-y-4">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center p-4 bg-white rounded-md shadow-md"
                        >
                            <div>
                                <p className="font-medium">{cat.name}</p>
                                <p className="text-sm text-gray-600">{cat.description}</p>
                            </div>
                            <div>
                                <span className="text-gray-400">{">"}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddCategory;