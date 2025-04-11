// components/commons/PageWrapper.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./Loading";

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loading screen whenever the path changes
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Animation duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className={`${loading ? "opacity-30 blur-sm pointer-events-none transition duration-900" : "transition duration-500"}`}>
        {children}
      </div>
    </>
  );
};

export default PageWrapper;
