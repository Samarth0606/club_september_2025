import React, { useRef, useState } from 'react'

function UseRef() {
    const [count,setCount] = useState(0);
    const countRef = useRef(0);
    function handleInc(){
        countRef.current++
    }
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>COUNTER - {count}</button>
        <br />
        <button  onClick={handleInc}>Inc - {countRef.current}</button>
    </div>
  )
}

export default UseRef

