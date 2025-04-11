// src/components/FilterBar.jsx
import React from "react";

const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-wrap gap-4 px-4 py-2">
      <select
        name="brand"
        value={filters.brand}
        onChange={handleChange}
        className="px-4 py-2 rounded-md bg-white dark:bg-gray-800 border dark:border-gray-600 text-gray-900 dark:text-white"
      >
        <option value="">All Brands</option>
        <option value="Tesla">Tesla</option>
        <option value="Kia">Kia</option>
        <option value="Honda">Honda</option>
        <option value="Ford">Ford</option>
        <option value="Hyundai">Hyundai</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Nissan">Nissan</option>
        <option value="BMW">BMW</option>
        <option value="Audi">Audi</option>
        <option value="Toyota">Toyota</option>
      </select>

      <select
        name="fuel"
        value={filters.fuel}
        onChange={handleChange}
        className="px-4 py-2 rounded-md bg-white dark:bg-gray-800 border dark:border-gray-600 text-gray-900 dark:text-white"
      >
        <option value="">All Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select
        name="seating"
        value={filters.seating}
        onChange={handleChange}
        className="px-4 py-2 rounded-md bg-white dark:bg-gray-800 border dark:border-gray-600 text-gray-900 dark:text-white"
      >
        <option value="">All Seating</option>
        <option value="2">2 Seater</option>
        <option value="4">4 Seater</option>
        <option value="5">5 Seater</option>
        <option value="6">6 Seater</option>
        <option value="7">7 Seater</option>
      </select>

      <select
        name="price"
        value={filters.price}
        onChange={handleChange}
        className="px-4 py-2 rounded-md bg-white dark:bg-gray-800 border dark:border-gray-600 text-gray-900 dark:text-white"
      >
        <option value="">All Prices</option>
        <option value="0–1000000">under ₹1,000,000</option>
        <option value="1000000-2000000">₹1,000,000-₹2,000,000</option>
        <option value="2000000-3000000">₹2,000,000-₹3,000,000</option>
        <option value="3000000-4000000">₹3,000,000-₹4,000,000</option>
      </select>
    </div>
  );
};

export default FilterBar;
