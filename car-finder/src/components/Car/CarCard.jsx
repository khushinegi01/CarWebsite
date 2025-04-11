import React from "react";
import { useNavigate } from "react-router-dom";
const CarCard = ({ car, onWishlistToggle, isWishlisted }) => {
    const {
        id,
        brand,
        model,
        price,
        fuelType,
        seatingCapacity,
        image,
    } = car;
    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate(`/car/${car.id}`)}
            className="cursor-pointer transition duration-700 hover:shadow-lg p-4 rounded-lg bg-white dark:bg-gray-800"
        >
            <div className="bg-white dark:bg-gray-800 font-mono rounded-2xl shadow-md p-4 transition-all hover:scale-[1.02] ">
                <img
                    src={image}
                    alt={`${name}`}
                    className="w-full h-40 object-cover rounded-xl mb-3"
                />

                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-xl font-sans text-gray-900 dark:text-white ">
                            {brand}
                        </h2>
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">{model}</p>
                    </div>

                    <button
                        onClick={() => onWishlistToggle(id)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                        aria-label="Toggle Wishlist"
                    >
                        {isWishlisted ? "❤️" : "🤍"}
                    </button>
                </div>

                <div className="mt-3 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <p> ₹{price.toLocaleString()}</p>
                    <p> {fuelType}</p>
                    <p> {seatingCapacity} Seater</p>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
