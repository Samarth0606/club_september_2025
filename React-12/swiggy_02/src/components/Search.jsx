import React from 'react'

function Search({restArr, setAllRestaurantArray}) {

    function handleInput(searchedText){
        setAllRestaurantArray(restArr.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase())))
    }   
  return (
    <div>
        <input className='border rounded-xl p-2 m-2' onChange={(e)=>handleInput(e.target.value)} type="text" placeholder='Search here' />
    </div>
  )
}

export default Search