import React, { memo, useCallback } from 'react'
import { useState } from 'react'

function UseCallback() {
    // const [umar,setUmar] = useState(100);
    const [count,setCount] = useState(0);

    //memoized the fn
    let a = useCallback( function(){
        console.log("hello");  
    }, [])

  return (
    <div>
        {/* <Chotu age={umar} /> */}
        {/* <button onClick={()=>setUmar(Math.floor(Math.random()*10))}>Change Age</button> */}
        <Chotu age={a} />
        <button onClick={()=>setCount(count+1)}>Count:{count}</button>
    </div>
  )
}

const Chotu = memo( function({age}){
    return(
        <h1>Hello from - {age()}</h1>
    )
} )


export default UseCallback