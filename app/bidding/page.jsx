"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const CustomerRequestDetails = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({
        defaultValues: {
            price: "",
            margin: "",
            deliveryDuration: "",
            comments: ""
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const requestedItems = [
        { name: "Organic Apples", quantity: "10 kg" },
        { name: "Free-range Eggs", quantity: "5 dozen" },
    ];

    const router = useRouter();

    // Watch form values for summary
    const price = watch("price");
    const margin = watch("margin");
    const deliveryDuration = watch("deliveryDuration");
    const comments = watch("comments");

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
            <Navbar heading="Bidding" />
            
            <main className="container mx-auto px-4 py-8 mt-16">
                <Card className="w-5/6 mx-auto backdrop-blur-sm bg-white/90 border-none shadow-xl">
                    <CardHeader className="space-y-1">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => router.back()}
                                className="hover:bg-purple-100"
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                            <CardTitle className="flex-1 text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                                Customer Request Details
                            </CardTitle>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Customer Comments */}
                        <div className="rounded-lg bg-purple-50 p-4 border border-purple-100">
                            <p className="text-sm text-purple-700">
                                <span className="font-semibold">Customer Comments:</span> Please ensure all vegetables are fresh and organically certified. Delivery should be made in eco-friendly packaging.
                            </p>
                        </div>

                        {/* Requested Items */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-gray-800">Requested Items</h3>
                            <div className="divide-y divide-gray-100 rounded-lg bg-gray-50 overflow-hidden">
                                {requestedItems.map((item) => (
                                    <div 
                                        key={item.name}
                                        className="flex justify-between items-center p-4 hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="font-medium text-gray-700">{item.name}</span>
                                        <span className="text-gray-500 bg-white px-3 py-1 rounded-full text-sm">
                                            {item.quantity}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Seller Response Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="price">Your Price</Label>
                                    <Input
                                        id="price"
                                        {...register("price", { required: "Price is required" })}
                                        placeholder="$90"
                                        className={`mt-1 ${errors.price ? 'border-red-500 focus:ring-red-500' : ''}`}
                                    />
                                    {errors.price && (
                                        <p className="mt-1 text-sm text-red-500">{errors.price.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="margin">Margin (Profit)</Label>
                                    <Input
                                        id="margin"
                                        {...register("margin", { required: "Margin is required" })}
                                        placeholder="15%"
                                        className={`mt-1 ${errors.margin ? 'border-red-500 focus:ring-red-500' : ''}`}
                                    />
                                    {errors.margin && (
                                        <p className="mt-1 text-sm text-red-500">{errors.margin.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="deliveryDuration">Delivery Duration</Label>
                                    <Input
                                        id="deliveryDuration"
                                        {...register("deliveryDuration", { required: "Delivery duration is required" })}
                                        placeholder="2 days"
                                        className={`mt-1 ${errors.deliveryDuration ? 'border-red-500 focus:ring-red-500' : ''}`}
                                    />
                                    {errors.deliveryDuration && (
                                        <p className="mt-1 text-sm text-red-500">{errors.deliveryDuration.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="comments">Additional Comments</Label>
                                    <Textarea
                                        id="comments"
                                        {...register("comments")}
                                        placeholder="All items are fresh."
                                        className="mt-1"
                                        rows={4}
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Button 
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Submit Bid
                                </Button>
                                <Button 
                                    type="button"
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => router.back()}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>

                        {/* Summary */}
                        <div className="rounded-lg bg-blue-50 p-4 border border-blue-100">
                            <p className="text-sm text-blue-700">
                                <span className="font-semibold">Summary:</span> Your proposed price is ${price || "90"} with 
                                a {margin || "15%"} profit margin. Delivery will be made 
                                within {deliveryDuration || "2 days"}. 
                                {comments && ` Additional comments: ${comments}`}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

export default CustomerRequestDetails;