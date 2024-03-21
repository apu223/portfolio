import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./WebLoding/Loding";
import Navbar from "./components/Navbar"; // Import Navbar component
import Home from "./page/Home";

const App = () => {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 1800);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Navbar />
      {isLoader ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
