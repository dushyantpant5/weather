import React, { useEffect, useState } from "react";

const WeatherBlock = ({city}) => {
  const [wData, setwData] = useState();

  async function fetchData() {
    
      const url = `http://api.weatherapi.com/v1/current.json?key=fc9a0edbdf9c48d7bc8125029233007&q=${city}`;
      

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // console.log(data);
      setwData(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <>
      {wData && (
        <div className="flex flex-col items-center justify-center gap-10 p-4 " style={{height:"60%" , width:"60%"}}>
          
          <div>
            <h1 className="text-7xl" style={{fontFamily:"Merriweather Sans"}} >{wData.location.name}</h1>
            <span className="text-2xl" >{wData.location.country}</span>
          </div>

          <div className="flex items-center justify-between gap-40" >
            <span className="text-2xl" >{wData.current.condition.text}</span>
            <div className="flex items-center" >
              <span className="text-5xl ml-20 ">{wData.current.temp_c}°</span>
              <img src={wData.current.condition.icon} alt="" />
            </div>
          </div>

        </div>
      )}

      {
        !wData && ( <div>
          <h1 className="text-7xl" style={{fontFamily:"Merriweather Sans"}} >{`There is no place as ${city} `}</h1>
        </div> )
      }

    </>
  );
};

export default WeatherBlock;
