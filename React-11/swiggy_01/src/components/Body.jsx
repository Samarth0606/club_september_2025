import React from 'react'
import RestaurantCard from './RestaurantCard'

function Body() {
  return (
    <>
        <div>
            <h1 className='font-bold text-2xl ml-10 mt-4'>Restaurants with online food delivery in Delhi</h1>
            <button className='border rounded-xl w-1/12 p-1 ml-20 mt-3 text-xl'>Rating 4.5+</button>
            <button className='border rounded-xl w-1/12 p-1 ml-10 mt-3 text-xl'>Reset</button>
        </div>
        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    </>
  )
}

export default Body