

import React, { useState } from 'react'

function Questions({characters}) {
    // console.log(characters);
    // console.log(cartoon);
    // console.log(cartoon.heroes);
    // console.log(cartoon.villains);
    const [cartoon,setCartoon] = useState([]);

    function handleH(){
        setCartoon(characters.heroes)
    }
    function handleV(){
        setCartoon(characters.villains)
    }
  return (
    <div>
        <button onClick={handleH}>Show H</button>
        <button onClick={handleV}>Show V</button>
        {
            cartoon.map((item)=>{
                return(
                    <div>
                        <h1>Name: {item.name}</h1>
                        <h1>Powers: {item.powers}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Questions