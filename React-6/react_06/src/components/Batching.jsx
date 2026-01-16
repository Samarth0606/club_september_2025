import React, { useState } from 'react'

function Batching() {
    const [count,setCount] = useState(0);
    const [user,setUser] = useState("sam");
    function handleClick(){
        setCount(count+1);          //chnage in state  // inital value
        setCount((count)=>count+1); //change in state  // prev. value
        setUser("maverick");        //chnage in state
    }
  return (
    <div>
        <button onClick={handleClick}>Click - {count}</button>
        <h1>User: {user}</h1>
    </div>
  )
}

export default Batching