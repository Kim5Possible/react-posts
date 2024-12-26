import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-spin"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
