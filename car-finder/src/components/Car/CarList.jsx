import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import carService from "../../services/carServices";
import FilterBar from "../Navbar/FilterDropdown";
import ThemeToggle from "../Navbar/ThemeToggle";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 9;

const CarList = () => {
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    fuel: "",
    seating: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const fetchCars = async () => {
      const data = await carService.getAllCars();
      setCars(data);
    };
    fetchCars();
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (carId) => {
    setWishlist((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  // 🔍 Filter logic
  const filteredCars = cars.filter((car) => {
    const price = parseInt(car.price);
    const [minPrice, maxPrice] = filters.price
      ? filters.price.split("-").map(Number)
      : [0, Infinity];

    const matchesSearch =
      car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      (!filters.brand || car.brand === filters.brand) &&
      (!filters.fuel || car.fuelType === filters.fuel) &&
      (!filters.seating || String(car.seatingCapacity) === filters.seating) &&
      price >= minPrice &&
      price <= maxPrice &&
      matchesSearch
    );
  });

  // 🧮 Sort logic
  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCars = sortedCars.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1); // reset to page 1 on filter change
  }, [filters, sortOrder]);

  return (
    <div className="p-4">
      {/* 🔍 Search */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by car name or brand..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
      </div>

      {/* 🔧 Filters + Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <FilterBar filters={filters} setFilters={setFilters} />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-700"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* 🚗 Cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedCars.length > 0 ? (
          paginatedCars.map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CarCard
                car={car}
                onWishlistToggle={toggleWishlist}
                isWishlisted={wishlist.includes(car.id)}
              />
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
            No cars match the selected filters.
          </p>
        )}
      </div>

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center gap-3">
          <button
            className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="text-gray-800 dark:text-gray-200">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CarList;
