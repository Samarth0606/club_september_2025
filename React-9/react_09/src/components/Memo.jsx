import React, { memo, useState } from 'react'

function Memo() {
    const [umar,setUmar] = useState(100);
    function handleAgeChange(){
        setUmar( Math.floor(Math.random()*10) )
    }
  return (
    <div>
        <Chotu age={umar} />
        <button onClick={handleAgeChange} >Change Age</button>
        <Chotu age={90} />
        <Chotu age={65} />   
    </div>
  )
}

const Chotu = memo( function({age}){
    return(
        <div>
            <h1>HELLO FROM CHOTU - {age} </h1>
        </div>
    )
} )

// function Chotu({age}){
//     return(
//         <div>
//             <h1>HELLO FROM CHOTU - {age} </h1>
//         </div>
//     )
// }

export default Memo