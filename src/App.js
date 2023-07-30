import React, { useState } from "react";
import MainPage from "./MainPage";
import Navbar from "./Components/Navbar";

function App() {
  const [City, setCity] = useState("London");
  const [tempCity,setTempCity] = useState("");
  const handleChange = (e) => {
    setTempCity(e);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      setCity(tempCity);
      setTempCity("")
    }
  };

  return (
    <div className=" h-screen w-screen bg-blue-200 flex flex-col justify-center items-center ">
      <Navbar handleChange={handleChange} handleKey={handleKey} city ={tempCity} />
      <MainPage city={City} />
    </div>
  );
}

export default App;
