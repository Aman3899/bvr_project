"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
    Trash2,
    ShoppingBasket,
    CalendarClock,
    Clock,
    MessageSquare,
    Plus,
    Wallet,
    Package,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SubmitAnCreateShoppingListRequest = () => {

    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            budget: "",
            deliveryDate: "",
            deliveryTime: "",
            comments: "",
        }
    });

    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Adjust month (0-based)
        const day = String(today.getDate()).padStart(2, '0');
        setCurrentDate(`${year}-${month}-${day}`); // Set the current date in YYYY-MM-DD format
    }, []);

    const categoriesWithSub = {
        GRAIN: ["Maize", "Oats", "Barley", "Rice", "Quinoa", "Rye", "Wheat", "Millet", "Sorghum"],
        FRUITS: ["Strawberry", "Blueberries", "Raspberries", "Cranberries", "Oranges", "Tangerines"],
        VEGETABLES: ["Lettuce", "Spinach", "Kale", "Aragula", "Chinese", "Rape", "Broccoli"],
        LEGUMES: ["Kidney beans", "Black beans", "Pinto beans", "Lentils", "Cowpeas"],
        "NUTS & SEEDS": ["Walnut", "Almond", "Pecans", "Hazel nuts", "Pistachio"],
        HERBS: ["Rosemary", "Thyme", "Parsley", "Cilantro", "Lavender"],
        MEATS: ["Beef", "Pork", "Lamb", "Turkey", "Ham", "Duck"],
        "SEA FOOD": ["Fish", "Salmon", "Tuna", "Tilapia", "Chambo"],
        OTHER: ["Mandasi", "Eggs", "Honey", "Cheese", "Milk", "Yogurt"],
    };

    const [selectedCategory, setSelectedCategory] = useState("GRAIN");
    const [subCategories, setSubCategories] = useState(categoriesWithSub[selectedCategory]);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        setSubCategories(categoriesWithSub[value]);
    };

    const handleAddProduct = (productName) => {
        setSelectedProducts((prevProducts) => {
            const existingProduct = prevProducts.find((item) => item.name === productName);
            if (existingProduct) {
                return prevProducts.map((item) =>
                    item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevProducts, { name: productName, quantity: 1 }];
        });
    };

    const handleRemoveProduct = (productName) => {
        setSelectedProducts((prevProducts) =>
            prevProducts.filter((item) => item.name !== productName)
        );
    };

    const onSubmit = (data) => {
        if (selectedProducts.length === 0) {
            alert("Please select at least one product");
            return;
        }
        console.log({ ...data, selectedProducts });
        router.push("/");
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            <Navbar heading="Create Shopping List" />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="container mx-auto px-4 max-sm:px-0 py-8 mt-16"
            >
                <Card className="w-5/6 mx-auto backdrop-blur-sm bg-white/90">
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Category Selection */}
                            <motion.div variants={itemVariants} className="space-y-2">
                                <Label className="flex items-center gap-2">
                                    <Package className="h-4 w-4 text-purple-500" />
                                    Category
                                </Label>
                                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.keys(categoriesWithSub).map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </motion.div>

                            {/* Products Grid */}
                            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {subCategories.map((product) => (
                                    <motion.div
                                        key={product}
                                        whileHover={{ scale: 1.02 }}
                                        className="group relative"
                                    >
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => handleAddProduct(product)}
                                            className="w-full justify-between hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200"
                                        >
                                            {product}
                                            <Plus className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Button>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Selected Products */}
                            <motion.div variants={itemVariants} className="space-y-3">
                                <Label className="flex items-center gap-2">
                                    <ShoppingBasket className="h-4 w-4 text-purple-500" />
                                    Selected Products
                                </Label>
                                <div className="space-y-2">
                                    <AnimatePresence>
                                        {selectedProducts.map((product) => (
                                            <motion.div
                                                key={product.name}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="flex items-center justify-between bg-purple-50 rounded-lg p-3"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Badge variant="secondary">
                                                        {product.quantity}
                                                    </Badge>
                                                    <span>{product.name}</span>
                                                </div>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleRemoveProduct(product.name)}
                                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                            {/* Budget */}
                            <motion.div variants={itemVariants} className="space-y-2">
                                <Label className="flex items-center gap-2">
                                    <Wallet className="h-4 w-4 text-purple-500" />
                                    Budget
                                </Label>
                                <Input
                                    {...register("budget", { required: "Budget is required" })}
                                    placeholder="Enter your budget"
                                    className={errors.budget ? "border-red-500" : ""}
                                />
                                {errors.budget && (
                                    <p className="text-sm text-red-500">{errors.budget.message}</p>
                                )}
                            </motion.div>

                            {/* Delivery Details */}
                            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-purple-500" />
                                        Delivery Time
                                    </Label>

                                    <Input
                                        type="date"
                                        {...register("deliveryDate", {
                                            required: "Delivery date is required",
                                            min: {
                                                value: currentDate,
                                                message: "Delivery date cannot be in the past",
                                            },
                                            max: {
                                                value: new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString().split('T')[0],
                                                message: "Delivery date cannot be more than 2 months in the future",
                                            },
                                        })}
                                        className={errors.deliveryDate ? "border-red-500" : ""}
                                    />
                                    {errors.deliveryDate && (
                                        <p className="text-sm text-red-500">{errors.deliveryDate.message}</p>
                                    )}

                                </div>

                                <div className="space-y-2">
                                    <Label className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-purple-500" />
                                        Delivery Time
                                    </Label>

                                    <Input
                                        type="time"
                                        {...register("deliveryTime", {
                                            required: "Delivery time is required",
                                            validate: value => value !== "00:00" || "Time cannot be midnight",
                                        })}
                                        className={errors.deliveryTime ? "border-red-500" : ""}
                                    />
                                    {errors.deliveryTime && (
                                        <p className="text-sm text-red-500">{errors.deliveryTime.message}</p>
                                    )}

                                </div>

                            </motion.div>


                            {/* Comments */}
                            <motion.div variants={itemVariants} className="space-y-2">
                                <Label className="flex items-center gap-2">
                                    <MessageSquare className="h-4 w-4 text-purple-500" />
                                    Comments
                                </Label>
                                <Textarea
                                    {...register("comments")}
                                    placeholder="Add any additional comments or special instructions..."
                                    className="min-h-[100px]"
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                                >
                                    Post Shopping List
                                </Button>
                            </motion.div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default SubmitAnCreateShoppingListRequest;