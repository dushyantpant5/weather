import React from "react";

const Forecast = ({ forecastData }) => {

  return (
    <div className="flex list-none items-center justify-around w-full bg-sky-100/75 rounded-lg  ">
      {forecastData &&
        forecastData.forecastday.map((e,index) => {
          return (
            <div className="flex flex-col items-center justify-between p-4 " key={e.date_epoch}>
              <div className="flex items-center justify-between" >
               { <span className="text-xl" >{e.day.avgtemp_c}°</span>}
                <img height={50} width={50} src={e.day.condition.icon} alt="" />
              </div>
              {<span  style={{fontFamily:"Merriweather Sans"}} className="text-xl mt-2" >Day {index+1}</span>}
            </div>
          );
        })}
    </div>
  );
};

export default Forecast;
