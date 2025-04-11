import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carService from "../services/carServices";
import Navbar from '../components/commons/Header';

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const fetchCar = async () => {
      const carData = await carService.getCar(id);
      if (!carData) return navigate("/not-found");
      setCar(carData);
    };
    fetchCar();
  }, [id, navigate]);

  const toggleWishlist = () => {
    const updatedWishlist = wishlist.includes(car.id)
      ? wishlist.filter((carId) => carId !== car.id)
      : [...wishlist, car.id];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen dark:text-white">
        Loading...
      </div>
    );
  }

  const isWishlisted = wishlist.includes(car.id);

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-6 py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{car.brand}</h1>
          <img
            src={car.image}
            alt={car.brand}
            className="max-w-full h-auto object-cover rounded-lg mb-6 shadow-md"
          />
          <p className="text-xl mb-4 font-semibold">{car.model}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg mb-6">
            <div><strong>Brand:</strong> {car.brand}</div>
            <div><strong>Fuel Type:</strong> {car.fuelType}</div>
            <div><strong>Seating Capacity:</strong> {car.seatingCapacity}</div>
            <div><strong>Price:</strong> ₹{car.price.toLocaleString()}</div>
          </div>

          <button
            onClick={toggleWishlist}
            className={`px-6 py-3 rounded text-white transition ${
              isWishlisted
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
