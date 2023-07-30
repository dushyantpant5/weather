import React from 'react'

const Navbar = ({handleChange,handleKey,city}) => {
    
    return (
    <div className=' w-5/6 mb-6 flex items-center justify-between pr-4'>
        <h1 className='text-6xl text-white' style={{fontFamily:"Delicious Handrawn"}} >weather.com</h1>

        <input onChange={(e)=>handleChange(e.target.value)} onKeyDown={(e)=>handleKey(e)} value={city} className='px-4 py-2 rounded-md focus:outline-none bg-blue-100 ' type="text " placeholder='City' />

    </div>
  )
}

export default Navbar