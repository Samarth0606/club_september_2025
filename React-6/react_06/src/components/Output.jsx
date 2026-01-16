import React, { useState } from 'react'

function Output() {
    const [count,setCount] = useState(5);
    function handleClick(){
        setCount(count+1);           // 6  
        setCount((count)=>count+1);  // 7
        setCount((count)=>count+2);  // 9
        setCount(count+2);           // 7
        setCount((count)=>count+2);  // 9 (ui dominant)
    }
  return (
    <div>
        <button onClick={handleClick}>Click - {count}</button>
    </div>
  )
}

export default Output;