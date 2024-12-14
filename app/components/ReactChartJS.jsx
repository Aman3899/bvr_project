import React, { useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ReactChartJS = () => {
    const data = [
        { day: "Monday", price: 5.1 },
        { day: "Tuesday", price: 70.5 },
        { day: "Wednesday", price: 16 },
        { day: "Thursday", price: 85 },
        { day: "Friday", price: 1.2 },
        { day: "Saturday", price: 5.8 },
        { day: "Sunday", price: 10.1 },
    ];

    const unitOptions = [
        { label: "250g", value: 250 },
        { label: "500g", value: 500 },
        { label: "1Kg", value: 1000 },
        { label: "2Kg", value: 2000 },
        { label: "5Kg", value: 5000 },
        { label: "10Kg", value: 10000 },
        { label: "20Kg", value: 20000 },
    ];

    const [unit, setUnit] = useState(1000);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Mark the component as client-rendered
        setIsClient(true);
    }, []);

    const formatPrice = (value) => {
        const unitOption = unitOptions.find((option) => option.value === unit);
        if (!unitOption) {
            return `${value.toFixed(1)} g`; // Default fallback
        }

        const isKg = unitOption.label.includes("Kg");
        const formattedValue = value * (unit / 1000); // Adjust value based on unit
        return `${formattedValue.toFixed(1)} ${isKg ? "Kg" : "g"}`;
    };

    const handleUnitChange = (event) => {
        setUnit(Number(event.target.value));
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold my-2">Price Changes Chart</h2>
            <span className="text-sm max-sm:text-xs text-center">To see latest prices for this product, choose from different quantities and states</span>
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="unit-select">Choose Product State: </label>
                <select id="unit-select" value={unit} onChange={handleUnitChange} style={{ padding: "5px", fontSize: "16px" }}>
                    {unitOptions.map((option) => (
                        <option key={option.label} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
            {isClient && (
                <div className="w-5/6 h-[450px] max-sm:w-full max-sm:h-[250px] my-5">
                    <ResponsiveContainer>
                        <LineChart width={700} height={400} data={data} margin={{ top: 20, right: 20, left: 40, bottom: 20 }} className="max-sm:w-64">
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="day" />
                            <YAxis tickFormatter={formatPrice} />
                            <Tooltip formatter={(value) => formatPrice(value)} />
                            <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
};

export default ReactChartJS;