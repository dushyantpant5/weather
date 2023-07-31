import React, { useEffect, useState } from "react";
import MainPage from "./MainPage";
import Navbar from "./Components/Navbar";

function App() {
  
  const [tempCity,setTempCity] = useState("London");
  const handleChange = (e) => {
    setTempCity(e);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      localStorage.setItem('city', tempCity);
      setTempCity("")
    }
  };

  useEffect(()=>{
    setTempCity(localStorage.getItem('city'))
  },[])

  const City = localStorage.getItem('city')

  return (
    <div className=" h-screen w-screen bg-blue-200 flex flex-col justify-center items-center ">
      <Navbar handleChange={handleChange} handleKey={handleKey} city ={tempCity} />
      <MainPage city={City} />
    </div>
  );
}

export default App;
