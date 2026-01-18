import React, { useEffect, useState } from 'react'

function Lifecycle() {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        if(count === 0){
            console.log("componentDidMount"); 
        }
        else if(count>=1 && count<=5){
            console.log("componentDidUpdate");
        }
        if(count === 6){
            return ()=>{
                console.log('componentWillUnmount');
            }
        }
    },[count])

  return (
    <div>
        <h1 onClick={()=>setCount(count+1)}>Count: {count}</h1>
    </div>
  )
}

export default Lifecycle