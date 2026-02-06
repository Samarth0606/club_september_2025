import React, { useContext, useState } from 'react'
import { CountContext } from '../Context';

function PropDrilling() {
    const [count,setCount] = useState(0);
  return (
    <div>
        <CountContext.Provider value={count}>
            <Count setCount={setCount} />
        </CountContext.Provider>
    </div>
  )
}

function Count({setCount}) {
  return (
    <>
        <CountRenderer/>
        <Button setCount={setCount} />
    </>
  )
}

function CountRenderer(){
    let count = useContext(CountContext)
    return(
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}

function Button({setCount}) {
    let count = useContext(CountContext)
  return (
    <>
        <btn onClick={()=>setCount(count+1)} >Inc</btn>
        <btn onClick={()=>setCount(count-1)} >Dec</btn>
    </>
  )
}

export default PropDrilling