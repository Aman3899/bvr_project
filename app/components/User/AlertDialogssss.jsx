import React from "react";
import { FaSpinner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const AlertDialog = ({ open, type, message, onClose }) => {
    if (!open) return null;

    // Define icons for different alert types
    const icons = {
        loading: (
            <FaSpinner className="text-blue-500 animate-spin text-5xl" />
        ),
        success: (
            <FaCheckCircle className="text-green-500 text-5xl" />
        ),
        error: (
            <FaExclamationCircle className="text-red-500 text-5xl" />
        ),
    };

    // Define background colors based on alert type
    const typeStyles = {
        loading: "bg-blue-100 border-blue-500",
        success: "bg-green-100 border-green-500",
        error: "bg-red-100 border-red-500",
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className={`p-6 rounded-lg shadow-lg text-center space-y-4 w-96 border-l-4 ${
                    typeStyles[type]
                }`}
            >
                <div className="flex justify-center">{icons[type]}</div>
                <p className="text-lg font-medium text-gray-700">{message}</p>
                {type !== "loading" && (
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={onClose}
                    >
                        Close
                    </button>
                )}
            </div>
        </div>
    );
};

export default AlertDialog;
