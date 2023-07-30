import React from 'react'
import WeatherBlock from './Components/WeatherBlock'


const MainPage = ({city}) => {
  
  
  return (
    <div className='flex container mx-auto items-center justify-center h-5/6 w-5/6 bg-white rounded-lg '>
      <div className='container mx-auto p-10 h-full flex justify-center items-center main-block rounded-lg' >
        <WeatherBlock city={city} />
      </div>
    </div>
  )
}

export default MainPage 