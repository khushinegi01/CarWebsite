// components/commons/Loading.jsx
import React from "react";
import { FaCarSide } from "react-icons/fa"; // FontAwesome car icon

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-500">
      <div className="relative w-full h-24 overflow-hidden">
        <div className="absolute left-[-100px] animate-driveCar text-green-600 dark:text-white text-6xl">
          <FaCarSide />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
