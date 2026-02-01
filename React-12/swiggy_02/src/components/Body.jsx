import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'

function Body() {
    let restArr = ApiCalling(); // 3s
    const [allRestaurantArr,setAllRestaurantArray] = useState(restArr);
    const [isClicked1,setIsClicked1] = useState(false); //filter
    const [isClicked2,setIsClicked2] = useState(false); //reset
    //solution
    useEffect(()=>{
      if(restArr && restArr.length){
        setAllRestaurantArray(restArr)
      }
    },[restArr])
  
    function filterTopRatedRestaurant(restArr){
      setAllRestaurantArray( restArr.filter((restaurant)=>restaurant.info.avgRating >= 4.3) )
      setIsClicked1(true);
      setIsClicked2(false);
    }
    function resetFilter(restArr){
        setAllRestaurantArray(restArr);
        setIsClicked2(true);
        setIsClicked1(false);
    }
  return (
    <>
        <div>
            <h1 className='font-bold text-2xl ml-10 mt-4'>Restaurants with online food delivery in Delhi</h1>
            <button onClick={()=>filterTopRatedRestaurant(restArr)} className={isClicked1? 'bg-amber-200 border rounded-xl w-1/12 p-1 ml-20 mt-3 text-xl' : 'border rounded-xl w-1/12 p-1 ml-20 mt-3 text-xl'}>Rating 4.3+</button>
            <button onClick={()=>resetFilter(restArr)} className={isClicked2? 'bg-amber-200 border rounded-xl w-1/12 p-1 ml-20 mt-3 text-xl' : 'border rounded-xl w-1/12 p-1 ml-20 mt-3 text-xl'}>Reset</button>
        </div>
        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard restArr={allRestaurantArr}/>
        </div>
    </>
  )
}

export default Body