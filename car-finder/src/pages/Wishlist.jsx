import React, { useEffect, useState } from "react";
import carService from "../services/carServices";
import CarCard from "../components/Car/CarCard";
import Navbar from '../components/commons/Header'
const Wishlist = () => {
  const [cars, setCars] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const fetchCars = async () => {
      const allCars = await carService.getAllCars();
      const filtered = allCars.filter((car) => wishlist.includes(car.id));
      setCars(filtered);
    };
    fetchCars();
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (carId) => {
    setWishlist((prev) =>
      prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
    );
  };

  return (
    <>
    <Navbar/>
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">Your Wishlist</h2>

      {cars.length === 0 ? (
        <p className="text-lg">No cars in wishlist. ❤️ Go add some!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isWishlisted={wishlist.includes(car.id)}
              onWishlistToggle={toggleWishlist}
            />
          ))}
        </div>
      )}
    </div>
  </>
  );
};

export default Wishlist;
