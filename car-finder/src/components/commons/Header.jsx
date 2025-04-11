import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeToggle from "../Navbar/ThemeToggle"
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Wishlist", path: "/wishlist" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <img src='https://icon-library.com/images/auto-icon-png/auto-icon-png-9.jpg' className="w-10 h-10 rounded-xl"></img>
        <div>CarFinder</div>
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium ${
                location.pathname === link.path
                  ? "text-green-600 dark:text-green-400"
                  : "text-gray-700 dark:text-gray-300"
              } hover:text-green-500 dark:hover:text-green-300`}
            >
              {link.name}
            </Link>
          ))}

          <ThemeToggle/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
