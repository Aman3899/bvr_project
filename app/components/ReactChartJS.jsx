import React, { useState } from "react";
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

    const unitMappings = {
        G: 1e9,
        KG: 1e12,
    };

    const unitOptions = [
        { label: "1G", value: 1 },
        { label: "10G", value: 10 },
        { label: "100G", value: 100 },
        { label: "500G", value: 500 },
        { label: "1KG", value: 1000 },
        { label: "5KG", value: 5000 },
        { label: "10KG", value: 10000 },
    ];

    const [unit, setUnit] = useState(1);

    const formatPrice = (value) => {
        const unitMultiplier = unitMappings[unitOptions.find(option => option.value === unit).label.split("G")[1] === "KG" ? "KG" : "G"];
        const formattedValue = value * unitMultiplier;
        return `${formattedValue.toFixed(1)} ${unit === 1000 ? "KG" : "G"}`;
    };    

    const handleUnitChange = (event) => {
        setUnit(Number(event.target.value));
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold mb-4">Price Changes Over the Week</h2>
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="unit-select">Select Unit:</label>
                <select id="unit-select" value={unit} onChange={handleUnitChange} style={{ padding: "5px", fontSize: "16px" }}>
                    {unitOptions.map((option) => (
                        <option key={option.label} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
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
        </div>
    );
};

export default ReactChartJS;
