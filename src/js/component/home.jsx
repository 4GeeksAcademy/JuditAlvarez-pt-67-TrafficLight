import React, { useState } from "react";

const Home = () => {
  const [activeColor, setActiveColor] = useState("");

  const handleButtonClick = (color) => {
    setActiveColor(color);
  };

  return (
    <div className="text-center">
      <div className="trafic-light bg-dark inline-block p-1">
        <button
          type="button"
          className={`light btn btn-success rounded-circle mx-auto my-2 mt-3 ${
            activeColor === "green" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("green")}
        ></button>
        <button
          type="button"
          className={`light btn btn-danger rounded-circle mx-auto my-2 ${
            activeColor === "red" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("red")}
        ></button>
        <button
          type="button"
          className={`light btn btn-warning rounded-circle mx-auto my-2 ${
            activeColor === "yellow" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("yellow")}
        ></button>
      </div>
    </div>
  );
};

export default Home;

